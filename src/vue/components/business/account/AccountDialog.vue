<!--
  账号管理（Git / SVN 凭据）—— **两个面板共用的同一个对话框**，主从两栏布局。

  - **左栏**：已保存账号列表（类型徽标 / 显示名 / 用户@主机 / 凭据状态点），
    顶部是数量与「添加账号」，底部常驻「当前仓库将使用哪条」的生效预览；
  - **右栏**：选中账号的内容 —— 全量字段直接可编辑，测试连通 / 写入系统 / 删除就地操作；
    未选中时给一句引导（accPick），「添加账号」则在右栏开一份新账号草稿。

  为什么是两栏而不是「列表 ↔ 表单」来回切换：后者每改一条都要退出再进来，而账号字段
  （主机 / 地址前缀 / 用户名）彼此关联、常要对着列表里另一条参考着填，同屏可见才顺手。

  视觉直接复用「克隆 Git / 检出 SVN」弹窗的共享类（.fw-clone-dialog / .fw-clone-head …），
  仅按当前类型切换强调色（Git 橙 / SVN 蓝），与克隆弹窗完全同款。
-->
<template>
  <el-dialog
    v-model="visible"
    class="fw-clone-dialog fw-acc-dlg"
    :class="accentClass"
    width="800px"
    align-center
    :close-on-click-modal="false"
    append-to-body
    @closed="onClosed"
  >
    <template #header>
      <div class="fw-clone-head">
        <span class="fw-clone-badge"><icon name="shield" :size="20" /></span>
        <div class="fw-clone-headtext">
          <div class="fw-clone-headtitle">{{ t("accTitle") }}</div>
          <div class="fw-clone-headsub">{{ t("accCaption") }}</div>
        </div>
      </div>
    </template>

    <div class="fw-acc-split">
      <!-- ══ 左栏：账号列表 ══ -->
      <div class="fw-acc-rail">
        <div class="fw-acc-railhead">
          <span class="fw-acc-count">{{ t("accListTitle") }} · {{ accounts.length }}</span>
          <el-button size="small" class="fw-acc-iconbtn" :title="t('accAdd')" @click="startNew">
            <icon name="plus" :size="13" />
          </el-button>
        </div>
        <div v-if="!accounts.length" class="fw-acc-empty">{{ t("accEmpty") }}</div>
        <div v-else class="fw-acc-railist">
          <button
            v-for="a in accounts"
            :key="a.id"
            type="button"
            class="fw-acc-item"
            :class="{ on: !isNew && a.id === editingId }"
            @click="select(a)"
          >
            <span class="fw-acc-kind" :data-kind="a.kind">{{ a.kind === "svn" ? "SVN" : "Git" }}</span>
            <span class="fw-acc-itemtext">
              <span class="fw-acc-itemname" :title="a.name">{{ a.name }}</span>
              <span class="fw-acc-itemsub" :title="`${a.username}@${a.host}`">{{ a.username }}@{{ a.host }}</span>
            </span>
            <!-- 凭据状态用一个小圆点，标题里给文字说明（列表宽度有限，不塞整句） -->
            <span
              class="fw-acc-dot"
              :class="{ on: a.hasSecret }"
              :title="a.hasSecret ? t('accHasSecret') : t('accNoSecret')"
            ></span>
          </button>
        </div>
        <!-- 生效预览：显示的就是执行期真正会注入的那条账号（与 host 侧同一套匹配规则） -->
        <div v-if="accountDialog.url" class="fw-acc-effective" :title="accountDialog.url">
          <span class="fw-acc-efflabel">{{ t("accEffective") }}</span>
          <span v-if="effective" class="fw-acc-effval">{{ effective.name }}（{{ effective.username }}@{{ effective.host }}）</span>
          <span v-else class="fw-acc-effnone">{{ t("accEffectiveNone") }}</span>
        </div>
      </div>

      <!-- ══ 右栏：选中账号的内容 ══ -->
      <div class="fw-acc-detail">
        <div v-if="!hasTarget" class="fw-acc-blank">{{ t("accPick") }}</div>
        <template v-else>
          <div class="fw-acc-detailhead">
            <span class="fw-acc-detailtitle">{{ isNew ? t("accNewTitle") : t("accEditTitle") }}</span>
            <span v-if="current" class="fw-acc-detailsub">{{ current.username }}@{{ current.host }}</span>
          </div>

          <div class="fw-acc-form">
            <div class="fw-clone-field">
              <span class="fw-clone-label">{{ t("accKind") }}</span>
              <el-select v-model="form.kind" size="small" class="fw-acc-kindsel" popper-class="fw-acc-popper">
                <el-option value="git" :label="t('accKindGit')" />
                <el-option value="svn" :label="t('accKindSvn')" />
              </el-select>
            </div>
            <div class="fw-clone-field">
              <span class="fw-clone-label">{{ t("accName") }}</span>
              <el-input v-model="form.name" size="small" :placeholder="draftLabel" />
            </div>
            <div class="fw-clone-field">
              <span class="fw-clone-label">{{ t("accHost") }}</span>
              <el-input v-model="form.host" size="small" :placeholder="t('accHostPlaceholder')" />
            </div>
            <div class="fw-clone-field">
              <span class="fw-clone-label">{{ t("accUrl") }}</span>
              <el-input v-model="form.url" size="small" :placeholder="t('accUrlPlaceholder')" />
              <span class="fw-clone-tip">{{ t("accUrlHint") }}</span>
            </div>
            <div class="fw-clone-field">
              <span class="fw-clone-label">{{ t("accUsername") }}</span>
              <el-input v-model="form.username" size="small" :placeholder="t('accUsername')" />
            </div>
            <div class="fw-clone-field">
              <span class="fw-clone-label">{{ t("accSecretKind") }}</span>
              <div class="fw-clone-row">
                <el-select v-model="form.secretKind" size="small" class="fw-acc-kindslim" popper-class="fw-acc-popper">
                  <el-option value="password" :label="t('accSecretPassword')" />
                  <el-option value="token" :label="t('accSecretToken')" />
                </el-select>
                <el-input
                  v-model="form.secret"
                  size="small"
                  type="password"
                  show-password
                  class="fw-acc-secretinput"
                  :placeholder="editing && current?.hasSecret ? t('accKeepSecret') : t('accSecret')"
                />
              </div>
            </div>
            <div class="fw-clone-field">
              <span class="fw-clone-label">{{ t("accNote") }}</span>
              <el-input v-model="form.note" size="small" />
            </div>
          </div>

          <div v-if="errText" class="fw-clone-error">{{ errText }}</div>

          <!-- 行内动作：都作用于「当前右栏这条」。未保存的草稿没有已存凭据，
               测试只能内联验、写入系统与删除也无对象，故只在编辑态出现。 -->
          <div class="fw-acc-actions">
            <el-button size="small" :loading="busy" @click="testDraft">{{ t("accTest") }}</el-button>
            <el-button v-if="editing" size="small" :loading="applying" @click="applySelected">{{ t("accApply") }}</el-button>
            <el-button
              v-if="editing"
              size="small"
              :class="{ 'fw-acc-danger': confirmDelete === current?.id }"
              @click="removeSelected"
            >
              {{ confirmDelete === current?.id ? t("accDeleteConfirm") : t("accDelete") }}
            </el-button>
          </div>
          <div class="fw-clone-tip">{{ t("accApplyHint") }}</div>
        </template>
      </div>
    </div>

    <template #footer>
      <el-button size="small" @click="close">{{ t("accCancel") }}</el-button>
      <el-button size="small" type="primary" :loading="busy" :disabled="!hasTarget" @click="save">
        {{ t("accSave") }}
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import { useI18n } from "../../../composables/core/i18n";
import { toastError, toastOk, toastWarning } from "../../../composables/core/toast";
import Icon from "../../common/Icon.vue";
import * as api from "../../../composables/core/useApi";
import { accounts, accountDialog, closeAccountDialog, refreshAccounts } from "../../../stores/accounts";

