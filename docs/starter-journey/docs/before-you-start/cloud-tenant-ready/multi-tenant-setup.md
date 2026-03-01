---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Multi tenant setup

## Organization context
- My organization uses Azure.
- There are 3 different Azure subscriptions: dev, staging and prod.
- We want to isolate the Databricks and Azure resources as much as we can.
- Each environment data needs to be isolated on it's own location.

## Databricks setup recommendation.

- For each Azure subscription, create a Databricks workspace and the required Azure resources.

<img src={useBaseUrl('/img/multi-tenant.png')} alt="description" width="800"/>
