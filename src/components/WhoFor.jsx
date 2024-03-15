import MasterClass from "./MasterClass";
export default function WhoFor() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <MasterClass title={"IS THIS YOU?"} color="white" />
                <h1 className="text-4xl font-semibold text-white my-5">Who is this for?</h1>
                <p className="text-base text-gray-400">See if you can relate.</p>
            </div>

            <div className="max-w-screen-xl mb-20 mx-auto px-10 md:py-4 py-10 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col justify-start pr-12 text-base">
                    <h3 className="text-xl font-medium text-gray-300 mb-4">Want to preserve a legacy</h3>
                    <p className="text-base text-gray-400">Someone beloved to you passed out and they had a great life story that would change people{"'"}s lives</p>
                </div>
                <div className="flex flex-col justify-start pr-12 text-base">
                    <h3 className="text-xl font-medium text-gray-300 mb-4">You are Creating History</h3>
                    <p className="text-base text-gray-400">You are Changing the world. Empowering the Youth. You are in face of Lots of corruption and people need to have a reliable source to know more about you</p>
                </div>
                <div className="flex flex-col justify-start pr-12 text-base">
                    
                    <h3 className="text-xl font-medium text-gray-300 mb-4">Status and Narrating</h3>
                    <p className="text-base text-gray-400">You are Facing a Hard time narrating a life long story, Lots of Information, Too many sites and experiences. We will do it all for you adn have it in a Narrative</p>
                </div>
            </div>
        </>
    );
}