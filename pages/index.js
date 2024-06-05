
import MeetupList from '@/components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

// use this when there is static data
export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://aliakram:aliakram@cluster0.enjdmnn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');

        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find().toArray();
        console.log('aaa ', meetups)

        client.close()
    return {
        props: {
            meetups: meetups?.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10
    }
}

// use this if your app updates every single second 
// export async function getServerSideProps(context) {
 
//    const req = context.req;
//    const res = context.res;

//    fetch data from API  

//     return {
//         props: {
//             meetups: MEETUPS
//         }
//     }
// }

export default HomePage;