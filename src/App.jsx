import Card from "./components/Card";
import Hero from "./components/Hero";
import Section from "./components/Section3";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import RevealOnScroll from "./components/Transitions/RevealOnScroll";
import ScaleTransition from "./components/Transitions/ScaleTransition";
import MovementTransition from "./components/Transitions/MovementTransition";
import Timeline from "./components/Timeline";
import MasterClass from "./components/MasterClass";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lexend Zetta', sans-serif; /* Apply Lexend Zetta font */
  }
`;


export default function App() {
  return (
    <div style={{ background: '#0f1114' }}>
      <GlobalStyle />
      <Hero />
      <RevealOnScroll>
        <Section />
      </RevealOnScroll>


      <Timeline />

      <MasterClass title='TechTaleForge' className='' />
      <h1 className='max-w-2xl my-5 m-auto text-4xl font-extrabold tracking-tight justify-center text-center text-blue-600 xl:text-6xl dark:text-black sm:flex sm:items-center'>
        <span className="bg-clip-text text-transparent text-center bg-gradient-to-r from-white to-gray-100">
          What to expect
        </span>
      </h1>
      <p className="justify-center text-center text-lg text-gray-500 mb-8">We have </p>

      {/* <div className='w-full h-full flex justify-center items-center'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <RevealOnScroll>
            <Card
              title='Immortal Insights'
              description='Profound insights from the depths of history using our advanced search engines and cybersecurity expertise.'
              imageSrc='https://img.freepik.com/free-vector/search-concept-illustration_114360-156.jpg?w=740&t=st=1708543268~exp=1708543868~hmac=67a35527b002e687df746c8cabb4577158d55559facb00199b3324e6fb232634'
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <Card
              title='Veracity Validation'
              description='Ensure the authenticity and credibility of every narrative with our meticulous data investigation services.'
              imageSrc='https://img.freepik.com/free-vector/code-review-concept-illustration_114360-3973.jpg?w=740&t=st=1708542815~exp=1708543415~hmac=81b333664e4ca974c646c9e26848aff231ae993bc0c1dc770b4ab748e82be460'
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <Card
              title='Narrative Navigation'
              description='Embark on a journey of discovery with our expertly categorized data, making every story accessible and engaging.'
              imageSrc='https://img.freepik.com/free-vector/data-points-concept-illustration_114360-2761.jpg?w=740&t=st=1708542940~exp=1708543540~hmac=570fb636af1e550b188d2117eb73eddfb55f659dbfb1df7ce6585c27b34614c0'
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <Card
              title='Digital Dominion'
              // description='Dominate the digital realm with our comprehensive publishing and search engine optimization services, ensuring widespread availability and visibility.'
              description='Publishing and search engine optimization services, ensuring widespread availability and visibility.'
              imageSrc='https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg?w=740&t=st=1708543168~exp=1708543768~hmac=eecaf985b0e983c1724e1f8bd55eef7e12c36d07dc31a7e4faa93c6d7673b51d'
            />
          </RevealOnScroll>
        </div>
      </div> */}
      <div className='max-w-screen-xl mx-auto px-4 md:py-4 py-10 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <MovementTransition>
          <Card
            title='Gather Information'
            description='Access public/private records, social media, and interview family and friends.'
            imageSrc='https://img.freepik.com/free-photo/back-view-man-planning-hacker-attack-dark-room-man-writing-wall-with-stickers-photographs-red-threads-planning-conspiracy-hacking-concept_74855-24330.jpg?w=996&t=st=1709669948~exp=1709670548~hmac=0f31121683df5672efdffa49e032d39a07c76539ef3b33c84bbdb8856958f8f5'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Research Background'
            description='Explore mentality, beliefs, career, and significant life events.'
            imageSrc='https://img.freepik.com/free-photo/truth-concept-composition-detective-desk_23-2149051321.jpg?w=996&t=st=1709670742~exp=1709671342~hmac=8b5a6f909c1057d14cf8e239f7940016a7e40d843856282cff797628ed561305'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Examine Relationships'
            description='Analyze family ties, friendships, and professional connections.'
            imageSrc='https://img.freepik.com/free-photo/abstract-truth-concept-composition_23-2149051355.jpg?w=996&t=st=1709670746~exp=1709671346~hmac=62ffe32e1fe4ffd70e370a87a28bea0d6efd4b44a6e30b1893bebb82a089c4ac'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Investigate Lineage'
            description='Probe family history, relationships, and ancestral/progeny connections.'
            imageSrc='https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg?w=740&t=st=1708543168~exp=1708543768~hmac=eecaf985b0e983c1724e1f8bd55eef7e12c36d07dc31a7e4faa93c6d7673b51d'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Review Adversities'
            description='Identify struggles, triumphs, and critical life junctures.'
            imageSrc='https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg?w=740&t=st=1708543168~exp=1708543768~hmac=eecaf985b0e983c1724e1f8bd55eef7e12c36d07dc31a7e4faa93c6d7673b51d'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Analyze Network'
            description='Assess professional affiliations, collaborations, and industry connections.'
            imageSrc='https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg?w=740&t=st=1708543168~exp=1708543768~hmac=eecaf985b0e983c1724e1f8bd55eef7e12c36d07dc31a7e4faa93c6d7673b51d'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Verify Legacies'
            description='Confirm philanthropic endeavors, legacies, and impact on world.'
            imageSrc='https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg?w=740&t=st=1708543168~exp=1708543768~hmac=eecaf985b0e983c1724e1f8bd55eef7e12c36d07dc31a7e4faa93c6d7673b51d'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Compile Narrative'
            description='Synthesize findings into a comprehensive, respectful memorial honoring their life story.'
            imageSrc='https://img.freepik.com/free-vector/online-world-concept-illustration_114360-1092.jpg?w=740&t=st=1708543168~exp=1708543768~hmac=eecaf985b0e983c1724e1f8bd55eef7e12c36d07dc31a7e4faa93c6d7673b51d'
            link='#'
          />
        </MovementTransition>
      </div>





      <ScaleTransition>
        <Pricing />
      </ScaleTransition>

      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </div>
  );
}
