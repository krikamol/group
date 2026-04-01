---
layout: riss
title: "Reliable Methods for Agent Evaluation"
permalink: /riss/shuvom-sadhuka/
speaker_name: "Shuvom Sadhuka"
speaker_title: "PhD Student at MIT"
date_in_string: "2026-04-08"
time_in_string: "14:30 (CET)"
location: '<a href="https://cispa-de.zoom-x.de/j/61708401597">Zoom</a>'
keywords: AI Agents, Sequential Hypothesis Testing
image: "/assets/img/riss-speakers/shuvom-sadhuka.webp"
sort_key: "2026-04-08"
---
### Abstract 
As AI systems become more widely adopted, the need for reliable evaluation techniques is accelerating. In this talk, I will present recent work on building evaluation methods with statistical guarantees. I will introduce e-valuator, a method for monitoring agent trajectories. Agents execute sequences of actions (e.g., reasoning steps or tools calls) and receive feedback from verifiers, such as judge LLMs or process-reward models, which score these actions. These heuristic verifier scores, while informative, do not provide guarantees on correctness when used to decide whether an agent’s actions will yield a successful output. We thus frame the problem of distinguishing successful trajectories (that is, a sequence of actions that will lead to a correct response to the user’s prompt) and unsuccessful trajectories as a sequential hypothesis testing problem. E-valuator builds on tools from e-processes to develop a sequential hypothesis test that remains statistically valid at every step of an agent's trajectory, enabling online monitoring of agents over arbitrarily long sequences of actions. I will also briefly discuss recent work on evaluating models with unlabeled and labeled data.

### About the Speaker
Shuvom Sadhuka is a fourth-year PhD student in Computer Science at MIT, where he is advised by Bonnie Berger. He is broadly interested in evaluation and uncertainty quantification methods, with applications in biomedical settings. His work has been supported by an NSF Graduate Research Fellowship and a Hertz Fellowship.