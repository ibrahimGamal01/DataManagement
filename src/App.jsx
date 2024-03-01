import Card from "./components/Card";
import Hero from "./components/Hero";
import Section from "./components/Section3";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import RevealOnScroll from "./components/Transitions/RevealOnScroll";
import ScaleTransition from "./components/Transitions/ScaleTransition";
import MovementTransition from "./components/Transitions/MovementTransition";

import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div style={{ background: 'black' }}> {/* Apply black background color */}
      <Hero />
      <RevealOnScroll>
        <Section />
      </RevealOnScroll>
      {/* <hr className='my-6 border-gray-200 sm:mx-auto' /> */}

      {/* <h1 className='max-w-2xl mb-4 m-auto text-4xl font-extrabold tracking-tight text-center text-blue-600 xl:text-6xl dark:text-black sm:flex sm:items-center'>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Our Plan to provide you with the best
        </span>
      </h1> */}
      <Timeline />

      <div className='w-full max-w-screen-xxl mx-auto p-4 md:py-4 sm:flex sm:items-center sm:justify-between py-10 sm:py-10'>
        <MovementTransition>
          <Card
            title='Immortal Insights'
            description='Uncover profound insights from the depths of history using our advanced search engines and cybersecurity expertise.'
            imageSrc='https://img.freepik.com/free-vector/search-concept-illustration_114360-156.jpg?w=740&t=st=1708543268~exp=1708543868~hmac=67a35527b002e687df746c8cabb4577158d55559facb00199b3324e6fb232634'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Veracity Validation'
            description='Ensure the authenticity and credibility of every narrative with our meticulous data investigation services.'
            imageSrc='https://img.freepik.com/free-vector/code-review-concept-illustration_114360-3973.jpg?w=740&t=st=1708542815~exp=1708543415~hmac=81b333664e4ca974c646c9e26848aff231ae993bc0c1dc770b4ab748e82be460'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Narrative Navigation'
            description='Embark on a journey of discovery with our expertly organized and categorized data, making every story accessible and engaging.'
            imageSrc='https://img.freepik.com/free-vector/data-points-concept-illustration_114360-2761.jpg?w=740&t=st=1708542940~exp=1708543540~hmac=570fb636af1e550b188d2117eb73eddfb55f659dbfb1df7ce6585c27b34614c0'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Digital Dominion'
            description='Dominate the digital realm with our comprehensive publishing and search engine optimization services, ensuring widespread availability and visibility.'
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
