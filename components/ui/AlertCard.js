
const AlertCard = ({ body , actionTrigger }) => {

  return (
    <div className="transition-all absolute w-screen h-full bg-gray-50/30 left-0 flex items-center justify-center ">
      <div className="bg-gray-900 relative w-[620px]">
        <div className="overflow-hidden border-t-2 border-4 border-white shadow-lg ring-1 ring-black ring-opacity-5">
          <p className="uppercase text-sm text-center py-3 border-b-2 border-black text-white font-semibold">
            Something goes wrong !
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="orange"
              className="inline-block h-6 w-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </p>
          <h2 className="font-medium text-white text-center text-xl p-5">
            {body}
          </h2>
          <div className="p-4 flex">
            <button
              className="ml-auto transition-all mt-5 sm:mt-0 flex items-center justify-center px-4 py-2 border-black border-2 text-md font-medium uppercase bg-white hover:bg-gray-900 text-black hover:text-primary"
              onClick={() => {
                actionTrigger();
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
