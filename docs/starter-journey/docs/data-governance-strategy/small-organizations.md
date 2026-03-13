---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Small organizations

:::info
Data governance strategy for small organizations.
:::

## Catalogs

:::note
* `sandbox` catalog can be also added for more demos and exploration.
:::

<img src={useBaseUrl('/img/ucblog-simple-catalogs.jpg')} alt="description"/>

### Development
Playground where your team builds and experiments. It’s the place to try out new ideas and write new code.
* **Who’s allowed in:** All data teams.
* **The Goal:** To give creators a safe space to break things, fix them, and learn without affecting the rest of the company.
* **Bound to**: Development workspace.

### Staging
This is the final checkpoint. Once a project is finished in the "Lab," it moves here to be tested against real-world scenarios to ensure everything is perfect.
* **Who’s allowed in:** Developers (to test) and DevOps / Quality Testers (to approve).
* **The Goal:** To catch any last-minute "bugs" or mistakes before the data is shown to the bosses.
* **Bound to**: Staging workspace.

### Production
This is the official, high quality and reliable data. This is the only version of the data that the leadership team uses for their daily reports and dashboards.
* **Who’s allowed in:** Production assets are restricted to view-only access for Business Users, with modifications managed exclusively via Automation and Service Principals.
* **The Goal:** To provide a 100% reliable and secure environment where the data is always accurate and "live."
* **Bound to**: Production workspace.

---


## Schemas

<img src={useBaseUrl('/img/ucblog-simple-schemas.jpg')} alt="description"/>

### The Medallion Journey: From Raw to Gold

Databricks recommended structure for organizing projects. For a detailed explanation, check out the following blog post that explores this topic in depth:
    * [Modeling a Medallion Architecture on Unity Catalog for your Organizational Structure
](https://blog.databricksforstartups.com/part-1-modeling-a-medallion-architecture-on-unity-catalog-for-your-organizational-structure-b8f0f9918c26).

### Bronze Layer 🥉

The Bronze layer contains raw data from the landing zone. When data is ingested into Databricks from external sources, it lands here first. This data is a "carbon copy" of the original—nothing has been edited, filtered, or fixed yet.

* **Naming Pattern:** [PROJECT_NAME]_bronze
* **Purpose:** To act as a historical record. If a mistake happens later in the process, we can always come back here to re-process the original data without needing to go back to the source.

:::note Unity Catalog terms
* Contains:
    * Streaming tables: Reads raw data from cloud object storage.
    * Tables created by a Lakeflow ingestion pipeline.
* More on sections 5. and 6.
:::
---

### Silver Layer 🥈 

In the Silver layer, the data is refined. We transform the raw Bronze data by fixing typos, removing duplicate rows, and ensuring dates and currencies are in the correct format. This is where we join different tables together to create a clearer picture.

* **Naming Pattern:** [PROJECT_NAME]_silver
* **Purpose:** To provide a "Single Source of Truth." This is the data that analysts use for ad-hoc queries because it is predictable and high-quality.

:::note Unity Catalog terms
* Contains:
    * Streaming tables: streaming transformations from bronze layer streaming tables.
    * Tables: transformations from bronze layer tables.
* More on sections 5. and 6.
:::

---

### Gold Layer 🥇 

The Gold layer is the final product. Data here is aggregated and structured to answer specific business questions, such as "What were the total sales by region?" or "What is our monthly active user count?"

* **Naming Pattern:** [PROJECT_NAME]_gold
* **Purpose:** To power official company dashboards and executive reports. It is optimized for speed and clarity rather than raw detail.

:::note Unity Catalog terms
* Contains:
    * Materialized views.
    * Metric views.
    * Tables.
* More on sections 5. and 6.
:::

---

## Permissions and Grants

<div style={{ textAlign: 'center', marginTop: 24, marginBottom: 8 }}>
  <img
    src={useBaseUrl('/img/ucblog-simple-grants.jpg')}
    alt="Diagram showing Databricks user groups and their permissions"
    style={{width: '100%' }}
  />
  <div style={{ fontSize: 16, color: '#777', marginTop: 8 }}>
    Example: customer 360 view project.
  </div>
</div>

* **The Rule of Ownership:** If a specific group (like the `Marketing-DEs`) is in charge of a project, that group should the schemas.
* **Sharing is caring:** If another team needs to see a specific table or UC asset, the owners simply grant them the correct level of access. 
    *  The permissions should be provided at the schema level for better management.
        * ***Data Reader*** permissions.
        * ***Data Editor*** permissions.
* **The Benefit:** This keeps the data safe because it means only the people who actually need the information can get to it.
* **The Goal:** To ensure that access is given "as needed" rather than leaving the door wide open for everyone.