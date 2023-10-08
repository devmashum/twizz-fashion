
import { useLoaderData } from 'react-router-dom';
import UpcomingEvent from './UpcomingEvent';

const UpcomingEvents = () => {
    const events = useLoaderData();

    return (
        <div className='grid lg:grid-cols-3 mt-5  justify-center mx-auto'>
            {
                events.map(event => <UpcomingEvent key={event.id} event={event}></UpcomingEvent>)
            }
            {
                events.map(event => <UpcomingEvent key={event.id} event={event}></UpcomingEvent>)
            }
        </div>
    );
};

export default UpcomingEvents;