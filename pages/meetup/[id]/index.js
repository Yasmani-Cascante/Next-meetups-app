
import MeetupDetails from "../../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Meta from "../../../components/Meta";
import Link from "next/link";

const Details = ({ meetupData }) => {
    
  return (
    <>
      <Meta title={meetupData.title} description={meetupData.description}/>
      <MeetupDetails data={meetupData} />
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get the dataa
  const client = await MongoClient.connect(
    "mongodb+srv://admin:Password123@cluster0.ch1cu.mongodb.net/meetupsDB?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const allMeetupIDs = await meetupsCollection.find({}, {_id: 1}).toArray();

  // Get the paths we want to pre-render based on posts
  const paths = allMeetupIDs.map((meetup) => ({
    params: { id: meetup._id.toString() },
  }));

  client.close();
  // We'll pre-render only these paths at build time.
  return { paths, fallback: 'blocking' };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the meetup `id`.
  // If the route is like /meetup/1, then params.id is 1
const client = await MongoClient.connect(
    "mongodb+srv://admin:Password123@cluster0.ch1cu.mongodb.net/meetupsDB?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(params.id) });
  client.close();

  // Pass meetup data to the page via props
  return { props: {
     meetupData:  {
      title: selectedMeetup.title,
      address: selectedMeetup.address,
      image: selectedMeetup.image,
      description: selectedMeetup.description,
      id: selectedMeetup._id.toString()
     }
    }};
}

export default Details;
