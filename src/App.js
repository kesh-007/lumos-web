import { events } from './data/event'
import { exhibits } from './data/exhibits';
import { workshop } from './data/workshop';
import { registration } from './data/registration'
import { competitions } from './data/competitions'


import './App.css';
import EventCard from './Components/EventCard';
import ExhibitCard from './Components/ExhibitCard';
import Workshop from './Components/Workshop';
import Registration from './Components/registration';
import CompetitionCard from './Components/CompetitionCard';

import video from './video.mp4';
import background from './background.jpeg';

function App() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div id="bg-vid" style={style.video_wrapper}>
        <video playsInline autoPlay muted loop poster={background} style={style.video}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={style.header}>
        <h4 style={style.lumos}>LUMOS</h4>
        <h5 style={{ ...style.lumos, ...style.cursive }}>presents</h5>
        <div style={style.title}>
          <h1 style={style.nuku}>HIKARI <span style={style.red}>NO</span> MATSURI</h1>
          <h2 style={style.rage}>F e s t i v a l &nbsp; o f &nbsp; l i g h t s</h2>
          <h2 style={style.text}>An exclusive Japanese x Anime event</h2>
          <p style={style.text} id="demo">8th and 9th September</p>
        </div>

      </div>

      <div className="p-5 lg:p-20 bg-black text-white overflow-hidden">

        <p className='text-6xl p-[2rem]'>EVENTS</p>
        <EventCard data={events} />

        <p className='text-6xl p-[2rem]'>Exhibits</p>
        <ExhibitCard exhibits={exhibits} />

        <p className='text-6xl p-[2rem]'>WORKSHOPS</p>
        <Workshop workshop={workshop} />

        <p className='text-6xl p-[2rem]'>Registration</p>
        <Registration registrationData={registration} />

        <p className='text-6xl p-[2rem]'>competition</p>
        <CompetitionCard competitions={competitions} />


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
    "fontSize": "48px",
    "margin": "auto",
    "marginLeft": "40%",
    "text-align" : "center"
  },
  "nuku": {
    "fontFamily": "NukuNuku",
    "color": "white",
    "fontSize": "70px",
    "margin": "0"
  },
  "rage": {
    "fontFamily": "Rage, cursive",
    "color": "white",
    "margin": "0",
    "fontSize": "32px"
  },
  "cursive": {
    "fontFamily": "'Rouge Script'",
    "color": "white",
    "fontSize": "24px",
    "marginLeft": "60%"
  },
  "text": {
    "fontFamily": "'Comfortaa', cursive",
    "color": "#bbb",
    "fontSize": "20px",
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
    "width": "100%",
    "left": "2%",
    "top": "5%",
    "height": "70vh",
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
    "filter": "brightness(40%) contrast(80%)"
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
