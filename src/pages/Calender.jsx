import React from 'react'
import { ScheduleComponent, WorkWeek, Day, Week, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../assets/dummy';
import { Header } from '../components';
const Calender = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-2 bg-white rounded-3xl'>
      <Header category="App" title="Calender" />
      <ScheduleComponent 
      height="650px"
      eventSettings={{dataSource: scheduleData}}
      >
        <Inject 
        services={[Day, Week, Month, Agenda, WorkWeek, Resize, DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calender;