<h1 align="center">Привет, я Ставр Марискин 👋</h1>

<p align="center">
  <strong>AI/ML-исследователь и инженер, работающий над надёжностью LLM и агентских систем.</strong>
</p>

<p align="center">
  Я создаю реальные AI-системы, исследую, где ломается их кажущаяся надёжность,
  и разрабатываю evaluation-пайплайны, которые делают ошибки измеримыми.
</p>

<p align="center">
  <a href="README.md">English</a>
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

## 🧭 Обо мне

Я студент второго курса направления **«Прикладной искусственный интеллект»** в НГУ и AI/ML-инженер, совмещающий исследовательские и продуктовые задачи.

Моя основная тема — **надёжность AI-систем**:

- детекция фактологических галлюцинаций;
- оценка LLM-агентов;
- привязка решений к доказательствам и безопасный отказ;
- shortcut learning и distribution shift;
- воспроизводимые прикладные ML-исследования.

Все три главных проекта объединяет один вопрос:

> **Почему AI-системы часто выглядят надёжнее, чем являются на самом деле, и как оценивать их честно?**

---

## 🔬 Главные исследовательские проекты

<table>
<tr>
<td width="33%" valign="top">

### 🛡️ [Guardian of Truth](https://github.com/stavrmoris/Guardian-of-Truth)

**Детекция фактологических галлюцинаций по внутренним представлениям LLM.**

White-box подход на основе hidden-state probing, contrast directions, uncertainty-признаков, PCA и лёгкого линейного классификатора.

**Главное**

- 174 внутренних и uncertainty-признака
- historical public dev PR-AUC: **0.8541**
- внешний LLM-судья не требуется
- воспроизводимый публичный research package

</td>
<td width="33%" valign="top">

### 🔎 [ProcureTrace](https://github.com/stavrmoris/procuretrace)

**Evidence-grounded проверка веб-закупочных агентов.**

Проект проверяет точную модель товара, обязательные характеристики, происхождение доказательств и необходимость отказа от уверенного решения.

**Главное**

- exact-confirmation F1: **72.7% → 80.0%**
- selective accuracy: **82.9% → 88.4%**
- range-crossing errors: **3.1% → 0%**
- frozen evaluation на 60 страницах

</td>
<td width="33%" valign="top">

### 📉 [SplitShift](https://github.com/stavrmoris/splitshift)

**Исследование shortcut learning и провала оценки при distribution shift.**

Постмортем классификатора объявлений, первоначальные метрики которого не сохранились при более честной валидации.

**Главное**

- clean random CV F1: **0.559**
- GroupKFold F1: **0.552**
- cue ablation F1: **0.505**
- анализ сходства данных и leakage

</td>
</tr>
</table>

---

## 🧩 Что объединяет проекты?

| Проект | Failure mode | Исследовательский вопрос |
|---|---|---|
| **Guardian of Truth** | Уверенный ответ может быть фактологически неверным | Можно ли увидеть галлюцинацию во внутренних представлениях? |
| **ProcureTrace** | Агент может уверенно подтвердить неподходящий товар | Можно ли привязать каждое решение к наблюдаемым доказательствам? |
| **SplitShift** | Высокая validation-метрика может не обобщаться | Какие shortcuts и сдвиги распределения завышают качество? |

Вместе они образуют одну исследовательскую линию: **как измерять и повышать надёжность AI за пределами красивого демо и одной headline-метрики.**

---

## 🛠️ Другие инженерные проекты

- **LocalScript AI Agent** — offline-агент на Qwen для генерации и проверки Lua-скриптов в изолированном контуре.
- **Orange Pi 6 Plus NPU** — запуск нейросетевого inference на ARM64 Linux с аппаратным NPU.
- **Demand Forecasting Service** — PyTorch LSTM, FastAPI backend, React dashboard и Docker.
- **Dion Background Lab** — сегментация человека и замена фона в реальном времени в браузере.
- **RAG и агентские системы** — FastAPI, LangGraph, ChromaDB, локальные и облачные LLM, tools и memory.

---

## 🏆 Достижения

- **2 место** — Purple Hack 2026, трек Avito
- **3 место** — хакатон T1
- **3 место** — хакатон Cloud.ru
- Призовые решения в задачах детекции галлюцинаций и AI-агентов

---

## ⚙️ Исследовательский и инженерный стек

**Research:** LLM evaluation, representation analysis, hallucination detection, agent reliability, distribution shift, ablations, error analysis

**ML:** Python, PyTorch, scikit-learn, CatBoost, pandas, PCA, TF-IDF, feature engineering

**LLM systems:** LangGraph, LangChain, RAG, embeddings, reranking, MCP, local LLM inference

**Engineering:** FastAPI, Django, Docker, Docker Compose, pytest, Git, Linux, React

---

## 🎯 Что мне сейчас интересно

- исследовательские стажировки и лаборатории;
- надёжные LLM и агентские системы;
- прикладные AI-исследования на реальных failure modes;
- проекты, где одинаково важны экспериментальная строгость и инженерная реализация.

---

## 📬 Контакты

- Telegram: [@stavrmoris](https://t.me/stavrmoris)
- Email: [s.mariskin@g.nsu.ru](mailto:s.mariskin@g.nsu.ru)
- GitHub: [github.com/stavrmoris](https://github.com/stavrmoris)
