import React, { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

interface Props {
  children?: ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  // any props that come into the component
}

export default function ContainerBlock({ children, ...customMeta }: Props) {
  const router = useRouter();

  const meta = {
    title: "Manu Arora - Developer, Writer, Creator and YouTuber",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        {/* <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        /> */}
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <main className="mx-auto">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
