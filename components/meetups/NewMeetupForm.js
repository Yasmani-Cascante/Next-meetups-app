import { useRef } from "react";
import { useState } from "react";

const NewMeetupForm = ({ onAddMeetup }) => {
  
  const [imageUrl, setImageUrl] = useState('');
  const [desableImageInput, setdesableImageInput] = useState(false);
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageUrl,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };
    
    onAddMeetup(meetupData);
  }

  function CopyPaste() {
    imageUrl.length > 0
      ? setImageUrl("")
      : setImageUrl(
          "https://cdn.pixabay.com/photo/2021/01/25/22/45/leaves-5949884_960_720.png"
        );
    setdesableImageInput(!desableImageInput);
    console.log("imageUr", imageUrl);
  }


  return (
    <div className="max-w-2xl p-8 sm:p-8 w-screen">
      <p className="text-3xl font-semibold leading-7 text-center uppercase">
        New Meetup
      </p>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="md:flex items-center mt-12">
          <div className="w-full md:w-1/2 flex flex-col">
            <label className="font-semibold leading-none">Title</label>
            <input
              type="text"
              ref={titleInputRef}
              className="text-gray-500 bg-gray-50 p-2 focus:outline-none focus:border-indigo-700 mt-4 border-b-2 border-black"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
            <label className="font-semibold leading-none">Address</label>
            <input
              type="address"
              ref={addressInputRef}
              className="text-gray-500 bg-gray-50 p-2 focus:outline-none focus:border-indigo-700 mt-4 border-b-2 border-black"
            />
          </div>
        </div>
        <div className="w-full flex flex-col mt-4">
          <label className="font-semibold leading-none">Image URL</label>
          <input
            type="text"
            placeholder={imageUrl}
            disabled={desableImageInput}
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            className="text-gray-500 bg-gray-50 p-2 focus:outline-none focus:border-indigo-700 mt-4 border-b-2 border-black"
          />
          <div className="mt-2 text-xs text-gray-400 p-3 border relative">
            <span className="shadow shadow-md border-secondary bg-secondary text-white p-2 mr-3 mb-1 inline-block">
              Image URl
            </span>
            Ex.
            https://cdn.pixabay.com/photo/2021/01/25/22/45/leaves-5949884_960_720.png
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1 mb-1 cursor-pointer absolute right-0 bottom-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={CopyPaste}
            >
              { desableImageInput ? (
                // Reload icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  stroke="#115E59"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              ) : (
                // Copy icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              )}
            </svg>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col mt-8">
            <label className="font-semibold leading-none">Description</label>
            <textarea
              type="text"
              ref={descriptionInputRef}
              className="h-20 bg-gray-50 text-base leading-none text-gray-500 p-3 focus:outline-none focus:border-indigo-700 mt-4 border-b-2 border-black"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="border-2 border-black w-full mt-9 font-semibold text-sm text-white uppercase py-3 px-10 bg-secondary hover:bg-primary"
          >
            Add meetup
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetupForm;
