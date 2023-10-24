import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { TechSeoulComponent } from "../components/Layout/tech_seoul_layout";
// import { Blocks } from "../components/Blocks";

const pageData = require("../../config/homepage/index.json");

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout>
      <TechSeoulComponent config={siteConfig} />
      {/* {pageData && pageData.blocks ? <Blocks blocks={pageData.blocks} /> : null} */}
    </Layout>
  );
}
