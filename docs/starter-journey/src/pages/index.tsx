import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// If your image is in static/img/logo.png, you can import it like this:
import useBaseUrl from '@docusaurus/useBaseUrl';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="New to Databricks? Launch your first MVP fast with this step-by-step guide.">
      
      <main className="flex flex-col items-center py-16 px-4">
        
        {/* Section 0: Top Image/Logo */}
        <div className="flex justify-center mx-auto mb-6">
          <img 
            src={useBaseUrl('/img/mainpage.jpg')} // Change this path to your image
            alt="Website Logo"
            className="object-contain"
            style={{ width: '650px', height: 'auto' }}
          />
        </div>

        {/* Section 1: Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            {siteConfig.title}
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Build your first MVP fast with this step-by-step guide.
          </p>
        </div>

        {/* Section 2: First Row of Buttons */}
        <div className="flex justify-center mx-auto flex-wrap gap-4 mb-6">
          
          <Link
            className="button button--primary button--lg px-8 py-3"
            to="/docs/get-started">
            1. Get Started
          </Link>
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/foundations">
            2. Foundations
          </Link>
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/cloud-tenants">
            3. Cloud tenant(s)
          </Link>
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/create-workspaces">
            4. Create workspaces
          </Link>
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/post-deployment/">
            5. Post-deployment configurations
          </Link>
        </div>

        <div className="flex justify-center mx-auto flex-wrap gap-4 mb-6">
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/uc-governance-strategy">
            6. Governance strategy on Unity Catalog
          </Link>
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/access-your-data-from-uc">
            7. Access your data from UC
          </Link>
        </div>

        <div className="flex justify-center mx-auto flex-wrap gap-4 mb-6">
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/data-engineering">
            8. Data Engineering
          </Link>
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/data-warehouse">
            9. Data Warehouse
          </Link>
        </div>

        <div className="flex justify-center mx-auto flex-wrap gap-4 mb-6">
          
          <Link
            className="button button--secondary button--lg px-8 py-3"
            to="/docs/aibi">
            10. AI/BI
          </Link>
        </div>


      </main>
    </Layout>
  );
}