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



export default function App() {
  return (
    <div style={{ background: '#0f1114' }}>
      <Hero />
      <div className="my-10 sm:my-25 md:mb-25">
        <h1 className='max-w-2xl mt-10 sm:mt-20 mb-5 mx-auto text-2xl font-extrabold tracking-tight text-center text-blue-600 xl:text-4xl dark:text-black'>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
            Short on time?
          </span>
        </h1>
        <p className="text-center text-lg text-gray-500 mb-8">Enter your email to schedule a 10-minute meeting to get it done.</p>
        <div className="flex justify-center">
          <input type="email" name="email" placeholder="Enter your email" className="w-full max-w-md px-4 py-2 leading-tight text-gray-700 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:border-blue-500" required />
          <button type="submit" className="ml-2 px-4 py-2 text-white font-bold bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Get it done</button>
        </div>
      </div>




      <RevealOnScroll>
        <Section />
      </RevealOnScroll>



      <Timeline />

      <MasterClass title='TechTaleForge' color="gray" />
      <h1 className='max-w-2xl my-5 m-auto text-4xl font-extrabold tracking-tight justify-center text-center text-blue-600 xl:text-6xl dark:text-black sm:flex sm:items-center'>
        <span className="bg-clip-text text-transparent text-center bg-gradient-to-r from-white to-gray-100">
          What to expect
        </span>
      </h1>
      <p className="justify-center text-center text-lg text-gray-500 mb-8">We have </p>

      <div className='max-w-screen-xl mb-20 mx-auto px-4 md:py-4 py-10 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <MovementTransition>
          <Card
            title='Gather Information'
            description='Access public/private records, social media, and interview family and friends.'
            imageSrc='https://i.postimg.cc/9Mb6QBNB/IMG-20240306-203117-361-transformed-jpeg.jpg'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Research Background'
            description='Explore mentality, beliefs, career, and significant life events.'
            imageSrc='https://as2.ftcdn.net/v2/jpg/02/82/73/97/1000_F_282739755_TI9j2FVXnxfFFAASqpU58HXE04vaZuAt.jpg'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Examine Relationships'
            description='Analyze family ties, friendships, and professional connections.'
            imageSrc='https://i.postimg.cc/Lsg1tHzy/t-Oqm-TBW4uiv-Fg-Gd-T9l-ZRS-transformed.jpg'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Investigate Lineage'
            description='Probe family history, relationships, and ancestral/progeny connections.'
            imageSrc='https://as1.ftcdn.net/v2/jpg/00/10/76/40/1000_F_10764007_L6YSkXqDwk9oQ7CgqNnBciIQkL1vC8CN.jpg'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Review Adversities'
            description='Identify struggles, triumphs, and critical life junctures.'
            imageSrc='https://as2.ftcdn.net/v2/jpg/05/00/14/05/1000_F_500140571_gdOTe5cuAKVVpy3F3Ma0LLnBeylDDoos.jpg'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Analyze Network'
            description='Assess professional affiliations, collaborations, and industry connections.'
            imageSrc='https://i.postimg.cc/C5KWBf3p/IMG-20240306-203121-589-transformed-jpeg.jpg'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Verify Legacies'
            description='Confirm philanthropic endeavors, legacies, and impact on world.'
            imageSrc='https://img.freepik.com/free-photo/handwritten-formulas-old-paper-ink-smudges-generative-ai_188544-53821.jpg?w=1060&t=st=1709745255~exp=1709745855~hmac=ce06558dcb9c2c220d67d01cb286cfee0d41aad88e3f2416615b74e3e8e01277'
            link='#'
          />
        </MovementTransition>
        <MovementTransition>
          <Card
            title='Compile Narrative'
            description='Synthesize findings into a comprehensive, respectful memorial honoring their life story.'
            imageSrc='https://i.postimg.cc/rp753dVX/d-L9-OVHUg-VBdh9-HTq-Z2rnf-transformed.jpg'
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
