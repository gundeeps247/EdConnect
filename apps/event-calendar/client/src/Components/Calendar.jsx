import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import AddEventModal from './AddEventModal';
import axios from "axios";
import moment from "moment";
function Calendar() {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);  
    const calendarRef = useRef(null);

    const onEventAdded = (event) => {
        const calendarApi = calendarRef.current?.getApi();
        if (calendarApi) {
            calendarApi.addEvent({
                start: moment(event.start).toDate(),
                end: moment(event.end).toDate(),
                title: event.title,
            });
        }
    };

    async function handleEventAdded(data) {
        try {
            console.log("in event add")
            await axios.post("https://event-calender-82t5.onrender.com/api/calendar/create-event", data.event);
        } catch (error) {
            console.error('Error adding event:', error);
            // Handle error here
        }
    }

    async function handleDatesSet(dateInfo) {
        try {
            const response = await axios.get("https://event-calender-82t5.onrender.com/api/calendar/get-events", {
                params: {
                    starts: moment(dateInfo.start).toISOString(),
                    ends: moment(dateInfo.end).toISOString()
                }
            });
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
            // Handle error here
        }
    }

    return (
        <section>
            <button onClick={() => setModalOpen(true)}>Add Event</button>
            <div style={{ position: "relative", zIndex: 0 }}>
                <FullCalendar
                    ref={calendarRef}
                    events={events}
                    plugins={[dayGridPlugin]}
                    initialView='dayGridMonth'
                    eventAdd={handleEventAdded}
                    datesSet={handleDatesSet}
                />
            </div>
            <AddEventModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onEventAdded={(event) => onEventAdded(event)}
            />
        </section>
    );
}

export default Calendar;
