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
                    <h3 className="text-xl font-medium text-gray-300 mb-4">Up your video quality</h3>
                    <p className="text-base text-gray-400">If you feel like your video quality isn't up to scratch, this course will help you with that. You'll learn some key rules for getting the best and highest quality looking video.</p>
                </div>
                <div className="flex flex-col justify-start pr-12 text-base">
                    <h3 className="text-xl font-medium text-gray-300 mb-4">Make serious money</h3>
                    <p className="text-base text-gray-400">Whether you want to make some extra side income or want to make hundreds of thousands, even millions, I share everything about how to make money from video.</p>
                </div>
                <div className="flex flex-col justify-start pr-12 text-base">
                    <h3 className="text-xl font-medium text-gray-300 mb-4">Status and recognition</h3>
                    <p className="text-base text-gray-400">There's no doubt that building a brand also builds status and respect. Professional quality video can help you get the recognition, respect and status you deserve.</p>
                </div>
            </div>
        </>
    );
}