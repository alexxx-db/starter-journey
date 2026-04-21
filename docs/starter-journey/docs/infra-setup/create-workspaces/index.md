---
sidebar_position: 0
sidebar_label: Create Workspaces
description: Create Databricks workspaces with dedicated networking on AWS, Azure, or GCP.
---

# Create Workspaces

> **You'll create** Databricks workspaces with dedicated VPC/VNet isolation in ~15–30 min per workspace.
>
> **Prereqs:** [Cloud Tenant ready](/docs/before-you-start/cloud-tenant-ready)

## Why this matters

Workspaces are the compute and collaboration boundary in Databricks. Each workspace runs inside a dedicated VPC (AWS), VNet (Azure), or VPC (GCP) that isolates network traffic. Getting the workspace and network layout right at creation time avoids costly re-deployments later.

## How it works

Each cloud provider has two deployment paths:

- **Manual** — point-and-click through the account console or cloud portal. Good for first-time setup or small environments.
- **Terraform** — infrastructure as code for repeatable, version-controlled deployments. Recommended for staging and production.

Pick your cloud provider to get started:

- **[AWS](/docs/infra-setup/create-workspaces/aws)** — Manual and Terraform options.
- **[Azure](/docs/infra-setup/create-workspaces/azure)** — Manual and Terraform options.
- **[GCP](/docs/infra-setup/create-workspaces/gcp)** — Manual and Terraform options.

## Next

- **Do next:** [AWS workspace creation](/docs/infra-setup/create-workspaces/aws)
- **Learn why:** [Workspace foundations](/docs/before-you-start/foundations/workspace)
- **Reference:** [Databricks workspace administration](https://docs.databricks.com/aws/en/admin/account-settings-e2/workspaces.html)
