
import MeetupList from '@/components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

function HomePage(props) {
    return (
        <>
        <Head>
            <title>
                Next Meetup
            </title>
            <meta name='description' content='This is the description'></meta>
        </Head>
        <MeetupList meetups={props.meetups} />
        </>
    )
}

// use this when there is static data
export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://aliakram:aliakram@cluster0.enjdmnn.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');

        const db = client.db();

        const meetupsCollection = db.collection('meetups');
        const meetups = await meetupsCollection.find().toArray();

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