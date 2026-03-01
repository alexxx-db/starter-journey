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

### Development 🧪
This is the playground where your team builds and experiments. It’s the place to try out new ideas and write new code.
* **Who’s allowed in:** Data Engineers and Data Scientists.
* **The Goal:** To give creators a safe space to break things, fix them, and learn without affecting the rest of the company.
* **Binded to**: Development workspace.

### Staging ⚖️
This is the final checkpoint. Once a project is finished in the "Lab," it moves here to be tested against real-world scenarios to ensure everything is perfect.
* **Who’s allowed in:** Developers (to test) and Quality Testers (to approve).
* **The Goal:** To catch any last-minute "bugs" or mistakes before the data is shown to the bosses.
* **Binded to**: Staging workspace.

### Production 🚀 
This is the official, high quality and reliable data. This is the only version of the data that the leadership team uses for their daily reports and dashboards.
* **Who’s allowed in:** Automated systems and Business Users (View-Only).
* **The Goal:** To provide a 100% reliable and secure environment where the data is always accurate and "live."
* **Binded to**: Production workspace.

---

## Schemas

<img src={useBaseUrl('/img/ucblog-simple-schemas.jpg')} alt="description"/>

### The Medallion Journey: From Raw to Gold 🏆

Think of the **Medallion Architecture** as a high-end cleaning service for your data. It takes "messy" information from the outside world and transforms it into "gold" for your company's leaders.

To keep things organized, we use **Schemas** as the folders for each project. As a best practice, always add your **Project Name** as a prefix (for example: `c360_bronze` or `salesforecast_gold`).



### Bronze Layer 🥉
This is where data first arrives. It is a perfect "carbon copy" of the original source—nothing has been changed, cleaned, or fixed yet.
* **Naming Example:** `PROJECT_NAME_bronze`
* **The Goal:** To keep a permanent record of the original data just in case we ever need to go back and double-check a number.

### Silver Layer 🥈 
In this layer, we "wash" the data. We fix typos, remove duplicates, and make sure all the dates and labels are consistent and easy to read.
* **Naming Example:** `PROJECT_NAME_silver`
* **The Goal:** To create a reliable, "clean" version of the data that different teams can trust and share.

### Gold Layer 🥇 
This is the final, polished version. The data here has been specially organized to answer big business questions, like "How much did we sell today?" or "Who are our top customers?"
* **Naming Example:** `PROJECT_NAME_gold`
* **The Goal:** To provide the "Gold Standard" answers that power your company’s official dashboards and reports.

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
    *  The permissions should be provided at the schema level for beter management.
        * ***Data Reader*** permissions.
        * ***Data Editor*** permissions.
* **The Benefit:** This keeps the data safe because it means only the people who actually need the information can get to it.
* **The Goal:** To ensure that access is given "as needed" rather than leaving the door wide open for everyone.