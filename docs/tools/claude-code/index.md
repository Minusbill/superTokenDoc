# Claude Code 概览

Claude Code 通常支持自定义 API 地址和 Key。接入 SuperToken 的关键是把默认网关替换成你的 SuperToken 网关。

## 接入参数

```bash
export SUPERTOKEN_BASE_URL="https://supertoken.cc"
export SUPERTOKEN_API_KEY="sk-xxxxx"
```

## 推荐模型

- `claude-sonnet`
- `claude-opus`

## 核心思路

1. 安装 Claude Code
2. 设置 Base URL
3. 设置 API Key
4. 运行一次测试请求
