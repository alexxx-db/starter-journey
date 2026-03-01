---
---

# Create ingestion pipeline

:::success
* Before creating the ingestion pipeline, get familiar with [Managed connectors in Lakeflow Connect.
](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect).
* Ingestions pipelines required a connection (covered in the last section).
:::

:::warning 

Mar 1st - The UI ingestion pipeline creation is full serverless. If classic compute is required for network reasons, the pipeline must be deployed through [Databricks Asset Bundles (DABs subsection)](/docs/access-your-data/managed-connectors/create-ingestion-pipeline/dabs-definition).
  * [Database connector components](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect#database-connector-components).
    * Ingestion gateway (pipeline): Requires classic compute in your organization VPC dedicated for Databricks. Moves the data to staging storage.
    * Ingestion pipeline (pipeline): Can be serverless because it can access the UC default storage out-of-the-box. 
:::


## Youtube tutorials

### Lakeflow Connect showcase
<br />
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/7uHLVQSHVAw"
></iframe>

---

### SQL Server | Change Data Capture (CDC)
<br />
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/g1srOFsD59I"
></iframe>

---

### Salesforce

<br />
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/neH6vJv8AbE"
></iframe>

---

### Sharepoint

<br />
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/YbB8CGMfJl4"
></iframe>

---

### Sharepoint

<br />
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/436IaP-R8SM"
></iframe>

In this section:

- **[DABs definition](/docs/access-your-data/managed-connectors/create-ingestion-pipeline/dabs-definition)** – Define and deploy ingestion pipelines using Databricks Asset Bundles
