import Hero from "./components/Hero";
import MeetUs from './components/MeetUs';
import WhoFor from './components/WhoFor';
import Section from "./components/Section3";
import BigCardContainer from "./components/blockCard";
import MasterClass from "./components/MasterClass";
import Card from "./components/Card";
import CommnutiyCard from "./components/CommunityCard";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div style={{ background: '#0e0f11' }}>
      <Hero />
      <div className="mt-24 mb-24">
        <MeetUs />
      </div>
      <div className="mt-28 mb-24">
        <BigCardContainer
          header={'NEXT GEN.'}
          title1={'Pushing the Boundaries of Tech'}
          text1={'Stay ahead of the curve with our Product. TechTaleForge We will investigate, Search, Organize, narrate, and Preserve your digital footprint '}
          title2={'Innovative Solutions to keep legacies Alive'}
          text2={'Embrace the future with confidence. Our Next Gen services empower on creating a new history book, having your legacy preserved, No Political Strings to Affect our Narrative'}
          svgVisible={true}
        />
      </div>
      <div className="mt-28 mb-24">
        <WhoFor />
      </div>
      <div className="mt-28 mb-24">
        <BigCardContainer
          header={'LEGACY'}
          title1={'Preserve Your Digital Footprint'}
          text1={'At TechTaleForge, we understand the importance of preserving legacies in the digital age. Our services encompass the meticulous curation and safeguarding of your digital presence, ensuring your impact endures for generations to come.'}
          svgVisible={false}
        />
      </div>
      <div className="mt-28 mb-24">
          <Section />
      </div>

      <MasterClass title='MODULAR' color="gray" />
      <h1 className='max-w-2xl my-5 m-auto text-3xl font-bold tracking-tight justify-center text-center text-blue-600 xl:text-5xl dark:text-black sm:flex sm:items-center'>
        <span className="bg-clip-text text-transparent text-center bg-gradient-to-r from-white to-gray-100">
          What to expect
        </span>
      </h1>
      <p className="text-center text-base mt-6 text-gray-500 mb-8 lg:mx-36 md:mx:36 sm:mx-16">We have split the task into a number of modules.</p>

      <div className="max-w-screen-xl mb-20 mx-auto px-1 md:py-4 py-10 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-6">
        < >
          <Card
            title='Gather Information'
            description='Access public/private records, social media, and interview family and friends.'
            imageSrc='https://i.postimg.cc/9Mb6QBNB/IMG-20240306-203117-361-transformed-jpeg.jpg'
            link='#'
          />
        </ >
        < >
          <Card
            title='Research Background'
            description='Explore mentality, beliefs, career, and significant life events.'
            imageSrc='https://as2.ftcdn.net/v2/jpg/02/82/73/97/1000_F_282739755_TI9j2FVXnxfFFAASqpU58HXE04vaZuAt.jpg'
            link='#'
          />
        </ >
        < >
          <Card
            title='Examine Relationships'
            description='Analyze family ties, friendships, and professional connections.'
            imageSrc='https://i.postimg.cc/Lsg1tHzy/t-Oqm-TBW4uiv-Fg-Gd-T9l-ZRS-transformed.jpg'
            link='#'
          />
        </ >
        < >
          <Card
            title='Investigate Lineage'
            description='Probe family history, relationships, and ancestral/progeny connections.'
            imageSrc='https://as1.ftcdn.net/v2/jpg/00/10/76/40/1000_F_10764007_L6YSkXqDwk9oQ7CgqNnBciIQkL1vC8CN.jpg'
            link='#'
          />
        </ >
        < >
          <Card
            title='Review Adversities'
            description='Identify struggles, triumphs, and critical life junctures.'
            imageSrc='https://as2.ftcdn.net/v2/jpg/05/00/14/05/1000_F_500140571_gdOTe5cuAKVVpy3F3Ma0LLnBeylDDoos.jpg'
            link='#'
          />
        </ >
        < >
          <Card
            title='Analyze Network'
            description='Assess professional affiliations, collaborations, and industry connections.'
            imageSrc='https://i.postimg.cc/C5KWBf3p/IMG-20240306-203121-589-transformed-jpeg.jpg'
            link='#'
          />
        </ >
        < >
          <Card
            title='Verify Legacies'
            description='Confirm philanthropic endeavors, legacies, and impact on world.'
            imageSrc='https://img.freepik.com/free-photo/handwritten-formulas-old-paper-ink-smudges-generative-ai_188544-53821.jpg?w=1060&t=st=1709745255~exp=1709745855~hmac=ce06558dcb9c2c220d67d01cb286cfee0d41aad88e3f2416615b74e3e8e01277'
            link='#'
          />
        </ >
        < >
          <Card
            title='Compile Narrative'
            description='Synthesize findings into a comprehensive, respectful memorial honoring their life story.'
            imageSrc='https://i.postimg.cc/rp753dVX/d-L9-OVHUg-VBdh9-HTq-Z2rnf-transformed.jpg'
            link='#'
          />
        </ >
      </div>

      <CommnutiyCard />

      <Pricing />

        <Footer />
    </div>
  );
}
