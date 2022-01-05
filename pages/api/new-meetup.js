import { MongoClient } from "mongodb";

// api/new-meetup
// POST request only
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const client = await MongoClient.connect(
        "mongodb+srv://admin:Password123@cluster0.ch1cu.mongodb.net/meetupsDB?retryWrites=true&w=majority"
      );
      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      client.close();
        res.status(201).json({ message: "Meetup inserted!" });
    } catch (err) {
      res.status(500).send({ error: "failed to add the meetup!" });
    }
  }
}

export default handler;
