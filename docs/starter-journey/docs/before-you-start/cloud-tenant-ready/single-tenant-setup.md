---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# Single tenant setup

## Organization context

- My organization uses AWS.
- There is only one available AWS account.
- There is no plan to create new AWS accounts in the long-term so every required AWS resource for Databricks needs to be deployed on the available account.

## Databricks setup recommendation.

- Create the required Databricks AWS infra on the available AWS account.

<img src={useBaseUrl('/img/single-tenant.png')} alt="description" width="800"/>