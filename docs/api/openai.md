# OpenAI 格式

如果你的客户端支持 OpenAI 兼容接口，通常可以直接切到 SuperToken。

## 聊天接口

```bash
curl https://supertoken.cc/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-xxxxx" \
  -d '{
    "model": "gpt-4.1-mini",
    "messages": [
      { "role": "user", "content": "写一个 hello world" }
    ]
  }'
```

## 返回建议

- 保持 `choices` 结构
- 保持 `usage` 统计
- 支持 `stream: true`

## 适配工具

- Codex
- OpenCode
- OpenClaw
- 部分 IDE 插件
