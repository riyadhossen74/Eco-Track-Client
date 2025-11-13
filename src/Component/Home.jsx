import React from "react";

import RecentTips from "./RecentTips";
import Challenges from "./Challenges";
import UpComingEvent from "./UpComingEvent";

import HowItIsWork from "./HowItIsWork";
import { useLoaderData } from "react-router";
import ActiveChallenges from "./ActiveChallenges";
import HeroSection from "./HeroSection";
import WhyToGreen from "./WhyToGreen";

const Home = () => {
  const challenges = useLoaderData();
  
  const firstThree = challenges.slice(0, 4);

  return (
    <div>
      <header className="">
        <HeroSection></HeroSection>
      </header>
      <main>
        <ActiveChallenges></ActiveChallenges>
        <Challenges firstThree={firstThree}></Challenges>
        <RecentTips></RecentTips>
        <UpComingEvent></UpComingEvent>
        <WhyToGreen></WhyToGreen>
        <HowItIsWork></HowItIsWork>
      </main>
    </div>
  );
};

export default Home;
