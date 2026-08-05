<h1 align="center">Hi, I'm Stavr Mariskin 👋</h1>

<p align="center">
  <strong>AI/ML researcher and engineer focused on reliable LLM and agent systems.</strong>
</p>

<p align="center">
  I build real AI systems, study where their apparent reliability breaks,
  and design evaluation pipelines that make their failures measurable.
</p>

<p align="center">
  <a href="README_RU.md">Русский</a>
  ·
  <a href="README_ZH.md">中文</a>
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

## 🧭 About me

I am a second-year **Applied AI** student at Novosibirsk State University and an AI/ML engineer working across research and production-oriented systems.

My current focus is **reliable AI**:

- factual hallucination detection;
- evaluation of LLM agents;
- evidence grounding and safe abstention;
- shortcut learning and distribution shift;
- reproducible applied ML research.

Across my main projects, I study the same underlying problem:

> **Why do AI systems often look more reliable than they really are, and how can we evaluate them honestly?**

---

## 🔬 Selected research projects

<table>
<tr>
<td width="33%" valign="top">

### 🛡️ [Guardian of Truth](https://github.com/stavrmoris/Guardian-of-Truth)

**Detecting factual hallucinations from internal LLM representations.**

A white-box approach based on hidden-state probing, contrast directions, uncertainty signals, PCA, and a lightweight linear classifier.

**Highlights**

- 174 internal and uncertainty features
- historical public dev PR-AUC: **0.8541**
- no external LLM judge required
- reproducible public research package

</td>
<td width="33%" valign="top">

### 🔎 [ProcureTrace](https://github.com/stavrmoris/procuretrace)

**Evidence-grounded verification for web procurement agents.**

The project checks exact product identity, mandatory specifications, provenance, and whether the agent should confirm or abstain.

**Highlights**

- exact-confirmation F1: **72.7% → 80.0%**
- selective accuracy: **82.9% → 88.4%**
- range-crossing errors: **3.1% → 0%**
- frozen 60-page evaluation set

</td>
<td width="33%" valign="top">

### 📉 [SplitShift](https://github.com/stavrmoris/splitshift)

**Diagnosing shortcut learning and evaluation failure under distribution shift.**

A postmortem of an ad-classification system whose initial metrics did not survive cleaner validation.

**Highlights**

- clean random CV F1: **0.559**
- GroupKFold F1: **0.552**
- cue ablation F1: **0.505**
- similarity and leakage analysis

</td>
</tr>
</table>

---

## 🧩 What connects these projects?

| Project | Failure mode | Research question |
|---|---|---|
| **Guardian of Truth** | A fluent answer may still be factually wrong | Can internal representations expose hallucinations? |
| **ProcureTrace** | An agent may confidently confirm an unsupported product | Can every decision remain attached to page evidence? |
| **SplitShift** | A strong validation score may not generalize | Which shortcuts and distribution shifts inflate performance? |

Together, they form one research direction: **measuring and improving the reliability of AI systems beyond demo quality and headline metrics.**

---

## 🛠️ Other engineering work

- **LocalScript AI Agent** — offline Qwen-based agent for generating and validating Lua scripts in an isolated environment.
- **Orange Pi 6 Plus NPU** — neural-network inference on ARM64 Linux using a hardware NPU.
- **Demand Forecasting Service** — PyTorch LSTM, FastAPI backend, React dashboard, and Docker deployment.
- **Dion Background Lab** — browser-based real-time person segmentation and background replacement.
- **RAG and agent systems** — FastAPI, LangGraph, ChromaDB, local and hosted LLMs, tool use, and memory.

---

## 🏆 Achievements

- **2nd place** — Purple Hack 2026, Avito track
- **3rd place** — T1 Hackathon
- **3rd place** — Cloud.ru Hackathon
- Prize-winning work in factual hallucination detection and AI-agent systems

---

## ⚙️ Research and engineering stack

**Research:** LLM evaluation, representation analysis, hallucination detection, agent reliability, distribution shift, ablations, error analysis

**ML:** Python, PyTorch, scikit-learn, CatBoost, pandas, PCA, TF-IDF, feature engineering

**LLM systems:** LangGraph, LangChain, RAG, embeddings, reranking, MCP, local LLM inference

**Engineering:** FastAPI, Django, Docker, Docker Compose, pytest, Git, Linux, React

---

## 🎯 Currently interested in

- research internships and laboratories;
- reliable LLM and agent systems;
- applied AI research with real-world failure modes;
- collaborations where experimental rigor and engineering both matter.

---

## 📬 Contact

- Telegram: [@stavrmoris](https://t.me/stavrmoris)
- Email: [s.mariskin@g.nsu.ru](mailto:s.mariskin@g.nsu.ru)
- GitHub: [github.com/stavrmoris](https://github.com/stavrmoris)
