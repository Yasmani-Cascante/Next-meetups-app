import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

// api/new-meetup
// POST request only
async function handler(req, res) {
  const {
    method,
    body,
    query: { id },
  } = req;

  const client = await MongoClient.connect(
    "mongodb+srv://admin:Password123@cluster0.ch1cu.mongodb.net/meetupsDB?retryWrites=true&w=majority"
  );
  const db = client.db();
  //   const meetupsCollection = db.collection("meetups");

  switch (method) {
    case "PUT":
      try {
       const result = await updateMeetupById(id, {
          title: body.title,
          image: body.image,
          address: body.address,
          description: body.description,
        });
        console.log('result', result);
        
        if(result.modifiedCount > 0) {
            res.status(200).json({msg: 'Meetup updated!'})
        }
        if(result.modifiedCount == 0) {
            res.status(200).json({msg: 'No modification has been entered!'})
        }
      } catch (err) {
        res.status(500).send({ 
            msg: "failed to update the meetup!",
            error: err.message
        });
      } finally {
        await client.close();
      }
      break;
      
      case "DELETE":
        try {
          const result = await deleteMeetupById(id);
          console.log('result', result);

          if(result.deletedCount > 0) {
            res.status(200).json({msg: 'The meetup was deleted'})
        }
        } catch (err) {
          res.status(500).send({ 
            msg: "failed to delete the meetup!",
            error: err.message
        });
        } finally {
          await client.close();
        }
      break

    default:
      break;
  }

  async function updateMeetupById(indexOfMeetup, updateData) {
    const result = await db
      .collection("meetups")
      .updateOne({ _id: ObjectId(indexOfMeetup) }, { $set: updateData });
    return result
  }

  async function deleteMeetupById(indexOfMeetup) {
    const result = await db
    .collection("meetups")
    .deleteOne({ _id: ObjectId(indexOfMeetup) });
    return result
  }
}

export default handler;
