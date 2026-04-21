---
sidebar_position: 0
sidebar_label: AWS
description: Create Databricks workspaces on AWS using the console wizard or Terraform.
---

# AWS

> **You'll create** Databricks workspaces on AWS using either the manual wizard or Terraform.
>
> **Prereqs:** [Cloud Tenant ready](/docs/before-you-start/cloud-tenant-ready), an AWS account with admin permissions

## How it works

AWS workspace deployments create IAM roles, an S3 root bucket, and VPC resources in your account. You choose between two paths depending on your automation needs.

| Path | Best for |
|---|---|
| Manual | First workspace, quick proof of concept |
| Terraform | Repeatable deployments, staging and production |

## Choose your path

- **[Manual](/docs/infra-setup/create-workspaces/aws/manual)** — Create a workspace through the Databricks account console with the automated configuration wizard.
- **[Terraform](/docs/infra-setup/create-workspaces/aws/terraform)** — Deploy a workspace and catalog using infrastructure as code.

## Next

- **Do next:** [Manual workspace creation](/docs/infra-setup/create-workspaces/aws/manual)
- **Learn why:** [Workspace foundations](/docs/before-you-start/foundations/workspace)
- **Reference:** [Create a workspace on AWS](https://docs.databricks.com/aws/en/admin/account-settings-e2/workspaces.html)
