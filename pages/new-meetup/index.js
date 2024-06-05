import MeetupList from '@/components/meetups/MeetupList';
import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import Link from 'next/link';
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
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetup;