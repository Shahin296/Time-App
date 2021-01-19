import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Zoom from '@material-ui/core/Zoom';

function App(){


const date = new Date();
const getTime = date.toLocaleTimeString();

const [time , currentTime]  = useState(getTime);

function updateTime(){

  const updateTime = new Date().toLocaleTimeString();
      currentTime(updateTime)
};


setInterval(updateTime, 1000)

  return (
       <div className="container">
       <Zoom in={true}>
       <h1><AccessTimeIcon className="time"/>{time}</h1>
       </Zoom>
       <Zoom in={true}>
       <Button variant="contained" onClick={updateTime}>Get Time</Button>
       </Zoom>
      
      </div>
      );
}

export default App;
