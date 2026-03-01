---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Medium-large organizations

:::info
Data governance strategy for medium and large organizations.
:::

## Business Unit Isolation

### 🏷️ Using Prefixes for Better Organization

To keep Databricks tidy as it grows, add a **Prefix** (a short label at the beginning) to your Workspaces, Catalogs, and Groups. Think of this like labeling every box in a moving truck so you know exactly which room it belongs to.

* **Workspaces:** `PROD-Marketing` (Tells you exactly which environment and team this belongs to).
* **Catalogs:** `dev_finance` (Helps you quickly separate "Test" data from "Live" data).
* **Groups:** `finance_data_engineers` (Ensures you don't accidentally give an Engineer from a different department the wrong permissions).

**The Goal:** By using these labels, you get **Granularity**—which is just a fancy way of saying you have total control over every small piece of your organization without getting confused.

Apply the same idea presented on [Small organizations](/docs/data-governance-strategy/small-organizations).

## Catalogs

<img src={useBaseUrl('/img/ucblog-multi-catalogs.jpg')} alt="description"/>

## Schemas

<img src={useBaseUrl('/img/ucblog-multi-schemas.jpg')} alt="description"/>

## Permissions and Grants

<div style={{ textAlign: 'center', marginTop: 24, marginBottom: 8 }}>
  <img
    src={useBaseUrl('/img/ucblog-multi-grants.jpg')}
    alt="Diagram showing Databricks user groups and their permissions"
    style={{width: '100%' }}
  />
  <div style={{ fontSize: 16, color: '#777', marginTop: 8 }}>
    Example: customer 360 view project.
  </div>
</div>