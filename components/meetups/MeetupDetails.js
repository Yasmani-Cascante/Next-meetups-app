import Link from "next/link";
import router from "next/router";
import DeleteMeetupPop from "./DeleteMeetupPop";
import AlertMsg from "../ui/AlertCard"
import { useState, useEffect } from "react";

const MeetupDetails = ({ data }) => {
  const [alert, setAlert] = useState(null)

const deleteHandler = async () => {
  try {
    const response = await fetch(`/api/meetups/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
    )}

  router.push("/");

  } catch (err) {
    setAlert(err.message)
  } 
}

function trigger () {
  setAlert(null) 
}

  return (
    <div className="flex flex-col items-center md:flex-row">
      { alert && <AlertMsg body={alert} actionTrigger={trigger} /> } 
      <div className="h-80 w-full md:w-1/4">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:ml-5 md:w-3/4 p-5">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        <address className="my-3">{data.address}</address>
        <p className="text-gray-600">
          {data.description}
        </p>
        <div className="flex">
        <DeleteMeetupPop 
        meetupTitle={data.title}
        actionTrigger={deleteHandler}
        />

        <Link href="/">
          <span className="flex mt-10 items-center justify-end ml-auto cursor-pointer w-40 py-2 bg-transparent border-b-2 border-primary text-primary text-lg font-semibold transition-all hover:bg-secondary hover:text-white hover:pr-3 focus:border-4 focus:border-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Go Back
          </span>
        </Link>
        </div>
        
      </div>
    </div>
  );
};

export default MeetupDetails;
