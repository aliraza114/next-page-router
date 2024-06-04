import MeetupList from '@/components/meetups/MeetupList';
import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import Link from 'next/link';

function NewMeetup() {
    function addMeetupHandler() {

    }
    return (
        <>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetup;