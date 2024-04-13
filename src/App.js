import { useState } from 'react';
import './App.css';
import { Calender } from './calendar/Calender';
import moment from 'moment';

function App() {
  const myEvents = [
    { "Event_Title": 'Finish Work', "Event_Date": moment().format().substring(0,10), "Priority": 1},
    { "Event_Title": 'Read A Book', "Event_Date": moment().format().substring(0,10), "Priority": 2},
    { "Event_Title": 'Play Video Games', "Event_Date": moment().format().substring(0,10), "Priority": 3}
  ];

  const [eventsThisDay, setEventsThisDay] = useState([]);

  function returnEvents(day){
    setEventsThisDay(day.Events);
  }

  return (
    <>
      <div className='mx-auto mt-5'>
        <Calender arrayOfEvents={myEvents} returnEvents={returnEvents}/>
      </div>

      <div className='row mx-auto'>
        <div className='col-6 mx-auto text-center'>
          <h3>Events</h3>
          {
            eventsThisDay.map((item, key) => {
              return (
                <h5 key={key}>{item.Event_Details.Event_Title} | {item.Event_Details.Event_Date}</h5>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
