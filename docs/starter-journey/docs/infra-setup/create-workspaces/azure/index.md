---
sidebar_position: 0
sidebar_label: Azure
description: Create Databricks workspaces on Microsoft Azure using the portal or Terraform.
---

# Azure

> **You'll create** Databricks workspaces on Azure using either the portal or Terraform.
>
> **Prereqs:** [Cloud Tenant ready](/docs/before-you-start/cloud-tenant-ready), an Azure subscription with contributor permissions

## How it works

Azure workspace deployments create a managed resource group, VNet injection resources, and the Databricks workspace in your subscription. You choose between two paths depending on your automation needs.

| Path | Best for |
|---|---|
| Manual | First workspace, quick proof of concept |
| Terraform | Repeatable deployments, staging and production |

## Choose your path

- **[Manual](/docs/infra-setup/create-workspaces/azure/manual)** — Create a workspace through the Azure portal.
- **[Terraform](/docs/infra-setup/create-workspaces/azure/terraform)** — Deploy a workspace with VNet injection using infrastructure as code.

## Next

- **Do next:** [Manual workspace creation](/docs/infra-setup/create-workspaces/azure/manual)
- **Learn why:** [Workspace foundations](/docs/before-you-start/foundations/workspace)
- **Reference:** [Create a workspace on Azure](https://learn.microsoft.com/en-us/azure/databricks/getting-started/)
