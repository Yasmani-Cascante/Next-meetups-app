import { useRouter } from "next/router";
import Image from "next/image";
// import Card from "../ui/Card";

const Meetupmeetup = ({ meetup }) => {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/meetup/" + meetup.id);
  }
  function editDetailsHandler() {
    router.push("/edit-meetup/" + meetup.id);
  }

  return (
    // <div className="transition-all shadow-[4px_4px_1px_rgba(0,0,0,0.6)]">
    <div className="card-img-effect relative transition-all hover:bg-gray-50  mb-10 border-2 border-black overflow-hidden">
      {/* <div class="absolute inset-1 bg-gray-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div> */}
      <div className="relative bg-transparent border-3 border-black max-w-sm flex flex-col h-full">
        <div className="relative w-full h-[200px]">
          <Image
            src={meetup.image}
            alt={meetup.title}
            layout="fill"
            // className="transition duration-1000 card-img-animation w-full h-48 object-cover bg-center bg-no-repeat  hover:object-none  cursor-pointer"
            className="transition duration-1000 w-full h-48 object-cover bg-center bg-no-repeat hover:scale-105 "
          />
        </div>
        <div className="p-5 flex flex-col">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight dark:text-white">
            {meetup.title}
          </h5>
          <p className="font-semibold mb-2 mt-3 block">{meetup.address}</p>
          <p className="font-normal text-gray-600 mb-3 dark:text-gray-400">
            {
              meetup.description
              //excerpt
            }
          </p>
        </div>
        <div className="flex mt-auto border-t border-black justify-between">
          <button
            className="w-full transition-all mt-auto font-bold text-sm px-5 py-3 text-center flex justify-center uppercase hover:bg-secondary text-slate-500 hover:text-white cursor-pointer border-r border-black"
            onClick={editDetailsHandler}
          >
            Edit &rarr;
          </button>
          <button
            className="w-full transition-all mt-auto font-bold text-sm px-5 py-3 text-center flex justify-center uppercase hover:bg-secondary text-slate-500 hover:text-white cursor-pointer"
            onClick={showDetailsHandler}
          >
            Read more &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meetupmeetup;
