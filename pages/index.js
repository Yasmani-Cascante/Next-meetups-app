import MeetupList from "../components/meetups/MeetupList";
import HeroBanner from "../components/layout/HeroBanner";
import { MongoClient } from "mongodb";
import Meta from "../components/Meta";

const HomePage = ({ meetups }) => {
  return (
    <div>
      <Meta title='Meetups' description='A react app to manage your meetups list' />
      <HeroBanner />
      <MeetupList meetups={meetups} />
    </div>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:Password123@cluster0.ch1cu.mongodb.net/meetupsDB?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
        id: meetup._id.toString()
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
