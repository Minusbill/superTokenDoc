# CC-Switch Windows 安装

把 SuperToken 作为一个 profile 写进去：

```powershell
$env:SUPERTOKEN_BASE_URL="https://supertoken.cc"
$env:SUPERTOKEN_API_KEY="sk-xxxxx"
```

建议至少准备 `dev` 和 `prod` 两个 profile。
