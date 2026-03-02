---
sidebar_position: 0
sidebar_label: Cloud Tenant ready
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Cloud Tenant ready

:::info
Choose how your organization will use Databricks in the cloud.
:::

## Task-list

- [ ] **Identify your organization cloud tenant(s).**
- [ ] Create the workspace(s).
- [ ] Post-deployment configurations.
- [ ] Governance Strategy on Unity Catalog.
- [ ] Access your data from Unity Catalog.
- [ ] Create the first pipeline.
- [ ] Query and explore data from a DBSQL Warehouse.
- [ ] Create the first visualization using Dashboards and Genie.


## Cloud tenant
:::note
In this article, the term cloud tenant(s) refers to having one or multiple:
* Azure subscription(s).
* AWS account(s).
* GCP project(s).
:::

## Plan accordingly

Organizations often choose to have multiple cloud tenants (or "accounts") to create hard boundaries between different parts of their business. While it might seem easier to put everything in one place, doing so creates a "blast radius" where one mistake could take down the entire company.

Think of it like an apartment building: it’s safer and more organized for everyone to have their own unit (tenant) with their own key, rather than everyone sharing one giant open floor plan.

## Databricks multi-tenant support

Databricks is flexible: you can house all your work in one "building," or spread it across several different "addresses." In the cloud world, these addresses are called tenants (or accounts).

To get started, simply identify which category your organization falls into:

Option 1: The "Single-House" Setup
Best for: Small teams or companies that keep everything in one place.

- **[Single-tenant setup](/docs/before-you-start/cloud-tenant-ready/single-tenant-setup)** – One tenant for your organization

On the other hand, if your organization has multiple cloud tenants, you must proceed with this setup:

- **[Multi-tenant setup](/docs/before-you-start/cloud-tenant-ready/multi-tenant-setup)** – Multiple tenants (e.g. by environment or business unit/division)
