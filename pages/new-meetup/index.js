import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import Head from 'next/head';
import { useRouter } from 'next/router';

function NewMeetup() {
    const router = useRouter();
    async function addMeetupHandler(enterdData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enterdData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        router.push('/')

    }
    return (
        <>
            <Head>
                <title>
                    New Meetup
                </title>
                <meta name='description' content='The new meetup description'></meta>
            </Head> 
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetup;