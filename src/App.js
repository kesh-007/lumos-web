import {events} from './data/event'
import { exhibits } from './data/exhibits';
import { workshop } from './data/workshop';
import {registration} from './data/registration'
import {competitions} from './data/competitions'


import './App.css';
import EventCard from './Components/EventCard';
import ExhibitCard from './Components/ExhibitCard';
import Workshop from './Components/Workshop';
import Registration from './Components/registration';
import CompetitionCard from './Components/CompetitionCard';

function App() {
  
  return (
    <div className=" bg-black min-h-screen text-white px-[2rem]">
      
      <p className='text-2xl p-[2rem]'>EVENTS</p>
      <EventCard data = {events}/>

      <p className='text-2xl p-[2rem]'>Exhibits</p>
      <ExhibitCard exhibits={exhibits}/>
      
      <p className='text-2xl p-[2rem]'>WORKSHOPS</p>
       <Workshop workshop={workshop}/> 

       <p className='text-2xl p-[2rem]'>Registration</p>
        <Registration registrationData={registration}/>

        <p className='text-2xl p-[2rem]'>competition</p>
        <CompetitionCard competitions={competitions}/>


    </div>
  );
}

export default App;
