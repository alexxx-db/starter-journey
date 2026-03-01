---
sidebar_position: 0
---

# Cloud Object Storage

:::info
Access data in cloud object storage (S3, ADLS, GCS).
:::

![UC Storage Credentials and External Locations](/img/uc-cloud-object-idea.png)

To access your data stored on your cloud object storage data you need two Unity Catalog objects:

- **Storage Credential**: 
    - Authenticates your Databricks compute to your cloud object storage.
    - Depending on your cloud provider, it encapsulates a:
        - IAM Role (AWS and GCP).
        - Managed Identity (Azure).

- **External Location**: Defines the path to your data.
    - AWS: ``s3://mybucket/mydepartment/mydataset/``
    - Azure: ``abfss://mydepartmentcontainer@mystorageaccount.dfs.core.windows.net/mydataset/``
    - GCP: ``gs://mybucket/mydepartment/mydataset/``


More detailed information can be found in the official Databricks documentation:
- [**Connect to cloud object storage using Unity Catalog**
](https://docs.databricks.com/aws/en/connect/unity-catalog/cloud-storage/)

# Create storage locations and external locations

- **[AWS](/docs/access-your-data/cloud-object-storage/aws)** – Access data in Amazon S3.
- **[Azure](/docs/access-your-data/cloud-object-storage/azure)** – Access data in Azure Data Lake Storage (ADLS).
- **[GCP](/docs/access-your-data/cloud-object-storage/gcp)** – Access data in Google Cloud Storage (GCS).
