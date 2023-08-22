import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <header className="flex justify-center items-center h-[80vh] py-5 bg-[color:var(--ifm-color-primary)]">
        <div className="flex flex-col gap-2 w-full max-w-screen-lg">
          <h1 className="text-8xl">{siteConfig.title}</h1>
          <p className="text-3xl">{siteConfig.tagline}</p>
          <Link
            to="/docs/intro"
            className="w-fit text-black bg-white px-3 py-2 rounded-md"
          >
            Start Course
          </Link>
        </div>
      </header>
      <div className="flex justify-center">
        <main className="flex flex-col py-5 w-full max-w-screen-lg">
          <h2 className="text-3xl">Hello world!</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime
            aliquam quaerat animi suscipit asperiores repudiandae pariatur!
            Cupiditate non laborum unde rem incidunt necessitatibus modi
            repudiandae consequuntur! Quo, vitae culpa.
          </p>
        </main>
      </div>
    </Layout>
  );
}
