import MeetupList from '@/components/meetups/MeetupList';

const MEETUPS = [
    {
        id: 'm1',
        title: 'My First Meetup',
        image: 'https://tse3.mm.bing.net/th?id=OIP.ESoS0_MqVlu3zmvK67lqKQHaE7&pid=Api&P=0&h=220',
        address: 'chink pokli 234 555, 5',
        description: 'Jani gaga ',
    },
    {
        id: 'm2',
        title: 'My 33 Meetup',
        image: 'https://tse3.mm.bing.net/th?id=OIP.ESoS0_MqVlu3zmvK67lqKQHaE7&pid=Api&P=0&h=220',
        address: 'chink pokli 234 555, 5',
        description: 'Jani 33 gaga ',
    },
    
    {
        id: 'm3',
        title: 'My 2 Meetup',
        image: 'https://tse3.mm.bing.net/th?id=OIP.ESoS0_MqVlu3zmvK67lqKQHaE7&pid=Api&P=0&h=220',
        address: 'chink pokli 234 555, 5',
        description: 'Jani 2 gaga ',
    },
    {
        id: 'm4',
        title: 'My First Meetup',
        image: 'https://tse3.mm.bing.net/th?id=OIP.ESoS0_MqVlu3zmvK67lqKQHaE7&pid=Api&P=0&h=220',
        address: 'chink pokli 234 555, 5',
        description: 'Jani gaga ',
    },
    
    {
        id: 'm1',
        title: 'My foue Meetup',
        image: 'https://tse3.mm.bing.net/th?id=OIP.ESoS0_MqVlu3zmvK67lqKQHaE7&pid=Api&P=0&h=220',
        address: 'chink pokli 234 555, 5',
        description: 'Jani foue gaga ',
    },
    {
        id: 'm5',
        title: 'My five Meetup',
        image: 'https://tse3.mm.bing.net/th?id=OIP.ESoS0_MqVlu3zmvK67lqKQHaE7&pid=Api&P=0&h=220',
        address: 'chink pokli 234 555, 5',
        description: 'Jani five gaga ',
    },
    {
        id: 'm6',
        title: 'My Six Meetup',
        image: 'https://tse3.mm.bing.net/th?id=OIP.ESoS0_MqVlu3zmvK67lqKQHaE7&pid=Api&P=0&h=220',
        address: 'chink pokli 234 555, 5',
        description: 'Jani six gaga ',
    },
]

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

// use this when there is static data
export async function getStaticProps() {
    return {
        props: {
            meetups: MEETUPS
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