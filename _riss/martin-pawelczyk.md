---
layout: riss
title: "Towards Principled Data Mixing for Language Model Pretraining"
permalink: /riss/martin-pawelczyk/
speaker_name: "Martin Pawelczyk"
speaker_title: "Assistant Professor for Responsible AI at the University of Vienna"
date_in_string: "2026-11-11"
time_in_string: "14:30 (CET)"
zoom_url: https://cispa-de.zoom-x.de/j/61708401597
keywords: Data Mixing, Language Model Pretraining, Optimal Experimental Design
image: "assets/img/riss-speakers/martin-pawelczyk.jpg"
sort_key: "2026-11-11"
---
### Abstract
Language model performance depends strongly on the mixture of domains in the pretraining data corpus. Popular data mixing methods select these domain weights by training many small proxy models on random mixes and then fitting a regression model to predict performance from the mix. We recognize this practice as a domain attribution problem, where the regression measures each domain’s contribution to the target metric. Through this lens, the standard Dirichlet sampling of proxy data mixes is a poor regression design that requires tuning and cannot support a linear fit for hundreds of domains. Building on classical optimal experimental design, we introduce LINMIX, which samples mixes at the vertices of the capped simplex so that each domain is at its cap or absent. This hyperparameter-free vertex sampling decorrelates domain effects, enabling an interpretable linear model whose coefficients are the domain attributions. The optimal mix given by LINMIX provably keeps only domains with positive attribution values and requires no search over candidate mixes. We further establish the optimality of vertex sampling, and prove that Dirichlet sampling inflates the attribution error when its mixes concentrate around the prior data mix. Pretraining experiments with 1B-parameter OLMo2 and 4B Qwen3.5 language models show that LINMIX outperforms Dirichlet-based data mixing across reasoning, code, and math benchmarks, with relative gains of 46% on MBPP and 14% on GSM8K. At 288 fine-grained domains, only vertex sampling supports a linear fit, and LINMIX improves benchmark accuracy by 11% on average over the best nonlinear baseline.
### About the Speaker
Martin Pawelczyk is an Assistant Professor for Responsible AI at the University of Vienna. Previously, he was a postdoctoral scholar at Harvard University. He received his PhD from the University of Tübingen, during which he was also a research associate at Harvard University and the Max Planck Institute for Security and Privacy, and an intern at JP Morgan AI Research, where he worked with the Explainable AI team on explaining automated trading models. His research lies in AI safety and data-centric AI, developing machine learning techniques and evaluation frameworks that improve the safety, interpretability, privacy, and reasoning capabilities of predictive and generative models.
