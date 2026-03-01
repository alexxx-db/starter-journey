---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Create connection

:::info
Create a managed connection to external data sources.
:::

The two purposes of Unity Catalog connection is to:
1. Create a foregin catalog to push-down queries from Databricks.
    * For use cases where just a small subset of the external data source is required.
2. Create a managed ingestion pipeline into Unity Catalog using **Lakeflow Connect**.
    * For use cases that required a continue CDC ingestions from the external data source into Databricks.

## Create Connection
<br />
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/fjxjK-jvRng"
></iframe>


## Step-by-step tutorial 

1. Navigate to the Databricks workspace

2. In the left sidebar, click on "Catalog" and then click on "External Data" 

:::warning
* Click on the ⚙️ icon to access connections.
* The screenshot needs an update.
:::

<div style={{textAlign: 'left'}}>
  <img src={useBaseUrl('/img/aws/aws_external_data_buttom.png')} 
  alt="external data buttom"
  style={{width: '80%', height: 'auto'}}
  />
</div>
<br />

3. Click on "Connections"
<div style={{textAlign: 'left'}}>
  <img src={useBaseUrl('/img/aws/addconnectionbuttom.png')} 
  alt="external data buttom"
  style={{width: '80%', height: 'auto'}}
  />
</div>
<br />


4. **Configure your connection:**
   - **Connection name**: Enter a descriptive name for your data source connection
   - **Connection type**: Select the appropriate connector for your external system (e.g., PostgreSQL, MySQL, SQL Server, Snowflake, etc.)
   - **Supported connections**: [Databricks Lakehouse Federation documentation](https://docs.databricks.com/aws/en/query-federation/).

5. **Configure network connectivity:**
    - Ensure your external data source is network connectivity from the Databricks VPC / VNet is set.
    - Configure appropriate security groups, VPC settings, or firewall rules.
    - For on-premises systems, you may need VPN or dedicated network connections.
    - Resources:
        - [AWS - VPC peering](https://docs.databricks.com/aws/en/security/network/classic/vpc-peering).
        - [Azure - VNet peering](https://learn.microsoft.com/en-us/azure/databricks/security/network/classic/vnet-peering).
        - [GCP - VPC peering](https://docs.cloud.google.com/vpc/docs/vpc-peering).
   
6. **Test and create the connection:**
   - Click **Test Connection** to verify connectivity
   - Once successful, click **Create** to save your external data connection