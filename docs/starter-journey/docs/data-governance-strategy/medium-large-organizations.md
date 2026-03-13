---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Medium-large organizations

:::info
Data governance strategy for medium and large organizations.
:::

## Business Unit Isolation

Apply prefixed and the same ideas presented on [Small organizations](/docs/data-governance-strategy/small-organizations).

### Prefixes for better organization

As Databricks grows, things can get messy fast. To keep your environments & teams organized and isolated, try adding a prefix—just a short tag at the start—to your Workspaces, Catalogs, and Groups.

* **Workspaces:** `PROD-Marketing` (Tells you exactly which environment and team this belongs to).
* **Catalogs:** `dev_finance` (Helps you quickly separate ***dev*** data from ***prod*** data on the finance department).
* **Groups:** `finance_data_engineers` (Ensures you don't accidentally give an Engineer from a different department the wrong permissions).

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