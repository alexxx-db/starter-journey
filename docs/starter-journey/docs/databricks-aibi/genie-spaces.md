---
sidebar_label: Genie Spaces
description: Create Genie Spaces so business users can ask data questions in natural language without writing SQL.
---

# Genie Spaces

> **You'll learn** how to create and configure a Genie Space for natural-language analytics in ~10 min.
>
> **Prereqs:** [Databricks AI/BI](/docs/databricks-aibi)

## Why this matters

Not every data consumer knows SQL. Genie Spaces let business users type questions in plain English — "What were total sales last quarter?" — and get answers backed by governed lakehouse tables. The AI translates the question into SQL, executes it, and returns a formatted result. This removes the bottleneck of analysts fielding ad-hoc requests.

## How it works

A Genie Space is a conversational interface connected to a set of Unity Catalog tables. You define which tables are available, add optional instructions (business glossary, metric definitions), and share the space with users. Genie generates SQL behind the scenes, runs it on a serverless warehouse, and returns results as tables or charts.

### Create a Genie Space

This video walks through creating a Genie Space from scratch:

<iframe width="560" height="315" src="https://www.youtube.com/embed/okcSana8bsg"></iframe>

### Configure and tune a Genie Space

Genie works best when given context — metric definitions, column descriptions, and sample questions. This video covers configuration best practices:

<iframe width="560" height="315" src="https://www.youtube.com/embed/YysLV-hycDM"></iframe>

## When to use / when not to

**Use Genie Spaces when:**

- Business users need ad-hoc answers without waiting for an analyst to build a query.
- Questions vary frequently — a static dashboard would require constant updates.
- You want to expose data self-service while keeping Unity Catalog governance in place.

**Use dashboards instead when:**

- The audience needs a fixed, repeatable view of the same metrics.
- Visual layout (chart types, positioning) matters more than flexibility.

## Common pitfalls

- **Skipping table and column descriptions** — Genie translates natural language to SQL. Without clear column descriptions and a business glossary, it misinterprets terms. Invest time in metadata.
- **Exposing too many tables** — a Genie Space scoped to 50 tables generates less accurate SQL than one scoped to 5. Keep each space focused on a single domain (e.g., sales, product usage).
- **Not adding sample questions** — sample questions teach Genie the expected query patterns. Add 5–10 representative questions when setting up the space.

## Next

- **Do next:** [Databricks Apps](/docs/databricks-aibi/databricks-apps)
- **Learn why:** [Databricks AI/BI overview](/docs/databricks-aibi)
- **Reference:** [Genie Spaces — Databricks docs](https://docs.databricks.com/aws/en/genie/index.html)
