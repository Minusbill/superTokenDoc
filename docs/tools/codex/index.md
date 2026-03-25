# Codex 概览

如果你的 Codex 工作流支持自定义 OpenAI 兼容入口，SuperToken 可以直接作为它的上游地址。

## 推荐参数

```bash
export OPENAI_BASE_URL="https://supertoken.cc/v1"
export OPENAI_API_KEY="sk-xxxxx"
```

## 建议

- 给 Codex 单独配置项目 Key
- 高成本模型单独限额
- 团队场景使用共享分组而不是共享个人 Key
