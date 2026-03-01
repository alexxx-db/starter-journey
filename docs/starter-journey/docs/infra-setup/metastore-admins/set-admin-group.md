---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Set admin group

:::info
Configure the metastore admin group.
:::

:::success best practice
- **The metastore Admin must be a group.**
:::

:::danger 
- **Avoid individuals or service principals as Admins.**
:::

* Go to the Account Console
    - [AWS](https://accounts.cloud.databricks.com)
    - [Azure](https://accounts.azuredatabricks.net)
    - [GCP.](https://accounts.gcp.databricks.com)
* On the left panel, click on **Catalog**.
* Click on the available metastore.
* **Verify that the metastore owner is a group**
* If the metastore Admin is an user or a Service Principal:
    * **Change the ownership**: assign the metastore admins or unity admin group as the new Admin.
* Select the metastore auto-assigment on new Workspaces.
* (optional) Activate Delta Sharing if required for your projects.

<img src={useBaseUrl('/img/account-metastore-owner.png')} alt="description"/>