const { t } = useI18n();

const visible = computed({
  get: () => accountDialog.open,
  set: (v: boolean) => {
    if (!v) closeAccountDialog();
  },
});

/** 右栏当前编辑的是哪条：要么是列表里选中的（editingId），要么是一份新草稿（isNew）。 */
const editingId = ref<string | null>(null);
const isNew = ref(false);
const editing = computed(() => !isNew.value && editingId.value !== null);
const hasTarget = computed(() => isNew.value || editingId.value !== null);
const current = computed(() => accounts.value.find((a) => a.id === editingId.value) ?? null);

const form = reactive({
  kind: "git" as api.AccountKind,
  name: "",
  host: "",
  url: "",
  username: "",
  secretKind: "password" as "password" | "token",
  secret: "",
  note: "",
});

const busy = ref(false);
const applying = ref(false);
const confirmDelete = ref<string | null>(null);
const errText = ref("");
/** 当前面板仓库地址实际命中的账号（null = 无匹配，将走系统凭据 / svn 自身缓存）。 */
const effective = ref<api.AccPublic | null>(null);

/** 拉取「当前仓库将使用哪条账号」；地址为空则清空（不请求）。 */
async function loadEffective(): Promise<void> {
  const url = accountDialog.url?.trim() ?? "";
  if (!url) {
    effective.value = null;
    return;
  }
  const r = await api.accountMatch(accountDialog.kind, url).catch(() => null);
  effective.value = r?.account ?? null;
}

