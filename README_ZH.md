<h1 align="center">你好，我是 Stavr Mariskin 👋</h1>

<p align="center">
  <strong>专注于可靠 LLM 与智能体系统的 AI/ML 研究者和工程师。</strong>
</p>

<p align="center">
  我构建真实的 AI 系统，研究它们的表面可靠性在何处失效，
  并设计能够量化这些失败的评估流程。
</p>

<p align="center">
  <a href="README.md">English</a>
  ·
  <a href="README_RU.md">Русский</a>
  ·
  <a href="https://github.com/stavrmoris">GitHub</a>
  ·
  <a href="https://t.me/stavrmoris">Telegram</a>
  ·
  <a href="mailto:s.mariskin@g.nsu.ru">Email</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Focus-Reliable_AI-2563EB?style=flat-square">
  <img src="https://img.shields.io/badge/Research-LLM_%26_Agent_Evaluation-7C3AED?style=flat-square">
  <img src="https://img.shields.io/badge/Engineering-Python_%7C_PyTorch_%7C_FastAPI-0891B2?style=flat-square">
</p>

---

## 🧭 关于我

我是新西伯利亚国立大学 **应用人工智能** 专业二年级学生，也是一名同时参与研究与产品开发的 AI/ML 工程师。

我目前关注 **可靠 AI**：

- 事实性幻觉检测；
- LLM 智能体评估；
- 基于证据的决策与安全拒答；
- shortcut learning 与分布偏移；
- 可复现的应用机器学习研究。

我的三个主要项目都围绕同一个问题：

> **为什么 AI 系统经常看起来比实际更可靠？我们应当如何诚实地评估它们？**

---

## 🔬 主要研究项目

<table>
<tr>
<td width="33%" valign="top">

### 🛡️ [Guardian of Truth](https://github.com/stavrmoris/Guardian-of-Truth)

**利用 LLM 内部表示检测事实性幻觉。**

该白盒方法结合 hidden-state probing、contrast directions、不确定性特征、PCA 与轻量线性分类器。

**亮点**

- 174 个内部与不确定性特征
- 历史公开开发集 PR-AUC：**0.8541**
- 不依赖外部 LLM 裁判
- 可复现的公开研究包

</td>
<td width="33%" valign="top">

### 🔎 [ProcureTrace](https://github.com/stavrmoris/procuretrace)

**面向网页采购智能体的证据驱动验证。**

项目检查产品身份、强制规格、证据来源，以及智能体应该确认还是拒绝自动判断。

**亮点**

- exact-confirmation F1：**72.7% → 80.0%**
- selective accuracy：**82.9% → 88.4%**
- range-crossing errors：**3.1% → 0%**
- 60 个页面的冻结评估集

</td>
<td width="33%" valign="top">

### 📉 [SplitShift](https://github.com/stavrmoris/splitshift)

**诊断 shortcut learning 与分布偏移下的评估失效。**

这是对一个广告分类系统的复盘：其最初的高分在更严格的验证中无法保持。

**亮点**

- clean random CV F1：**0.559**
- GroupKFold F1：**0.552**
- cue ablation F1：**0.505**
- 数据相似度与 leakage 分析

</td>
</tr>
</table>

---

## 🧩 这些项目有什么共同点？

| 项目 | 失败模式 | 研究问题 |
|---|---|---|
| **Guardian of Truth** | 流畅的回答仍可能存在事实错误 | 内部表示能否暴露幻觉？ |
| **ProcureTrace** | 智能体可能自信地确认缺乏证据的产品 | 每个决策能否始终关联到网页证据？ |
| **SplitShift** | 较高的验证分数可能无法泛化 | 哪些 shortcut 与分布偏移会夸大性能？ |

它们共同构成了一个研究方向：**超越演示效果和单一指标，测量并提升 AI 系统的可靠性。**

---

## 🛠️ 其他工程项目

- **LocalScript AI Agent** — 基于 Qwen 的离线智能体，在隔离环境中生成并验证 Lua 脚本。
- **Orange Pi 6 Plus NPU** — 在 ARM64 Linux 上使用硬件 NPU 运行神经网络推理。
- **Demand Forecasting Service** — PyTorch LSTM、FastAPI 后端、React 仪表板与 Docker 部署。
- **Dion Background Lab** — 浏览器端实时人物分割和背景替换。
- **RAG 与智能体系统** — FastAPI、LangGraph、ChromaDB、本地与云端 LLM、工具调用与记忆。

---

## 🏆 成就

- **第 2 名** — Purple Hack 2026，Avito 赛道
- **第 3 名** — T1 Hackathon
- **第 3 名** — Cloud.ru Hackathon
- 在事实性幻觉检测与 AI 智能体任务中获得奖项

---

## ⚙️ 研究与工程技术栈

**Research:** LLM evaluation, representation analysis, hallucination detection, agent reliability, distribution shift, ablations, error analysis

**ML:** Python, PyTorch, scikit-learn, CatBoost, pandas, PCA, TF-IDF, feature engineering

**LLM systems:** LangGraph, LangChain, RAG, embeddings, reranking, MCP, local LLM inference

**Engineering:** FastAPI, Django, Docker, Docker Compose, pytest, Git, Linux, React

---

## 🎯 当前关注

- 研究实习与实验室机会；
- 可靠 LLM 与智能体系统；
- 基于真实 failure modes 的应用 AI 研究；
- 同时重视实验严谨性与工程实现的合作项目。

---

## 📬 联系方式

- Telegram: [@stavrmoris](https://t.me/stavrmoris)
- Email: [s.mariskin@g.nsu.ru](mailto:s.mariskin@g.nsu.ru)
- GitHub: [github.com/stavrmoris](https://github.com/stavrmoris)
