---
sidebar_label: Build the first pipeline
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# 6. Build the first pipeline

:::info
* Create the first spark declarative pipeline on Databricks. 
:::

## Journey checklist
- [x] ~~Identify target cloud tenant(s).~~
- [x] ~~Infra setup.~~
- [x] ~~Data Governance Strategy.~~
- [x] ~~Access your data.~~
- [ ] **Build the first pipeline.**
- [ ] Automation and orchestration.
- [ ] Query and explore.
- [ ] Databricks AI/BI
---

## Data Engineering on Databricks

### Lakeflow introduction
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/n8XWOr6zIPo"
></iframe>

### Lakeflow in action

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/alP9qqk5J64"
></iframe>

### Lessons learned from the previous videos

:::tip For data ingestion 
* Use Lakeflow Connect.
    * [5. Access your data - Managed connectors - Create ingestion pipeline](/docs/access-your-data/managed-connectors/create-ingestion-pipeline/)
:::

:::tip For data transformation 
* Use Spark Declarative Pipelines.
    * [6. Build the first pipeline](/docs/build-first-pipeline/#spark-declarative-pipelines)
:::

:::tip For orchestration 
* Use Lakeflow Jobs.
    * [7. Automation & Orchestration](/docs/orchestration)
:::

## Spark Declarative Pipelines
* [Apache Spark 4.1.1 Spark Declarative Pipelines (SDP) documentation](https://spark.apache.org/docs/latest/declarative-pipelines-programming-guide.html).
* Python Pyspark and SQL support.
* **Process multiple sources simultaneously** whether streaming from Kafka, batch loading from cloud storage, or querying external databases.
* **Built-in incremental processing** intelligently tracks changes and processes only new or modified data, dramatically reducing compute costs and pipeline runtimes.
* **Data quality is enforced through declarative expectations** that you define inline with your transformations.
* Integrated with **Unity Catalog** (everything on Databricks is Unity Catalog).

## SDP Features

### Technical references before coding 🛡️

* [Load data in pipelines](https://docs.databricks.com/aws/en/ldp/load).
    * [AutoLoader](https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/) for incremental ingestions for data sitting in Cloud Object Storage.
* [Transform data with pipelines
](https://docs.databricks.com/aws/en/ldp/transform).
    * When to use views, materialized views, and streaming tables!
* [Manage data quality with pipeline expectations
](https://docs.databricks.com/aws/en/ldp/expectations).
    * Data quality constraint and business rules defined as expectations.
* **Python**
    * [Python language reference
](https://docs.databricks.com/aws/en/ldp/developer/python-ref).
    * [Develop SDP with Python
](https://docs.databricks.com/aws/en/ldp/developer/python-dev).
* **SQL**
    * [SQL language reference](https://docs.databricks.com/aws/en/ldp/developer/sql-ref).
    * [Develop SDP with SQL](https://docs.databricks.com/aws/en/ldp/developer/sql-dev).

## Create the first pipeline 🛠️

- **[UI + Databricks Agent](/docs/build-first-pipeline/ui-databricks-agent)** – Build a pipeline using the Databricks UI and Databricks Agent.
- **[DABs](/docs/build-first-pipeline/dabs)** – Build a pipeline using Databricks Asset Bundles.
- **[MCP skills](/docs/build-first-pipeline/mcp-skills)** – Build a pipeline using MCP skills.
