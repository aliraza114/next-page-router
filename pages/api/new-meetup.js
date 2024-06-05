import { MongoClient } from 'mongodb';

// api/new-meetup 

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = MongoClient.connect('mongodb+srv://aliraza:idy6suxPahx2loIf@cluster0.enjdmnn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');

        const db = (await client).db();

        const meetupsCollection = db.collection('meetups');
        
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup Inserted'});
    }
}

export default handler;