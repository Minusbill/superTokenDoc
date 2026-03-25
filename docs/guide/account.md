# 注册并创建 Key

本页说明如何完成最短路径接入。

## 第一步：创建账号

1. 打开你的 SuperToken 控制台。
2. 完成注册或由管理员邀请加入团队。
3. 进入 `API Keys` 页面。

## 第二步：创建访问 Key

建议至少创建两类 Key：

- `personal-dev`：本地开发使用
- `ci-or-bot`：自动化或团队共享机器人使用

## 第三步：记录基础信息

后续工具接入通常需要两项信息：

```bash
export SUPERTOKEN_BASE_URL="https://supertoken.cc/v1"
export SUPERTOKEN_API_KEY="sk-xxxxx"
```

## 权限建议

<div class="tip-grid">
  <div class="tip-box">
    <strong>开发 Key</strong>
    <p>限制单日额度，避免误用导致成本失控。</p>
  </div>
  <div class="tip-box">
    <strong>团队 Key</strong>
    <p>按项目分组，便于后续对账与配额管理。</p>
  </div>
  <div class="tip-box">
    <strong>CI Key</strong>
    <p>单独配置环境变量，不要复用个人 Key。</p>
  </div>
</div>

## 常见错误

- Key 复制时带了空格或换行
- Base URL 忘了带 `/v1`
- 使用了已经禁用或超额的 Key

## 下一步

- [分组与计价](/guide/pricing)
- [充值与退款](/guide/recharge)
