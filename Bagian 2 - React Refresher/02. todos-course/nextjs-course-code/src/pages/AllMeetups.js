import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYYYOiIQRsOFj7BExp3QJYcEm35UeaTneEmqJiokFFlkIQm8nwaFRSWo&s=10',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHYYYOiIQRsOFj7BExp3QJYcEm35UeaTneEmqJiokFFlkIQm8nwaFRSWo&s=10',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    )
}

export default AllMeetupsPage;