/** 强调色跟随右栏正在看的那条（新草稿跟随其类型），与克隆弹窗同一套变量。 */
const accentClass = computed(() => {
  const kind = isNew.value ? form.kind : (current.value?.kind ?? form.kind);
  return kind === "svn" ? "fw-clone-svn" : "fw-clone-git";
});

/** 显示名留空时的回落文案（与 host 侧生成规则一致）。 */
const draftLabel = computed(() => {
  const u = form.username.trim() || "user";
  const h = form.host.trim() || "host";
  return `${u}@${h}`;
});

/** 把表单填成某条账号（口令不回显，留空 = 沿用现有）。 */
function fillForm(a: api.AccPublic): void {
  form.kind = a.kind;
  form.name = a.name;
  form.host = a.host;
  form.url = a.url;
  form.username = a.username;
  form.secretKind = a.secretKind;
  form.secret = "";
  form.note = a.note;
}

/** 在右栏选中一条账号。 */
function select(a: api.AccPublic): void {
  isNew.value = false;
  editingId.value = a.id;
  confirmDelete.value = null;
  errText.value = "";
  fillForm(a);
}

watch(
  () => accountDialog.open,
  (open) => {
    if (!open) return;
    isNew.value = false;
    editingId.value = null;
    confirmDelete.value = null;
    errText.value = "";
    busy.value = false;
    applying.value = false;
    effective.value = null;
    // 先刷新列表，再选第一条并算「当前仓库将使用哪条」（两者都依赖最新列表）。
    void (async () => {
      await refreshAccounts();
      await loadEffective();
      const first = accounts.value[0];
      if (first) select(first);
    })();
  },
  { immediate: true },
);

function onClosed(): void {
  closeAccountDialog();
}

function close(): void {
  closeAccountDialog();
}

/** 在右栏开一份新账号草稿（类型与地址按打开面板预填）。 */
function startNew(): void {
  isNew.value = true;
  editingId.value = null;
  confirmDelete.value = null;
  errText.value = "";
  form.kind = accountDialog.kind;
  form.name = "";
  form.host = "";
  form.url = accountDialog.url;
  form.username = "";
  form.secretKind = "password";
  form.secret = "";
  form.note = "";
}

