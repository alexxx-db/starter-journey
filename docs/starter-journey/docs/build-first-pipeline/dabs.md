---
---

# DABs

:::info
* Build a pipeline using Databricks Asset Bundles (DABs).
* DABs is introduced later in the Starter Journey but feel free to start from here.
:::

# 

## Medallion Architecture on Unity Catalog using DABs

:::note
* [Github repo here](https://github.com/ivancalvo-dbxs/medallion-pipeline-dabs).Ready to be deployed.
* The DABs project deploys:
    * 1x job.
        * 2 tasks:
            * Task #1 | Notebook task: Generate fake data.
            * Task #2 | Pipeline task: Run the pipeline after task #1 completes.
    * 1x pipeline.
    * 3x schemas (bronze, silver, gold).
    * 1x volume (landing zone).
    * 1x DBSQL warehouse.
* [DABs supported resources](https://docs.databricks.com/aws/en/dev-tools/bundles/resources)
:::

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/W8ucHwzwdhc"
></iframe>

