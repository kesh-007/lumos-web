import { events } from './data/event'
import { exhibits } from './data/exhibits';
import { workshop } from './data/workshop';
import { registration } from './data/registration';
import { competitions } from './data/competitions';
import { matrix } from './data/matrix';


import './App.css';
import EventCard from './Components/EventCard';
import ExhibitCard from './Components/ExhibitCard';
import Workshop from './Components/Workshop';
import Registration from './Components/registration';
import CompetitionCard from './Components/CompetitionCard';
import RegistrationMatrix from './Components/RegistrationMatrix';

import video from './anime.mp4';
import background from './background.jpeg';
import Footer from './Components/Footer';

function App() {
  return (
    <div id="container">
      <div id="bg-vid" style={style.video_wrapper}>
        <video playsInline autoPlay muted loop poster={background} style={style.video}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={style.header}>
        <h4 style={style.lumos} className='absolute w-[100vw] text-center lg:left-[1em] lg:w-fit'>LUMOS</h4>
        <h5 style={{ ...style.lumos, ...style.cursive }} className='absolute w-[100vw] lg:left-[5em] top-[3.5em] lg:w-fit'>presents</h5>
        <div className="absolute top-[10em]" style={style.title}>
          <div>
            <h1 style={style.nuku}>HIKARI <span style={style.red}>NO</span> MATSURI</h1>
            <h2 style={style.rage} className='lg:absolute w-screen lg:w-fit lg:left-[50%] text-3xl lg:text-4xl xl:text-5xl'>F e s t i v a l &nbsp; o f &nbsp; l i g h t s</h2>
          </div>
          <div className='lg:absolute top-[14em]'>
            <h2 style={style.text} className=' w-screen top-[13em] text-md lg:text-lg xl:text-2xl'>An exclusive Japanese x Anime event</h2>
            <p style={style.text} id="demo" className=' w-screen top-[15em] text-md lg:text-lg xl:text-2xl'>8th and 9th September</p>
            <br></br>
            <div className='w-screen h-8  items-center top-[20em]'><a href="#reg" className='h-fit w-fit'><button className='bg-[#FF0000] hover:bg-red-500 text-white font-bold py-2 px-4 rounded justify-center'>Register Now</button></a></div>
          </div>
        </div>

      </div>

      <div className="p-5 lg:p-20 bg-black text-white overflow-hidden">

        <p id="events" className='text-6xl max-md:text-center max-md:text-4xl p-[2rem] mt-2'>EVENTS</p>
        <EventCard data={events} />
        <br></br>
        <p id="exhibits" className='text-6xl max-md:text-center max-md:text-4xl p-[2rem] mt-8'>Exhibits</p>
        <ExhibitCard exhibits={exhibits} />
        <br></br>
        <p id="workshops" className='text-6xl max-md:text-center max-md:text-4xl p-[2rem] mt-8'>WORKSHOPS</p>
        <Workshop workshop={workshop} />
        <br></br>
        <p id="reg" className='text-6xl max-md:text-center max-md:text-4xl pl-[2rem] pt-[2rem] my-4'>Registration</p>
        <RegistrationMatrix matrix={matrix} />
        <div className='poppins-text text-white text-lg p-[2rem] text-center'>All college, school students, CIT students and CIT Alumni are allowed to participate!</div>
        <Registration registrationData={registration} />
        <p id="competitions" className='text-6xl max-md:text-center max-md:text-4xl p-[2rem] mt-8'>Exclusive Participation</p>
        <CompetitionCard competitions={competitions} />
        <br></br>
        <Footer />


      </div>
    </div>
  );
}

const style = {
  "body": {
    "maxWidth": "100%",
    "minHeight": "100vh",
    "overflowX": "hidden"
  },
  "hero": {
    "backgroundImage": "url(\"./images/background.jpeg\")",
    "height": "40vh",
    "width": "100%"
  },
  "lumos": {
    "fontFamily": "RomanWood, serif",
    "color": "white",
    "fontSize": "65px",
    "textAlign": "center",
    // "width": "100vw",
    // "left": "0%",
    "margin": "auto",
  },
  "nuku": {
    "fontFamily": "NukuNuku",
    "color": "white",
    "fontSize": "80px",
    "margin": "0"
  },
  "rage": {
    "fontFamily": "Rage, cursive",
    "color": "white",
    "margin": "0",
    // "fontSize": "32px"
  },
  "cursive": {
    "fontFamily": "'Rouge Script'",
    "color": "white",
    "fontSize": "24px",
    "textAlign": "center",
    // "width": "100vw",
    // "left": "0%",
    "margin": "auto",
  },
  "text": {
    "fontFamily": "'Comfortaa', cursive",
    "color": "#bbb",
    // "fontSize": "30px",
    "marginLeft": "0%"
  },
  "title": {
    "textAlign": "center",
    "width": "100vw",
    "left": "0%",
    "position": "absolute",
    "margin": "auto",
    "display": "inline"
  },
  "red": {
    "color": "#f45"
  },
  "video_wrapper": {
    "position": "relative",
    "margin": "0",
    "padding": "0",
    "width": "100vw",
    "left": "0%",
    "right": "0",
    "top": "5%",
    "height": "100vh",
    "overflow": "hidden",
    "textAlign": "center",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "header": {
    "position": "absolute",
    "top": "0",
    "marginTop": "4%"
  },
  "video": {
    "top": "0",
    "left": "0",
    "objectFit": "cover",
    "height": "100%",
    "width": "100%",
    "filter": "brightness(70%) contrast(100%)"
  },
  "": {
    "boxSizing": "border-box"
  },
  "before": {
    "boxSizing": "border-box"
  },
  "after": {
    "boxSizing": "border-box"
  },
  "html": {
    "maxWidth": "100%",
    "minHeight": "100vh",
    "overflowX": "hidden"
  },
  "container": {
    "padding": "0 2rem 2rem"
  },
  "heading": {
    "fontFamily": "NukuNuku, \"Montserrat\", Arial, sans-serif",
    "fontSize": "4rem",
    "fontWeight": "500",
    "lineHeight": "1.5",
    "textAlign": "center",
    "padding": "3.5rem 0",
    "color": "#fff"
  },
  "heading_span": {
    "display": "block"
  },
  "gallery": {
    "display": "flex",
    "flexWrap": "wrap",
    "margin": "-1rem -1rem"
  },
  "gallery_item": {
    "flex": "1 0 24rem",
    "margin": "1rem",
    "boxShadow": "0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4)",
    "overflow": "hidden"
  },
  "gallery_image": {
    "display": "block",
    "width": "100%",
    "height": "100%",
    "objectFit": "cover",
    "transition": "transform 400ms ease-out"
  },
  "gallery_image_hover": {
    "transform": "scale(1.15)",
    "filter": "contrast(50%) brightness(50%)"
  },
  "@media screen and (min-width: 760px)": {
    "__expression__": "screen and (min-width: 760px)",
    "lumos": {
      "fontSize": "70px",
      "marginLeft": "50%"
    },
    "cursive": {
      "fontSize": "48px",
      "marginLeft": "70%"
    },
    "rage": {
      "marginLeft": "30%"
    },
    "text": {
      "marginLeft": "30%"
    }
  }
};


export default App;
