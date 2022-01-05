import Meetupform from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Meta from "../../components/Meta";

const NewsPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    const apiReq = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const apiResp = await apiReq.json();
    if (apiResp.message === "Meetup inserted!") {
      router.push("/");
    } else {
      alert(apiResp.error);
    }
  };

  return (
    <div>
      <Meta title='Add a new Meetup' description='Add your own meetups and create networking opportunities.' />
      <Meetupform onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewsPage;