async function withBusy(fn: () => Promise<void>): Promise<void> {
  busy.value = true;
  errText.value = "";
  try {
    await fn();
  } catch (e) {
    errText.value = e instanceof Error ? e.message : String(e);
  } finally {
    busy.value = false;
  }
}

/** 写入系统凭据存储（显式动作：Git → 凭据管理器，SVN → svn 自身认证缓存）。 */
async function applySelected(): Promise<void> {
  const a = current.value;
  if (!a) return;
  applying.value = true;
  try {
    const r = await api.accountApply(a.id);
    toastOk(`${t("accApplyOk")} · ${r.detail}`);
  } catch (e) {
    toastError(e instanceof Error ? e.message : String(e));
  } finally {
    applying.value = false;
  }
}

/** 删除：两击确认（第一次点亮确认态，第二次才真删，避免误删后重输口令）。 */
async function removeSelected(): Promise<void> {
  const a = current.value;
  if (!a) return;
  if (confirmDelete.value !== a.id) {
    confirmDelete.value = a.id;
    return;
  }
  confirmDelete.value = null;
  try {
    await api.accountRemove(a.id);
    toastOk(t("accDeleted"));
    await refreshAccounts();
    await loadEffective();
    // 删掉的是右栏那条：改选剩下的第一条，列表空则回到引导态。
    const first = accounts.value[0];
    if (first) select(first);
    else {
      editingId.value = null;
      isNew.value = false;
    }
  } catch (e) {
    toastError(e instanceof Error ? e.message : String(e));
  }
}

/** 测试连通：重输了口令则内联测，否则用已存配置测（口令不回显，无法内联拼出）。 */
async function testDraft(): Promise<void> {
  if (!form.host.trim() || !form.username.trim()) {
    toastWarning(t("accRequired"));
    return;
  }
  const useStored = editing.value && !form.secret.trim();
  if (!useStored && !form.secret.trim()) {
    toastWarning(t("accSecretRequired"));
    return;
  }
  await withBusy(async () => {
    const r = await api.accountTest(
      useStored
        ? { id: editingId.value ?? undefined }
        : {
            kind: form.kind,
            host: form.host.trim(),
            url: form.url.trim(),
            username: form.username.trim(),
            secret: form.secret,
            secretKind: form.secretKind,
          },
    );
    if (r.ok) toastOk(`${t("accTestOk")} · ${r.detail}`);
    else toastError(`${t("accTestFail")} · ${r.detail}`);
  });
}

async function save(): Promise<void> {
  if (!form.host.trim() || !form.username.trim()) {
    toastWarning(t("accRequired"));
    return;
  }
  if (isNew.value && !form.secret) {
    toastWarning(t("accSecretRequired"));
    return;
  }
  await withBusy(async () => {
    const body: api.AccInput = {
      kind: form.kind,
      host: form.host.trim(),
      url: form.url.trim(),
      name: form.name.trim(),
      username: form.username.trim(),
      // 留空 = 沿用现有（更新）／由上面的校验拦住（新增）
      secret: form.secret || undefined,
      secretKind: form.secretKind,
      note: form.note.trim(),
    };
    if (editing.value && editingId.value) {
      await api.accountUpdate({ id: editingId.value, ...body });
      toastOk(t("accSaved"));
      await refreshAccounts();
      await loadEffective();
      // 刷新后重新填一次：host / 显示名的回落值可能已被 host 侧改写。
      const same = accounts.value.find((a) => a.id === editingId.value);
      if (same) fillForm(same);
    } else {
      const r = await api.accountAdd(body);
      toastOk(t("accSaved"));
      await refreshAccounts();
      await loadEffective();
      // 新建完直接落到刚建的那条，不用再去列表里找。
      const created = accounts.value.find((a) => a.id === r.account.id);
      if (created) select(created);
    }
  });
}
</script>

<style src="../repo/clone-shared.css"></style>
<style scoped>
/* 主从两栏：左栏固定宽（列表），右栏吃掉剩余宽度（内容）。两栏各自滚动，
   弹窗总高因此恒定 —— 切账号时不会因字段多少而跳高度。 */
