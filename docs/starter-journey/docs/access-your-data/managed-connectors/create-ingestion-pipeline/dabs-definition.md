---
---

# DABs definition

:::info
* Define and deploy ingestion pipelines using Databricks Asset Bundles (DABs).
* The code example was inspired on [Create pipeline for PostgreSQL](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect/postgresql-pipeline#create-the-gateway-and-ingestion-pipeline).
    * The only difference is the classic compute specification for the ingestion gateway pipeline.
    * Check all the other connectors on the Databricks documentation - left panel.
* Check [Feature Availability](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect/?language=PostgreSQL#feature-availability) for your data source.
:::


# Database ingestion pipeline

:::note
See the attributes definitions on: [REST API ref - Create a pipeline](https://docs.databricks.com/api/workspace/pipelines/create)
:::

```yaml
variables:
  # Common variables used multiple places in the DAB definition.
  gateway_name:
    default: postgresql_gateway_pipeline
  pipeline_name:
    default: postgresql_pipeline
  dest_catalog:
    default: development
  dest_schema:
    default: c360_source

resources:
  pipelines:
    gateway:
      name: ${var.gateway_name}
      gateway_definition:
        connection_name: <my-connection>
        gateway_storage_catalog: development
        gateway_storage_schema: ${var.dest_schema}
        gateway_storage_name: ${var.gateway_name}
      target: ${var.dest_schema}
      catalog: ${var.dest_catalog}

      # Classic compute definition.
      clusters:
        - label: default
        # For Azure use Standard_DS3_v2 / Standard_DS4_v2 / Standard_DS5_v2
          driver_node_type_id: r5.xlarge # Scale on the R5.x family

          # For Azure use Standard_E8ds_v4 / Standard_E16ds_v4 / Standard_E32ds_v4
          node_type_id: m5.xlarge # Scale on the m5.x family
          autoscale:
            min_workers: 2
            max_workers: 4
            mode: ENHANCED

    # The ingestion pipeline is serverless.
    pipeline_postgresql:
      name: ${var.pipeline_name}
      ingestion_definition:
        ingestion_gateway_id: ${resources.pipelines.gateway.id}
        
        source_type: POSTGRESQL
        objects:
          # Modify this with your tables!
          - table:
              # Ingest the table public.orders to dest_catalog.dest_schema.orders.
              source_catalog: your_database
              source_schema: public
              source_table: orders
              destination_catalog: ${var.dest_catalog}
              destination_schema: ${var.dest_schema}
          - schema:
              # Ingest all tables in the public schema to dest_catalog.dest_schema. The destination
              # table name will be the same as it is on the source.
              source_catalog: your_database
              source_schema: public
              destination_catalog: ${var.dest_catalog}
              destination_schema: ${var.dest_schema}
        source_configurations:
          - catalog:
              source_catalog: your_database
              postgres:
                slot_config:
                  slot_name: db_slot
                  publication_name: db_pub
      target: ${var.dest_schema}
      catalog: ${var.dest_catalog}
```
