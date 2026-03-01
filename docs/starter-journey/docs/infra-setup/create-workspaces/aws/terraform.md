---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# AWS – Terraform

:::info
Follow the two sections:
* Workspace deployment
* Catalog creation
:::

:::warning
The workspace creation on Terraform does not includes a default catalog creation. Therefore the second module is required too.
:::

## Workspace deployment

* [Github | Databricks on AWS with Customer-Managed VPC (BYOVPC)](https://github.com/databricks-solutions/technical-services-solutions/tree/main/workspace-setup/terraform-examples/aws/aws-byovpc)
* Follow the **README.md**.
* Use the **tf/terraform.tfvars.example** file as a reference!
  * Repeat for **staging** and **production** workspaces.

:::info Tip #1: Environment isolation.
- Use the prefix to apply the environment isolation.
  - Example #1: creating the first workspace (development).
    - prefix can be **dev** or **development**.
    - prefix can also have the businesss unit name.
      - i.e **finance_dev** or **finance_dev**
:::

:::info Tip #2: Networking configuration.
- Option #1 to create a new VPC (recommended, a Databricks VPC per tenant).
- Option #2 to use an existing VPC.
:::

:::info Tip #3: Metastore.
- Option #1 if there are no metastores on the Account Console.
- Option #2 if there is a metastore in the region  already.
:::

### Youtube tutorial

:::warning
* The video uses an old version of the Terraform template.
* The video shows similar steps as the template provided above.
:::

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/t5vyL1RKXUE"
  title="YouTube video player"
></iframe>


## Catalog deployment

* [Github | Module to create a catalog](https://github.com/databrickslabs/sandbox/tree/main/uc-quickstart/aws/modules/environment).
* See an example of how to use the module on [main.tf](https://github.com/databrickslabs/sandbox/blob/main/uc-quickstart/aws/main.tf).
    * The main.tf file creates three catalogs for the three environments: production, development and sandbox on the same AWS account (same AWS provider for all 3 module calls).
    * The best practice is to isolate resources on different AWS accounts. 

### Example of input variables

:::danger
* The provider should use a workspace-level connection as shown in: [Authenticating with Databricks-managed Service Principal](https://registry.terraform.io/providers/databricks/databricks/latest/docs#authenticating-with-databricks-managed-service-principal)
* The service principal used in this step should have access to the workspace as admin, otherwise it won't work.
* See common errors in the section below.
:::

i.e **development** workspace was successfully deployed from the previous step, the next action is to create a catalog for this workspace so users can create schemas, tables and models:
```hcl
catalog_name = development
external_location_name = development-catalog-default
databricks_account_id = 12341234
aws_account_id = abc123abc123
storage_prefix = development
bucket_name = myorg-databricks-development-catalog
```

### Common errors

:::warning 

PERMISSION_DENIED: User is not an owner of Metastore while creating catalog.

Fix (for account / metastore admins):

* Option 1: Add the service principal to the metastore admins group.
* Option 2: Grant you just the ability to create catalogs:
```sql
GRANT CREATE CATALOG ON METASTORE TO `service_principal_name`;
```