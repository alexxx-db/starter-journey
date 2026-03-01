---
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Admonition from '@theme/Admonition';

# UC assets ownership

:::info
* Change Unity Catalog assets ownership to follow the best practices mentioned on the groups section.
* Change the ownership of all assets to the `Metastore Admins` | `Unity Admins` group.
:::

## Step-by-step guide for external locations - storage credentials - connections.

* Check the screenshots.
* On the workspace left panel, click on **Catalog**.
* Click on ⚙️ and go to External Locations.
* For each tab (External Locations, Credentials, Connections, External Metadata), change the owner of all assets to `Metastore Admins` | `Unity Admins` group.
    * Click on the asset.
    * On the far right, click the ✏️ edit button next to the owners name.
    * There is going to be at most 3 storage locations and external locations.
        * **Note:** If the External Locations or Credentials tab is empty, probably you don't belong to the metastore Admins group. 

### Screenshots
:::warning
    * Access external locations, storage credentials, and connections by clicking the wheel icon (⚙️).
    * The first screenshould is going to be updated soon.
:::
<img src={useBaseUrl('/img/uc-owners-1.jpg')} alt="description"/>
<img src={useBaseUrl('/img/uc-owners-2.jpg')} alt="description"/>
<img src={useBaseUrl('/img/uc-owners-3.jpg')} alt="description"/>

## Step-by-step guide for catalogs and schemas.

* On the workspace left panel, click on **Catalog**.
* For each catalog **that is not the system catalog**:
    * Click the catalog.
    * On the overview tab, search for the **About this catalog** section to find the Owner.
    * Click the ✏️ icon to change the owner to `Metastore Admins` | `Unity Admins` group.
        * For each schema in the catalog, change the owner to `Metastore Admins` | `Unity Admins` group.


### Screenshots
<img src={useBaseUrl('/img/uc-owners-4.jpg')} alt="description"/>

## Expected results

### For all external locs - storage creds - connections
<img src={useBaseUrl('/img/uc-ss-output-1.jpg')} alt="description"/>

### For catalogs and schemas
<img src={useBaseUrl('/img/uc-ss-output-2.jpg')} alt="description"/>
