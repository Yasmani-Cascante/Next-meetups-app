import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetups }) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative bg-white">
        {meetups.map((meetup) => (
            <MeetupItem key={meetup.id} meetup={meetup} />
        ))}
      </div>
    </div>
  );
};

export default MeetupList;
