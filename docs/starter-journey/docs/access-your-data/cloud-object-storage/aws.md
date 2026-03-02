---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# AWS - S3

:::info
* Connect to data in Amazon S3 from Databricks.
* The official guide can be found in the last section.
:::

## Pre-requisites

- Permissions to run the AWS CloudFormation template.
- Permissions to create roles and policies in AWS.

## Youtube Walkthrough
<br />
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/oysb7Kef0Bk"
></iframe>

## Step-by-step guide

### How to Create an S3 Bucket in the AWS Console

1. Navigate to the [AWS console](https://console.aws.amazon.com/)
2. In the search bar, type **S3**
3. Select **S3** from the search results
4. Click **Create bucket**

<div style={{textAlign: 'left'}}>
  <img src={useBaseUrl('/img/aws/aws_create_buttom_s3bucket.png')} 
  alt="create S3 bucket"
  style={{width: '50%', height: 'auto'}}
  
  />
</div>

<br />


5. Complete the configuration form with the following required information:
   - **Bucket name**: Provide a descriptive name for the bucket
   - **Object ownership**: ACLS Disable
   - **Block public access**: block all public access
   - **Bucket versioning**: Disable
   - **Tags**: optional but recommended
   - **Default encryption**: server side encryption with Amazon S3 Managed Keys (SSE-S3)
   - **Bucket key**: Disable
   

<div style={{textAlign: 'left'}}>
  <img src={useBaseUrl('/img/aws/s3bucketoptoins_part1.png')} 
  alt="S3 bucket options part 1"
  style={{width: '70%', height: 'auto'}}
  
  />
</div>

   <div style={{textAlign: 'left'}}>
  <img src={useBaseUrl('/img/aws/s3bucketoptoins_part2.png')} 
  alt="S3 bucket options part 2"
  style={{width: '70%', height: 'auto'}}
  
  />
</div>

<br />

### How to create an external location in Databricks

1. Navigate to the Databricks workspace
2. In the left sidebar, click on "Catalog" and then click on "External Data"

<div style={{textAlign: 'left'}}>
  <img src={useBaseUrl('/img/aws/aws_external_data_buttom.png')} 
  alt="external data button"
  style={{width: '80%', height: 'auto'}}
  
  />
</div>
<br />

3. Click on "Create external location"

<div style={{textAlign: 'left'}}>
  <img src={useBaseUrl('/img/aws/create_externallocation_buttom.png')} 
  alt="create external location button"
  style={{width: '70%', height: 'auto'}}
  
  />
</div>
<br />


4. Select the AWS QuickStart and click on "Next"

<div style={{textAlign: 'left'}}>
<br />
  <img src={useBaseUrl('/img/aws/external_location_quickstart_option.png')} 
  alt="quickstart option"
  style={{width: '70%', height: 'auto'}}
  
  />
</div>
<br />

5. Fill the bucket name. (s3://`<existing-bucket-name>`).
6. Click on ***Generate new token***.
7. Copy the token.

<div style={{textAlign: 'left'}}>
<br />
  <img src={useBaseUrl('/img/aws/s3_quickstart_form.png')} 
  alt="quickstart form"
  style={{width: '50%', height: 'auto'}}
  
  />
</div>
<br />
8. Paste the token in the "Databricks Personal Access Token" field and click on "I acknowledge that aws cloud formation might create iam resources with custom names" and click on create stack

<div style={{textAlign: 'left'}}>
<br />
  <img src={useBaseUrl('/img/aws/quickstarttemplate_part1.png')} 
  alt="quickstart form"
  style={{width: '80%', height: 'auto'}}
  
  />
</div>
<br />

<div style={{textAlign: 'left'}}>
<br />
  <img src={useBaseUrl('/img/aws/quickstarttemplate_part2.png')} 
  alt="quickstart form"
  style={{width: '80%', height: 'auto'}}
  
  />
</div>
<br />

## Official Databricks guide

* [Create a storage credential and external location for S3 using Catalog Explorer or SQL
](https://docs.databricks.com/aws/en/connect/unity-catalog/cloud-storage/s3/s3-external-location-manual)