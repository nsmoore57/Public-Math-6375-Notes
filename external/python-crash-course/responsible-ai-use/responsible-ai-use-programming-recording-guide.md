---
title: Recording Guide — Responsible AI Use in Programming Courses
---

- **Course package:** Python Crash Course
- **Format:** camera + short screen demonstration
- **Target:** 10–12 minutes
- **Status:** draft for Dr. Moore's review
- **Source of truth:** this Markdown file

## Purpose

Course-neutral orientation for responsible AI use in programming. AI can support learning; it cannot replace understanding, testing, or responsibility.

### Learning objectives

Students should be able to:

- follow the AI-use label on an activity or problem;
- distinguish the three course permissions;
- ask for diagnostic help without outsourcing the work;
- test AI-assisted code; and
- disclose permitted AI use honestly.

## Before recording

### Setup

- **Camera:** opening, labels, closing.
- **Screen:** prepared text only—prompt example and disclosure checklist.
- **Show:** exact label text; labels control, not color alone.
- **Do not show:** Canvas, course numbers, dates, student work, grades, or a graded solution.

### Screen text to prepare

1. **AI Not Permitted** — Complete the marked work without AI assistance.
2. **AI Debugging Only** — Ask about errors or diagnostic questions; do not generate the full solution.
3. **AI Permitted with Disclosure** — AI may assist; disclose the use and understand what you submit.
4. One diagnostic request, one inappropriate contrast, and the disclosure checklist.
5. Closing: **Read the label. Learn; do not outsource. Test. Disclose. Explain.**

## Recording map

### 0:00–1:00 — Useful tool, not easy button

**Camera**

- AI can help explain, brainstorm, diagnose, and sometimes accelerate programming work.
- It is not an easy button.
- The goal: use it deliberately without replacing learning.

**Anchor line:** “AI can help you work, but it cannot do the learning for you.”

### 1:00–2:30 — Why some work is independent

**Camera**

- Programming and mathematics require students to make decisions, trace errors, and test ideas.
- Familiar algorithms may be easy for AI to generate; that is why some work must be done without AI.
- This course teaches how and why code works—not just how to obtain code.

### 2:30–4:30 — Read the label first

**Camera + all three labels on screen**

- The label on the activity or problem controls. Icons and colors are only cues.

1. **AI Not Permitted**
   - Do the marked work without AI.
   - Used for independent reasoning and foundational practice.

2. **AI Debugging Only**
   - Ask about errors, diagnosis, or guiding questions.
   - Do not ask for the full solution or replacement code.

3. **AI Permitted with Disclosure**
   - AI may act as tutor, assistant, brainstorming partner, or reviewer.
   - Disclose the use and understand the submitted work.

**Anchor line:** “Permission belongs to the activity or problem—not to a tool and not to the course as a whole.”

### 4:30–6:15 — Responsible-use habits

**Camera**

1. **Understand the task.** Know the goal, inputs, outputs, assumptions, and constraints.
2. **Ask narrowly.** Include the exact error, smallest relevant code, expected behavior, and what you tried.
3. **Treat the response as a hypothesis.** It can omit assumptions or be wrong.
4. **Review and test.** Check requirements, documentation, mathematics, and small known cases.
5. **Explain it yourself.** If you cannot explain it, do not submit it.

**Anchor line:** “A good prompt is evidence that you have already begun the debugging work.”

### 6:15–7:45 — Screen: diagnostic help

**Screen. Use an ungraded toy example; do not call an AI tool live.**

Show:

```text
I expected this code to compare neighboring values, but I received:

IndexError: index 6 is out of bounds for axis 0 with size 6

for k in range(len(values)):
    if values[k] * values[k + 1] < 0:
        print(k)

I expected to compare each neighboring pair and checked that there
are six values. Explain the error and suggest things to inspect.
Do not rewrite the full solution.
```

- Point out: exact error, smallest code example, expectation, and prior check.
- Ask for explanation and diagnostic ideas—not an answer.
- The student still makes and tests the change.

Then show:

```text
Fix my homework and give me the final code.
```

- Under **AI Debugging Only**, this asks AI to replace the assigned work.

### 7:45–9:30 — Verify: running is not correct

**Camera**

- Code can run and still solve the wrong problem.
- Plausible wrong answers can be more dangerous than crashes.
- AI can sound certain when it lacks enough information, when the case is more complicated, or when it is wrong. **Confidence is not evidence.**
- Check:
  - small known-answer cases;
  - signs, ranges, units, shapes, and boundaries;
  - documentation;
  - the mathematics or specification; and
  - appropriate diagnostics, such as residuals.

**Anchor line:** “No error message is not the same thing as a correct answer.”

### 9:30–10:30 — Disclosure

**Screen**

When required, record:

- tool used;
- purpose;
- affected problem(s);
- relevant prompt(s) or conversation excerpt(s); and
- what you changed, verified, or rejected.

- Disclosure is an honest record, not a penalty.
- AI output can vary; context makes the work reviewable.
- Disclosure does not excuse incorrect or poorly understood work.

### 10:30–11:30 — Ownership and closing

**Camera**

- Students own submitted code and writing, including AI-assisted work.
- Be ready to explain what it does, why it addresses the problem, its assumptions, and how it was tested.
- Use permitted help early: documentation, course support, office hours, peers as allowed, and AI debugging when the label permits it.

> “Read the label first. Use AI to learn and diagnose—not to avoid the work. Test what it gives you. Disclose it honestly. And submit only work you can explain and defend.”

## Flexibility and after recording

- If short on time, keep: labels, diagnostic example, verification, disclosure.
- Use these as private anchors, not a script to recite.
- Do not claim a practice is universal industry policy; state the course expectation.
- Do not add oral code checks unless they become explicit policy.
- After recording: update the Kanban, request captions, and wait for a stable Panopto ID before linking it anywhere.
