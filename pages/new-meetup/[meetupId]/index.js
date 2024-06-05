import { MeetupDetail } from '@/components/meetups/MeetupDetail';
import { useRouter } from 'next/router';

function MeetupDetails() {
    const router = useRouter();

    router.query.newsId;

    return (
        <MeetupDetail src={'https://tse3.mm.bing.net/th?id=OIP.ESoS0_MqVlu3zmvK67lqKQHaE7&pid=Api&P=0&h=220'} title={'A first meetup'} address='Baker street 124 avenue' description={'a first meetup details'} />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { 
                params: {
                    meetupId: 'm1',
                },
            },
            { 
                params: {
                    meetupId: 'm2',
                }, 
            }
        ]
    }
}

export async function getStaticProps(context) {
    
    const meetupId = context.params.meetupId;

    return {
       props: {
            meetupData: {
                image: '',
                id: '',
                title: '',
                address: '',
                description: '',
            }
       }     
    }
}

export default MeetupDetails;