
import MasterClass from "./MasterClass";
export default function CommnutiyCard(){

    return(
        <div className="rounded-xl shadow-lg pt-10 pb-16 px-6 md:px-16 mx-4 md:mx-32 mb-12 md:mb-28" style={{ backgroundColor: '#1C1F25' }}>
          <MasterClass title={'COMMUNITY'} color="gray" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col justify-center md:mr-8">
              <h1 className="text-white text-3xl md:text-4xl font-semibold">Join the Elite Community in Preserving Legacies</h1>
              <div className="mt-4">
                <p className="text-gray-300">We have a purpose-built community for every member. A place where you can discuss with other members, ask questions, get feedback, and even collaborate with other creators.</p>
                <p className="text-gray-300 mt-2">You can also chat with Oliur directly and get the answers you need.</p>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex items-start gap-2.5">
                <div className="flex flex-row items-center rounded-lg px-4 border border-gray-700 shadow-lg shadow-gray-800 mb-6" style={{ backgroundColor: '#202329' }}>
                  <img className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src="https://framerusercontent.com/images/7P9EM8xPuLdZTGsz17FsKYqHrk.jpg" alt="Jese image" />
                  <div className="flex-1 flex flex-col justify-center p-2 md:p-4">
                    <p className="font-semibold text-gray-200">Zara</p>
                    <p className="text-sm text-gray-400">Hey Oliur, how would you go about…</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2.5 md:ml-36">
                <div className="flex flex-row items-center rounded-lg shadow px-4" style={{ backgroundColor: '#202329' }}>
                  <img className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" src="https://framerusercontent.com/images/7P9EM8xPuLdZTGsz17FsKYqHrk.jpg" alt="Jese image" />
                  <div className="flex-1 flex flex-col justify-center p-2 md:p-4">
                    <p className="font-semibold text-gray-200">Zara</p>
                    <p className="text-sm text-gray-400">Hey Oliur, how would you go about…</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
}