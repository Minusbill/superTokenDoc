# API 概览

SuperToken 对外建议保留两套兼容接口：

- OpenAI 风格接口
- Anthropic 风格接口

## 基础地址

```text
https://supertoken.cc
```

## 鉴权

```http
Authorization: Bearer sk-xxxxx
```

## 支持范围

- 文本对话
- 流式输出
- 模型路由
- 团队级 Key 管理

## 推荐响应原则

- 保持兼容字段
- 明确错误码
- 对限流和余额不足给出清晰提示

## 下一步

- [OpenAI 格式](/api/openai)
- [Anthropic 格式](/api/anthropic)
