# Anthropic 格式

对于 Claude 生态工具，建议保留 Anthropic 兼容接口。

## 消息接口

```bash
curl https://supertoken.cc/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: sk-xxxxx" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-sonnet",
    "max_tokens": 1024,
    "messages": [
      { "role": "user", "content": "Explain SuperToken in one paragraph." }
    ]
  }'
```

## 建议

- 与官方字段命名保持一致
- 对不支持的参数给出明确提示
- 保留速率限制头信息
