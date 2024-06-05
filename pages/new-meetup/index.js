import MeetupList from '@/components/meetups/MeetupList';
import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import Link from 'next/link';

function NewMeetup() {
    function addMeetupHandler(enterdData) {

    }
    return (
        <>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default NewMeetup;