import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Example({ meetupTitle, actionTrigger }) {
  return (
    <div className="w-full max-w-md">
      <Popover>
        {({ close }) => (
          <>
            <Popover.Button
              className={`
                ${close ? "" : "text-opacity-90"}
                w-full flex text-left mt-10 items-center pl-0 justify-start cursor-pointer md:w-40 py-2 bg-transparent border-b-2 border-primary text-primary text-lg font-semibold transition-all hover:bg-secondary hover:text-white hover:pl-3`}
            >
              <span>Delete</span>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-0 z-10 w-screen max-w-sm px-4 mt-3 sm:px-0 lg:max-w-xl">
                <div className="overflow-hidden border-2 border-black shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                  <h2 className="text-center py-3 border-b border-black font-bold text-red-500 uppercase flex items-end justify-center">
                    Attention!
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="inline-block h-6 w-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </h2>

                  <p className="text-center text-md flex items-end justify-center p-7">
                    <span className=" font-semibold text-lg mr-1">
                      {meetupTitle}
                    </span>{" "}
                    is goin to be deleted!
                  </p>

                  <div className="p-4 flex border-t">
                    <Popover.Button className="transition-all sm:mt-0 flex items-center justify-center px-4 py-2 border-black border-2 text-sm font-semibold text-black uppercase hover:bg-gray-700 hover:text-white">
                      Cancel
                    </Popover.Button>
                    <button
                      className="ml-auto transition-all mt-5 sm:mt-0 flex items-center justify-center px-4 py-2 border-black border-2 text-sm font-semibold uppercase text-red-500 hover:bg-gray-700 hover:text-white"
                      onClick={() => {
                        close();
                        actionTrigger();
                      }}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
