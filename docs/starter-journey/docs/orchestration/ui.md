---
sidebar_label: UI
description: Create and configure Lakeflow Jobs using the Databricks workspace UI.
---

# UI

> **You'll learn** how to create and schedule a Lakeflow Job using the Databricks UI in ~10 min.
>
> **Prereqs:** [Automation & Orchestration](/docs/orchestration)

## Why this matters

The UI is the fastest path to a running job. You can define tasks, set dependencies, configure a schedule, and monitor execution — all without writing configuration files. This is the recommended starting point before moving to DABs for production deployments.

## How it works

The Databricks workspace includes a Jobs page where you create workflows visually. You add tasks (notebooks, pipelines, SQL), define their execution order, set a schedule, and configure retry and notification settings.

### Video walkthrough

<iframe width="560" height="315" src="https://www.youtube.com/embed/zQ8YOrD_f8c"></iframe>

## When to use / when not to

**Use the UI when:**

- You are setting up your first job and want to see results quickly.
- You need to run an ad-hoc or one-off workflow.
- You want to prototype a task graph before defining it in code.

**Use DABs instead when:**

- The job needs to be version-controlled and deployed across environments.
- You want infrastructure (pipelines, schemas, compute) defined alongside the job.

## Next

- **Do next:** [Orchestration — DABs](/docs/orchestration/dabs)
- **Learn why:** [Automation & Orchestration overview](/docs/orchestration)
- **Reference:** [Create and manage jobs — Databricks docs](https://docs.databricks.com/aws/en/jobs/create-run-jobs.html)
