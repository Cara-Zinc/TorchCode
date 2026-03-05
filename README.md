---
title: TorchCode
emoji: 🔥
colorFrom: red
colorTo: yellow
sdk: docker
app_port: 7860
pinned: false
---

<div align="center">

# 🔥 TorchCode

**Crack the PyTorch interview.**

Practice implementing operators and architectures from scratch — the exact skills top ML teams test for.

*Like LeetCode, but for tensors. Self-hosted. Jupyter-based. Instant feedback.*

[![PyTorch](https://img.shields.io/badge/PyTorch-ee4c2c?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org)
[![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)](https://jupyter.org)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com)
[![Python](https://img.shields.io/badge/Python_3.11-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[![GitHub Container Registry](https://img.shields.io/badge/ghcr.io-TorchCode-blue?style=flat-square&logo=github)](https://ghcr.io/duoan/torchcode)
[![Hugging Face Spaces](https://img.shields.io/badge/%F0%9F%A4%97%20Spaces-TorchCode-blue?style=flat-square)](https://huggingface.co/spaces/duoan/TorchCode)
![Problems](https://img.shields.io/badge/problems-37-orange?style=flat-square)
![GPU](https://img.shields.io/badge/GPU-not%20required-brightgreen?style=flat-square)

</div>

---

## 🎯 Why TorchCode?

Top companies (Meta, Google DeepMind, OpenAI, etc.) expect ML engineers to implement core operations **from memory on a whiteboard**. Reading papers isn't enough — you need to write `softmax`, `LayerNorm`, `MultiHeadAttention`, and full Transformer blocks cold.

TorchCode gives you a **structured practice environment** with:

| | Feature | |
|---|---|---|
| 🧩 | **37 curated problems** | The most frequently asked PyTorch interview topics |
| ⚖️ | **Automated judge** | Correctness checks, gradient verification, and timing |
| 🎨 | **Instant feedback** | Colored pass/fail per test case, just like competitive programming |
| 💡 | **Hints when stuck** | Nudges without full spoilers |
| 📖 | **Reference solutions** | Study optimal implementations after your attempt |
| 📊 | **Progress tracking** | What you've solved, best times, and attempt counts |
| 🔄 | **One-click reset** | Toolbar button to reset any notebook back to its blank template — practice the same problem as many times as you want |
| [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](#) | **Open in Colab** | Every notebook has an "Open in Colab" badge + toolbar button — run problems in Google Colab with zero setup |

No cloud. No signup. No GPU needed. Just `make run` — or try it instantly on Hugging Face.

---

## 🚀 Quick Start

### Option 0 — Try it online (zero install)

**[Launch on Hugging Face Spaces](https://huggingface.co/spaces/duoan/TorchCode)** — opens a full JupyterLab environment in your browser. Nothing to install.

Or open any problem directly in Google Colab — every notebook has an [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/duoan/TorchCode/blob/main/templates/01_relu.ipynb) badge.

### Option 1 — Pull the pre-built image (fastest)

```bash
docker run -p 8888:8888 -e PORT=8888 ghcr.io/duoan/torchcode:latest
```

### Option 2 — Build locally

```bash
make run
```

Open **<http://localhost:8888>** — that's it. Works with both Docker and Podman (auto-detected).

---

## 📋 Problem Set

> **Frequency**: 🔥 = very likely in interviews, ⭐ = commonly asked, 💡 = emerging / differentiator

### 🧱 Fundamentals — "Implement X from scratch"

The bread and butter of ML coding interviews. You'll be asked to write these without `torch.nn`.

| # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
|:---:|---------|----------------------|:----------:|:----:|--------------|
| 1 | ReLU | `relu(x)` | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | 🔥 | Activation functions, element-wise ops |
| 2 | Softmax | `my_softmax(x, dim)` | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | 🔥 | Numerical stability, exp/log tricks |
| 16 | Cross-Entropy Loss | `cross_entropy_loss(logits, targets)` | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | 🔥 | Log-softmax, logsumexp trick |
| 17 | Dropout | `MyDropout` (nn.Module) | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | 🔥 | Train/eval mode, inverted scaling |
| 18 | Embedding | `MyEmbedding` (nn.Module) | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | 🔥 | Lookup table, `weight[indices]` |
| 19 | GELU | `my_gelu(x)` | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | ⭐ | Gaussian error linear unit, `torch.erf` |
| 20 | Kaiming Init | `kaiming_init(weight)` | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | ⭐ | `std = sqrt(2/fan_in)`, variance scaling |
| 21 | Gradient Clipping | `clip_grad_norm(params, max_norm)` | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | ⭐ | Norm-based clipping, direction preservation |
| 31 | Gradient Accumulation | `accumulated_step(model, opt, ...)` | ![Easy](https://img.shields.io/badge/Easy-4CAF50?style=flat-square) | 💡 | Micro-batching, loss scaling |
| 3 | Linear Layer | `SimpleLinear` (nn.Module) | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | 🔥 | `y = xW^T + b`, Kaiming init, `nn.Parameter` |
| 4 | LayerNorm | `my_layer_norm(x, γ, β)` | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | 🔥 | Normalization, running stats, affine transform |
| 7 | BatchNorm | `my_batch_norm(x, γ, β)` | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | ⭐ | Batch vs layer statistics, train/eval behavior |
| 8 | RMSNorm | `rms_norm(x, weight)` | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | ⭐ | LLaMA-style norm, simpler than LayerNorm |
| 15 | SwiGLU MLP | `SwiGLUMLP` (nn.Module) | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | ⭐ | Gated FFN, `SiLU(gate) * up`, LLaMA/Mistral-style |
| 22 | Conv2d | `my_conv2d(x, weight, ...)` | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | 🔥 | Convolution, unfold, stride/padding |

### 🧠 Attention Mechanisms — The heart of modern ML interviews

If you're interviewing for any role touching LLMs or Transformers, expect at least one of these.

| # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
|:---:|---------|----------------------|:----------:|:----:|--------------|
| 23 | Cross-Attention | `MultiHeadCrossAttention` (nn.Module) | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | ⭐ | Encoder-decoder, Q from decoder, K/V from encoder |
| 5 | Scaled Dot-Product Attention | `scaled_dot_product_attention(Q, K, V)` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 🔥 | `softmax(QK^T/√d_k)V`, the foundation of everything |
| 6 | Multi-Head Attention | `MultiHeadAttention` (nn.Module) | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 🔥 | Parallel heads, split/concat, projection matrices |
| 9 | Causal Self-Attention | `causal_attention(Q, K, V)` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 🔥 | Autoregressive masking with `-inf`, GPT-style |
| 10 | Grouped Query Attention | `GroupQueryAttention` (nn.Module) | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | ⭐ | GQA (LLaMA 2), KV sharing across heads |
| 11 | Sliding Window Attention | `sliding_window_attention(Q, K, V, w)` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | ⭐ | Mistral-style local attention, O(n·w) complexity |
| 12 | Linear Attention | `linear_attention(Q, K, V)` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 💡 | Kernel trick, `φ(Q)(φ(K)^TV)`, O(n·d²) |
| 14 | KV Cache Attention | `KVCacheAttention` (nn.Module) | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 🔥 | Incremental decoding, cache K/V, prefill vs decode |
| 24 | RoPE | `apply_rope(q, k)` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 🔥 | Rotary position embedding, relative position via rotation |
| 25 | Flash Attention | `flash_attention(Q, K, V, block_size)` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 💡 | Tiled attention, online softmax, memory-efficient |

### 🏗️ Architecture & Adaptation — Put it all together

| # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
|:---:|---------|----------------------|:----------:|:----:|--------------|
| 26 | LoRA | `LoRALinear` (nn.Module) | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | ⭐ | Low-rank adaptation, frozen base + `BA` update |
| 27 | ViT Patch Embedding | `PatchEmbedding` (nn.Module) | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | 💡 | Image → patches → linear projection |
| 13 | GPT-2 Block | `GPT2Block` (nn.Module) | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | ⭐ | Pre-norm, causal MHA + MLP (4x, GELU), residual connections |
| 28 | Mixture of Experts | `MixtureOfExperts` (nn.Module) | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | ⭐ | Mixtral-style, top-k routing, expert MLPs |

### ⚙️ Training & Optimization

| # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
|:---:|---------|----------------------|:----------:|:----:|--------------|
| 29 | Adam Optimizer | `MyAdam` | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | ⭐ | Momentum + RMSProp, bias correction |
| 30 | Cosine LR Scheduler | `cosine_lr_schedule(step, ...)` | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | ⭐ | Linear warmup + cosine annealing |

### 🎯 Inference & Decoding

| # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
|:---:|---------|----------------------|:----------:|:----:|--------------|
| 32 | Top-k / Top-p Sampling | `sample_top_k_top_p(logits, ...)` | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | 🔥 | Nucleus sampling, temperature scaling |
| 33 | Beam Search | `beam_search(log_prob_fn, ...)` | ![Medium](https://img.shields.io/badge/Medium-FF9800?style=flat-square) | 🔥 | Hypothesis expansion, pruning, eos handling |
| 34 | Speculative Decoding | `speculative_decode(target, draft, ...)` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 💡 | Accept/reject, draft model acceleration |

### 🔬 Advanced — Differentiators

| # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
|:---:|---------|----------------------|:----------:|:----:|--------------|
| 35 | BPE Tokenizer | `SimpleBPE` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 💡 | Byte-pair encoding, merge rules, subword splits |
| 36 | INT8 Quantization | `Int8Linear` (nn.Module) | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 💡 | Per-channel quantize, scale/zero-point, buffer vs param |
| 37 | DPO Loss | `dpo_loss(chosen, rejected, ...)` | ![Hard](https://img.shields.io/badge/Hard-F44336?style=flat-square) | 💡 | Direct preference optimization, alignment training |

---

## ⚙️ How It Works

Each problem has **two** notebooks:

| File | Purpose |
|------|---------|
| `01_relu.ipynb` | ✏️ Blank template — write your code here |
| `01_relu_solution.ipynb` | 📖 Reference solution — check when stuck |

### Workflow

```text
1. Open a blank notebook           →  Read the problem description
2. Implement your solution         →  Use only basic PyTorch ops
3. Debug freely                    →  print(x.shape), check gradients, etc.
4. Run the judge cell              →  check("relu")
5. See instant colored feedback    →  ✅ pass / ❌ fail per test case
6. Stuck? Get a nudge              →  hint("relu")
7. Review the reference solution   →  01_relu_solution.ipynb
8. Click 🔄 Reset in the toolbar  →  Blank slate — practice again!
```

### In-Notebook API

```python
from torch_judge import check, hint, status

check("relu")               # Judge your implementation
hint("causal_attention")    # Get a hint without full spoiler
status()                    # Progress dashboard — solved / attempted / todo
```

---

## 📅 Suggested Study Plan

> **Total: ~12–16 hours spread across 3–4 weeks. Perfect for interview prep on a deadline.**

| Week | Focus | Problems | Time |
|:----:|-------|----------|:----:|
| **1** | 🧱 Foundations | ReLU → Softmax → CE Loss → Dropout → Embedding → GELU → Linear → LayerNorm → BatchNorm → RMSNorm → SwiGLU MLP → Conv2d | 2–3 hrs |
| **2** | 🧠 Attention Deep Dive | SDPA → MHA → Cross-Attn → Causal → GQA → KV Cache → Sliding Window → RoPE → Linear Attn → Flash Attn | 3–4 hrs |
| **3** | 🏗️ Architecture + Training | GPT-2 Block → LoRA → MoE → ViT Patch → Adam → Cosine LR → Grad Clip → Grad Accumulation → Kaiming Init | 3–4 hrs |
| **4** | 🎯 Inference + Advanced | Top-k/p Sampling → Beam Search → Speculative Decoding → BPE → INT8 Quant → DPO Loss + speed run | 3–4 hrs |

---

## 🏛️ Architecture

```text
┌──────────────────────────────────────────┐
│           Docker / Podman Container      │
│                                          │
│  JupyterLab (:8888)                      │
│    ├── templates/  (reset on each run)   │
│    ├── solutions/  (reference impl)      │
│    ├── torch_judge/ (auto-grading)       │
│    ├── torchcode-labext (JLab plugin)    │
│    │     🔄 Reset — restore template     │
│    │     🔗 Colab — open in Colab        │
│    └── PyTorch (CPU), NumPy              │
│                                          │
│  Judge checks:                           │
│    ✓ Output correctness (allclose)       │
│    ✓ Gradient flow (autograd)            │
│    ✓ Shape consistency                   │
│    ✓ Edge cases & numerical stability    │
└──────────────────────────────────────────┘
```

Single container. Single port. No database. No frontend framework. No GPU.

## 🛠️ Commands

```bash
make run    # Build & start (http://localhost:8888)
make stop   # Stop the container
make clean  # Stop + remove volumes + reset all progress
```

## 🧩 Adding Your Own Problems

TorchCode uses auto-discovery — just drop a new file in `torch_judge/tasks/`:

```python
TASK = {
    "id": "my_task",
    "title": "My Custom Problem",
    "difficulty": "medium",
    "function_name": "my_function",
    "hint": "Think about broadcasting...",
    "tests": [ ... ],
}
```

No registration needed. The judge picks it up automatically.

---

## ❓ FAQ

<details>
<summary><b>Do I need a GPU?</b></summary>
<br>
No. Everything runs on CPU. The problems test correctness and understanding, not throughput.
</details>

<details>
<summary><b>Can I keep my solutions between runs?</b></summary>
<br>
Blank templates reset on every <code>make run</code> so you practice from scratch. Save your work under a different filename if you want to keep it. You can also click the <b>🔄 Reset</b> button in the notebook toolbar at any time to restore the blank template without restarting.
</details>

<details>
<summary><b>Can I use Google Colab instead?</b></summary>
<br>
Yes! Every notebook has an <b>Open in Colab</b> badge at the top. Click it to open the problem directly in Google Colab — no Docker or local setup needed. You can also use the <b>Colab</b> toolbar button inside JupyterLab.
</details>

<details>
<summary><b>How are solutions graded?</b></summary>
<br>
The judge runs your function against multiple test cases using <code>torch.allclose</code> for numerical correctness, verifies gradients flow properly via autograd, and checks edge cases specific to each operation.
</details>

<details>
<summary><b>Who is this for?</b></summary>
<br>
Anyone preparing for ML/AI engineering interviews at top tech companies, or anyone who wants to deeply understand how PyTorch operations work under the hood.
</details>

---

<div align="center">

**Built for engineers who want to deeply understand what they build.**

If this helped your interview prep, consider giving it a ⭐

</div>