.fw-acc-split {
  display: flex;
  gap: 14px;
  height: 52vh;
  min-height: 300px;
}

/* ── 左栏 ── */
.fw-acc-rail {
  flex: 0 0 236px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fw-acc-railhead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.fw-acc-count {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-acc-railist {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding-right: 2px;
}
.fw-acc-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 7px 9px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 0.12s, border-color 0.12s;
}
.fw-acc-item:hover:not(.on) {
  background: var(--dsh-bg, #0d1117);
  border-color: var(--dsh-border, #30363d);
}
.fw-acc-item.on {
  background: var(--clone-accent-weak);
  border-color: var(--clone-accent-border);
}
.fw-acc-item:focus-visible {
  outline: 2px solid var(--clone-accent);
  outline-offset: 1px;
}
.fw-acc-itemtext {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.fw-acc-itemname {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg, #c9d1d9);
}
.fw-acc-itemsub {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-acc-dot {
  flex: 0 0 auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--dsh-border, #30363d);
}
.fw-acc-dot.on {
  background: var(--dsh-accent, #3fb950);
}
.fw-acc-kind {
  flex: 0 0 auto;
  padding: 1px 6px;
  border-radius: 5px;
  border: 1px solid var(--clone-accent-border);
  background: var(--clone-accent-weak);
  color: var(--clone-accent);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  letter-spacing: 0.4px;
}
.fw-acc-empty {
  padding: 18px 0;
  text-align: center;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
/* 生效预览常驻左栏底部（margin-top:auto 把它压在列表下方） */
.fw-acc-effective {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding: 7px 9px;
  border: 1px dashed var(--clone-accent-border);
  border-radius: 8px;
  background: var(--clone-accent-weak);
  font-size: calc(11px * var(--dsh-fs-scale, 1));
}
.fw-acc-efflabel {
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-acc-effval {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsh-fg, #c9d1d9);
  font-weight: 600;
}
.fw-acc-effnone {
  color: var(--dsh-fg-weak, #8b949e);
}

/* ── 右栏 ── */
.fw-acc-detail {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: auto;
  padding-left: 16px;
  border-left: 1px solid var(--dsh-border, #30363d);
}
.fw-acc-detailhead {
  display: flex;
  align-items: baseline;
  gap: 8px;
  min-width: 0;
}
.fw-acc-detailtitle {
  flex: 0 0 auto;
  font-size: calc(13px * var(--dsh-fs-scale, 1));
  font-weight: 600;
  color: var(--dsh-fg, #c9d1d9);
}
.fw-acc-detailsub {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: calc(11px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-acc-blank {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  text-align: center;
  font-size: calc(12px * var(--dsh-fs-scale, 1));
  color: var(--dsh-fg-weak, #8b949e);
}
.fw-acc-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fw-acc-kindsel { width: 140px; }
.fw-acc-kindslim { width: 112px; flex: 0 0 auto; }
.fw-acc-secretinput { flex: 1 1 auto; min-width: 0; }
.fw-acc-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* 控件尺寸与「克隆 Git / 检出 SVN」「SSH 主机」弹窗统一：输入框 / 下拉 / 按钮一律 32px。
   ⛔ `--el-component-size-small` 默认 **24px**，正是本弹窗输入框比下拉/按钮矮的根因：
   EP 的 `.el-input--small { --el-input-height: var(--el-component-size-small) }` 决定输入框高度
   （inner 高 = 该值 - 2px，wrapper 再各加 1px padding），而 `.el-select__wrapper` 的 min-height
   是**写死的**（非 small 32px / small 24px），**不吃这个变量** → 下拉必须单独覆盖（见下），
   两者缺一不可，只改一处仍会留下三种高度。 */
:global(.fw-acc-dlg.el-dialog) { --el-component-size-small: 32px; }

/* Element Plus 控件按项目令牌着色（浮层挂 body，必须 :global） */
:global(.fw-acc-dlg .el-input__wrapper) {
  background: var(--dsh-bg, #0d1117);
  border-radius: 8px;
  box-shadow: 0 0 0 1px var(--dsh-border, #30363d) inset;
  transition: box-shadow 0.15s;
}
:global(.fw-acc-dlg .el-input__wrapper:hover:not(.is-focus)) {
  box-shadow: 0 0 0 1px var(--dsh-fg-weak, #8b949e) inset;
}
:global(.fw-acc-dlg .el-input__wrapper.is-focus) {
  box-shadow: 0 0 0 1px var(--clone-accent) inset, 0 0 0 3px var(--clone-accent-weak);
}
:global(.fw-acc-dlg .el-input__inner) { color: var(--dsh-fg, #c9d1d9); }
:global(.fw-acc-dlg .el-input__inner::placeholder) { color: var(--dsh-fg-weak, #8b949e); opacity: 0.7; }
:global(.fw-acc-dlg .el-select--small .el-select__wrapper) {
  min-height: 32px;
  background: var(--dsh-bg, #0d1117);
  border-radius: 8px;
  box-shadow: 0 0 0 1px var(--dsh-border, #30363d) inset;
}
:global(.fw-acc-dlg .el-select--small .el-select__wrapper.is-focused) {
  box-shadow: 0 0 0 1px var(--clone-accent) inset, 0 0 0 3px var(--clone-accent-weak);
}
:global(.fw-acc-dlg .el-dialog__footer) { display: flex; justify-content: flex-end; gap: 10px; }
:global(.fw-acc-dlg .el-button--small) {
  --el-button-size: 32px;
  height: 32px;
  min-width: 68px;
  border-radius: 8px;
  background: var(--dsh-bg, #0d1117);
  border: 1px solid var(--dsh-border, #30363d);
  color: var(--dsh-fg, #c9d1d9);
  font-weight: 500;
}
:global(.fw-acc-dlg .el-button--small:not(.el-button--primary):hover) {
  border-color: var(--clone-accent);
  color: var(--clone-accent);
  background: var(--dsh-bg, #0d1117);
}
:global(.fw-acc-dlg .el-button--small.el-button--primary) {
  background: var(--clone-accent);
  border-color: var(--clone-accent);
  color: #fff;
  font-weight: 600;
}
/* 左栏那个纯图标按钮：上面的 min-width:68px 是给文字按钮的，图标按钮要收窄 */
:global(.fw-acc-dlg .el-button--small.fw-acc-iconbtn) {
  min-width: 0;
  padding: 0 8px;
}
/* 两击删除的确认态：点亮为危险色，二次点击才真删 */
:global(.fw-acc-dlg .el-button--small.fw-acc-danger),
:global(.fw-acc-dlg .el-button--small.fw-acc-danger:hover) {
  border-color: #f85149;
  color: #f85149;
  background: rgba(248, 81, 73, 0.12);
}
/* el-select 下拉面板 Teleport 到 body：抬升层级并沿用项目主题色 */
:global(.fw-acc-popper) {
  z-index: 2147483300 !important;
  --el-select-dropdown-bg-color: var(--dsh-bg2, #161b22);
  --el-fill-color-blank: var(--dsh-bg2, #161b22);
  --el-fill-color-light: var(--dsh-bg2, #161b22);
  --el-text-color-regular: var(--dsh-fg, #c9d1d9);
  --el-border-color: var(--dsh-border, #30363d);
  background: var(--dsh-bg2, #161b22);
  border: 1px solid var(--dsh-border, #30363d);
  border-radius: 8px;
}
:global(.fw-acc-popper .el-select-dropdown__item) { color: var(--dsh-fg, #c9d1d9); border-radius: 4px; }
:global(.fw-acc-popper .el-select-dropdown__item.is-selected) { color: var(--dsh-accent, #238636); }
</style>
