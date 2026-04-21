---
sidebar_position: 0
sidebar_label: GCP
description: Create Databricks workspaces on Google Cloud Platform using the console or Terraform.
---

# GCP

> **You'll create** Databricks workspaces on GCP using either the console or Terraform.
>
> **Prereqs:** [Cloud Tenant ready](/docs/before-you-start/cloud-tenant-ready), a GCP project with owner permissions

## How it works

GCP workspace deployments create the necessary service accounts, GCS buckets, and VPC resources in your project. You choose between two paths depending on your automation needs.

| Path | Best for |
|---|---|
| Manual | First workspace, quick proof of concept |
| Terraform | Repeatable deployments, staging and production |

## Choose your path

- **[Manual](/docs/infra-setup/create-workspaces/gcp/manual)** — Create a workspace through the Databricks account console.
- **[Terraform](/docs/infra-setup/create-workspaces/gcp/terraform)** — Deploy a workspace with BYOVPC using infrastructure as code.

## Next

- **Do next:** [Manual workspace creation](/docs/infra-setup/create-workspaces/gcp/manual)
- **Learn why:** [Workspace foundations](/docs/before-you-start/foundations/workspace)
- **Reference:** [Create a workspace on GCP](https://docs.gcp.databricks.com/en/admin/account-settings-gcp/workspaces.html)
