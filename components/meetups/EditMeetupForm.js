import { useState } from "react";
import Loader from "../ui/LoadingBtns";
import MeetupItemEditable from "./MeetupItemEditable";

const EditMeetupForm = ({ previewData, onEditMeetup, loadBtn }) => {
  const [desableImageInput, setdesableImageInput] = useState(false);
  const [inputMarker, setInputMarker] = useState('');

  const [imageUrl, setImageUrl] = useState(previewData.image);
  const [titleInput, setTitleInput] = useState(previewData.title);
  const [addressInput, setAddressInput] = useState(previewData.address);
  const [descriptionInput, setDescriptionInput] = useState(
    previewData.description
  );

  function handleSubmit(e) {
    e.preventDefault();

    const meetupData = {
      title: titleInput,
      image: imageUrl,
      address: addressInput,
      description: descriptionInput,
    };

    onEditMeetup(meetupData);
  }

  function CopyPaste() {
    imageUrl.length > 0
      ? setImageUrl("")
      : setImageUrl(
          "https://cdn.pixabay.com/photo/2021/01/25/22/45/leaves-5949884_960_720.png"
        );
    setdesableImageInput(!desableImageInput);
  }

  return (
    <div className="w-full">
      <p className="text-3xl mb-10 font-semibold leading-7 text-center uppercase">
        New Meetup
      </p>
      <div className="flex align-center justify-around flex-wrap md:flex-nowrap">
        <MeetupItemEditable
          title={titleInput}
          image={imageUrl}
          description={descriptionInput}
          address={addressInput}
          marker={inputMarker}
        />
        <form action="" method="post" onSubmit={handleSubmit} className="ml-10">
          <div className="md:flex items-center mt-12">
            <div className="w-full md:w-1/2 flex flex-col">
              <label 
              className="font-semibold leading-none"
              htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                placeholder={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                className="text-gray-500 bg-gray-50 p-2 focus:outline-none focus:border-indigo-700 mt-4 border-b-2 border-black"
                onClick={(e) => setInputMarker(e.target.id)}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label 
              className="font-semibold leading-none"
              htmlFor="address"
              >
                Address
                </label>
              <input
                type="address"
                id="address"
                value={addressInput}
                placeholder={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                className="text-gray-500 bg-gray-50 p-2 focus:outline-none focus:border-indigo-700 mt-4 border-b-2 border-black"
                onClick={(e) => setInputMarker(e.target.id)}
              />
            </div>
          </div>
          <div className="w-full flex flex-col mt-4">
            <label 
            className="font-semibold leading-none"
            htmlFor="image"
            >
              Image URL
              </label>
            <input
              type="text"
              id="image"
              placeholder={imageUrl}
              disabled={desableImageInput}
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="text-gray-500 bg-gray-50 p-2 focus:outline-none focus:border-indigo-700 mt-4 border-b-2 border-black"
              onClick={(e) => setInputMarker(e.target.id)}  
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
                {desableImageInput ? (
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
              <label 
              className="font-semibold leading-none"
              htmlFor="description"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                value={descriptionInput}
                placeholder={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
                className="h-20 bg-gray-50 text-base leading-none text-gray-500 p-3 focus:outline-none focus:border-indigo-700 mt-4 border-b-2 border-black"
                onClick={(e) => setInputMarker(e.target.id)}
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="h-[60px] border-2 border-black w-full mt-9 font-semibold text-sm text-white uppercase py-3 px-10 bg-secondary hover:bg-primary"
              disabled={loadBtn}
            >
              {loadBtn ? <Loader /> : <span>Edit meetup</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMeetupForm;
