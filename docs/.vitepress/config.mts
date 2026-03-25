import { defineConfig } from "vitepress";

const baseUrl = "https://supertoken.cc";

export default defineConfig({
  lang: "zh-CN",
  title: "SuperToken",
  description: "专注于提供高效的AI开发工具和解决方案",
  cleanUrls: true,
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "快速入门", link: "/guide/" },
      { text: "工具部署", link: "/tools/" },
      { text: "API文档", link: "/api/" },
      { text: "帮助中心", link: "/help/" }
    ],
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/></svg>'
        },
        link: "https://supertoken.cc",
        ariaLabel: "SuperToken 官网"
      }
    ],
    sidebar: {
      "/guide/": [
        {
          text: "快速入门",
          items: [
            { text: "1. SuperToken 介绍", link: "/guide/" },
            { text: "2. 注册并创建 Key", link: "/guide/account" },
            { text: "3. 分组与计价", link: "/guide/pricing" },
            { text: "4. 充值与退款", link: "/guide/recharge" },
            { text: "5. 代理邀请", link: "/guide/invite" }
          ]
        }
      ],
      "/tools/": [
        {
          text: "开始之前",
          items: [
            { text: "工具概览", link: "/tools/" },
            { text: "安装 Node.js", link: "/tools/nodejs/" },
            { text: "Windows 安装", link: "/tools/nodejs/windows" },
            { text: "macOS 安装", link: "/tools/nodejs/macos" },
            { text: "Linux 安装", link: "/tools/nodejs/linux" }
          ]
        },
        {
          text: "Claude Code",
          items: [
            { text: "概览", link: "/tools/claude-code/" },
            { text: "Windows 安装", link: "/tools/claude-code/windows" },
            { text: "macOS 安装", link: "/tools/claude-code/macos" },
            { text: "Linux 安装", link: "/tools/claude-code/linux" }
          ]
        },
        {
          text: "OpenClaw",
          items: [
            { text: "概览", link: "/tools/openclaw/" },
            { text: "Windows 安装", link: "/tools/openclaw/windows" },
            { text: "macOS 安装", link: "/tools/openclaw/macos" },
            { text: "Linux 安装", link: "/tools/openclaw/linux" }
          ]
        },
        {
          text: "Codex",
          items: [
            { text: "概览", link: "/tools/codex/" },
            { text: "Windows 安装", link: "/tools/codex/windows" },
            { text: "macOS 安装", link: "/tools/codex/macos" },
            { text: "Linux 安装", link: "/tools/codex/linux" }
          ]
        },
        {
          text: "Gemini CLI",
          items: [
            { text: "概览", link: "/tools/gemini-cli/" },
            { text: "Windows 安装", link: "/tools/gemini-cli/windows" },
            { text: "macOS 安装", link: "/tools/gemini-cli/macos" },
            { text: "Linux 安装", link: "/tools/gemini-cli/linux" }
          ]
        },
        {
          text: "Droid CLI",
          items: [
            { text: "概览", link: "/tools/droid-cli/" },
            { text: "Windows 安装", link: "/tools/droid-cli/windows" },
            { text: "macOS 安装", link: "/tools/droid-cli/macos" },
            { text: "Linux 安装", link: "/tools/droid-cli/linux" }
          ]
        },
        {
          text: "OpenCode",
          items: [
            { text: "概览", link: "/tools/opencode/" },
            { text: "Windows 安装", link: "/tools/opencode/windows" },
            { text: "macOS 安装", link: "/tools/opencode/macos" },
            { text: "Linux 安装", link: "/tools/opencode/linux" }
          ]
        },
        {
          text: "配置工具",
          items: [
            { text: "CC-Switch 概览", link: "/tools/cc-switch/" },
            { text: "Windows 安装", link: "/tools/cc-switch/windows" },
            { text: "macOS 安装", link: "/tools/cc-switch/macos" },
            { text: "Linux 安装", link: "/tools/cc-switch/linux" }
          ]
        }
      ],
      "/api/": [
        {
          text: "API文档",
          items: [
            { text: "API概览", link: "/api/" },
            { text: "OpenAI 格式", link: "/api/openai" },
            { text: "Anthropic 格式", link: "/api/anthropic" }
          ]
        }
      ],
      "/help/": [
        {
          text: "帮助中心",
          items: [
            { text: "帮助首页", link: "/help/" },
            { text: "常见问题", link: "/help/faq" },
            { text: "疑难杂症", link: "/help/troubleshooting" },
            { text: "获取支持", link: "/help/support" }
          ]
        },
        {
          text: "政策条款",
          items: [
            { text: "使用政策", link: "/help/usage-policy" },
            { text: "服务条款", link: "/help/terms" }
          ]
        }
      ],
    },
    outline: {
      label: "本页导航"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    footer: {
      message: "SuperToken - 让全球顶级 AI 模型触手可达",
      copyright: "Copyright © 2026-present SuperToken"
    }
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark"
    }
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=2" }],
    ["link", { rel: "shortcut icon", href: "/favicon.svg?v=2" }],
    ["link", { rel: "apple-touch-icon", href: "/favicon.svg?v=2" }],
    ["meta", { name: "theme-color", content: "#10152b" }],
    ["meta", { name: "keywords", content: "SuperToken, AI API, Claude, GPT, Gemini" }],
    ["meta", { name: "supertoken-base-url", content: baseUrl }]
  ]
});
