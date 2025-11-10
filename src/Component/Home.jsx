import React from "react";
import HeroSection from "./HeroSection";
import RecentTips from "./RecentTips";
import Challenges from "./Challenges";
import UpComingEvent from "./UpComingEvent";
import WhyTOGrow from "./WhyTOGrow";
import HowItIsWork from "./HowItIsWork";
import { useLoaderData } from "react-router";
import ActiveChallenges from "./ActiveChallenges";

const Home = () => {
  const challenges = useLoaderData()
  console.log(challenges)
  const firstThree = challenges.slice(0, 3);
  
  return (
    <div>
      <header className="container mx-auto">
        <HeroSection></HeroSection>
      </header>
      <main>
        <ActiveChallenges></ActiveChallenges>
        <Challenges firstThree={firstThree}></Challenges>
        <RecentTips></RecentTips>
        <UpComingEvent></UpComingEvent>
        <WhyTOGrow></WhyTOGrow>
        <HowItIsWork></HowItIsWork>
      </main>
    </div>
  );
};

export default Home;
