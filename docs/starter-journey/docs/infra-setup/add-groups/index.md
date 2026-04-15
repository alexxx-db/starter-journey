---
sidebar_position: 0
sidebar_label: Add Groups
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Add Groups

:::info
* Follow the industry standard.
* Add and manage groups for access control and permissions.
:::


## Journey checklist
- [x] ~~Identify target cloud tenant(s).~~
- [ ] Infra setup.
    - [x] Create workspaces.
    - [x] Add users.
    - [ ] **Add groups.**
    - [ ] Change ownership to metastore admins.
    - [ ] Activate SSO.
- [ ] Data Governance Strategy.
- [ ] Access your data.
- [ ] Build the first pipeline.
- [ ] Automation and orchestration.
- [ ] Query and explore.
- [ ] Databricks AI/BI
---

## Industry standard

:::info
The following groups reflect standard data personas involved on Databricks solutions. These titles can be customized to align with your organization’s internal naming conventions.
:::

### Databricks Solution example
<div style={{ textAlign: 'center', marginTop: 24, marginBottom: 8 }}>
  <img
    src={useBaseUrl('/img/ucblog-simple-grants.jpg')}
    alt="Diagram showing Databricks user groups and their permissions"
    style={{width: '100%' }}
  />
  <div style={{ fontSize: 16, color: '#777', marginTop: 8 }}>
    Example: Customer 360 project for the marketing business unit. Multiple permissions and grants on the data and AI/BI assets.
  </div>
</div>

### Groups

| Group Name | Role in the workspace | Toolstack |
| :--- | :--- | :--- |
| **Metastore Admins** or **Unity Admins** | Administrators of the Unity Catalog Metastore. Every new UC asset (catalog, external location or connection) should be request to an individual in this group. | - Governance Framework - SCIM and SSO. |
| **Workspace Admins** | Manages the access, settings and permissions of every group assigned to the workspace. Each workspace should have it's own admin group (see the next section). | - Cloud Administration.
| **Data Engineers** | Manage transformation pipelines that process raw data into clean, reliable and organized tables. They have ***Read and Write*** permissions on the schemas and tables of specific projects. | - Python - Spark - SQL - Dashboards - CI/CD and DevOps. |
| **Data Scientists** | Train and deploy ML models or GenAI agents. They have ***Read-Only*** access on a specific set of schemas and tables. | - Python - Pandas - MLflow - ML and GenAI frameworks.
| **Data Analysts** | Manage business metrics, analytics and dashboards. They have ***Read-Only*** data to create dashboards and reports. | SQL, Dashboards and Visualizations |
| **Business Users** | Final users which can see the dashboards and Genie spaces created by either the Data Engineers or Data Analysts. They have ***View-Only*** access and do not typically access the Databricks Workspaces. | Excel |


## Workspace Admins

For each workspace, create an admin group, for instance:
    * `Dev Workspace Admins` | `dev-ws-admins`.
    * `Staging Workspace Admins` | `stg-ws-admins`.
    * `Prod Workspace Admins` | `prod-ws-admins`.

## More granularity and isolation is required

* If more isolation levels is required, add the business unit or project name as prefix to the groups.
* This practice is common on medium-large organizations where a single `Data Engineers` group doesn't fit the required governance granularity.

For each business unit or project, add a group with the required prefix:
    * `[bu-project]-Data Engineers` | `[bu-project]-data-engineers`.
    * `[bu-project]-Data Scientists` | `[bu-project]-data-scientists`.
    * `[bu-project]-Data Analysts` | `[bu-project]-data-analysts`.
    * `[bu-project]-BI User` | `[bu-project]-bi-user`.

## Create the groups

- **[Manual](/docs/infra-setup/add-groups/manual)** – Add groups through the UI
- **[SCIM](/docs/infra-setup/add-groups/scim)** – Automate group provisioning with SCIM