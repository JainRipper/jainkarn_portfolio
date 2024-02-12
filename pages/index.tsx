import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
// import FavouriteProjects from "../components/FavouriteProjects";
// import LatestCode from "../components/LatestCode";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../constants/data";
import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection";
import ServiceSection from "@/components/ServiceSection"
import SkillSection from "@/components/SkillSection"
import PortfolioSection from "@/components/PortfolioSection"

interface Props {
  repositories?: ReactNode;
}

export default function Home({ repositories }: Props) {
  return (
    <ContainerBlock
      title="Jainkarn Pitakkaittikool - Developer, Boxer"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <HeroSection />
      {/* <FavouriteProjects />
      <LatestCode repositories={repositories} /> */}
      {/* <AboutSection /> */}
      <ServiceSection />
      <SkillSection />
      <PortfolioSection />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
