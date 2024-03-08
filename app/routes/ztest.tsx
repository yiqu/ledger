import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { green, red } from "@mui/material/colors";
import styles from "~/styles/index.css?url";
import { useState } from "react";
import gears from '../../public/assets/gifs/gears.svg';
import blocksGrey from '../../public/assets/gifs/blocks-grey.svg';
import blocksBlueGreen from '../../public/assets/gifs/blocks-blue-green.svg';
import blocksGreen from '../../public/assets/gifs/blocks-green.svg';
import blocksBlueLightBlueGreen from '../../public/assets/gifs/blocks-blue-lightblue-green.svg';
import circleBlueGreen from '../../public/assets/gifs/circle-blue-green.svg';
import blocks from '../../public/assets/gifs/blocks.svg';
import hourglassGreen from '../../public/assets/gifs/hourglass-green.svg';
import blocksgDrive from '../../public/assets/gifs/blocks-g-drive.svg';
import type { LinkDescriptor } from "@remix-run/node";

export const faviconDescriptor: LinkDescriptor = {
  rel: "icon",
  href: "/favicon4.ico",
  type: "image/png",
};

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    faviconDescriptor
  ];
}

function Ztest() {
  const [progress, setProgress] = useState<number>(10);

  const handleProgress = () => {
    setProgress((curr) => {
      if (curr >= 100) return 0;
      return curr + 5;
    });
  };

  const handleChangeFavIcon = () => {
  };


  return (
    <Stack spacing={ 2 }>
      <Stack direction="column">
        <Button variant="outlined" onClick={ handleChangeFavIcon }>
          Change favicon 1
        </Button>
        <Button variant="outlined">
          Change favicon 2
        </Button>
        <Button variant="outlined">
          Change favicon 3
        </Button>
      </Stack>



      Test page aa. { progress }

      <Box sx={ { width: '100%' } }>
        <LinearProgressSuccessAnimated value={ progress } variant="determinate" color="success" />
      </Box>
      <Box sx={ { width: '100%' } }>
        <LinearProgressWarningAnimated value={ progress } variant="determinate" color="warning" />
      </Box>
      <Box sx={ { width: '100%' } }>
        <LinearProgressErrorAnimated value={ progress } variant="determinate" color="error" />
      </Box>

      <Button onClick={ handleProgress }>Increase</Button>
      <Box sx={ { width: '100%' } }>
        <LinearProgress value={ 10 } variant="determinate" color="error" sx={ { height: 14 } } />
      </Box>
      <Box sx={ { width: '100%' } }>
        <LinearProgressDark value={ 10 } variant="determinate" color="error" />
      </Box>

      <Box sx={ { width: '100%' } }>
        <LinearProgress value={ 10 } variant="determinate" color="inherit" sx={ { height: 14 } } />
      </Box>
      <Box sx={ { width: '100%' } }>
        <LinearProgressDark value={ 10 } variant="determinate" color="inherit" />
      </Box>

      <Box sx={ { width: '100%' } }>
        <LinearProgress value={ 10 } variant="determinate" color="warning" sx={ { height: 14 } } />
      </Box>
      <Box sx={ { width: '100%' } }>
        <LinearProgressDark value={ 10 } variant="determinate" color="warning" />
      </Box>

      <Box>
        <img src={ gears } style={ { height: '12rem', marginRight: '10px' } } alt="logo" />
      </Box>
      <Box>
        <img src={ blocks } style={ { height: '4rem', marginRight: '10px' } } alt="logo" />
      </Box>
      <Box>
        <img src={ blocksGrey } style={ { height: '12rem', marginRight: '10px' } } alt="logo" />
      </Box>
      <Box>
        <img src={ blocksGreen } style={ { height: '12rem', marginRight: '10px' } } alt="logo" />
      </Box>
      <Box>
        <img src={ hourglassGreen } style={ { height: '12rem', marginRight: '10px' } } alt="logo" />
      </Box>
      <Box>
        <img src={ circleBlueGreen } style={ { height: '2rem', marginRight: '10px' } } alt="logo" />
      </Box>
      <Box>
        <img src={ blocksBlueLightBlueGreen } style={ { height: '12rem', marginRight: '10px' } } alt="logo" />
      </Box>
      <Box>
        <img src={ blocksBlueGreen } style={ { height: '2rem', marginRight: '10px' } } alt="logo" />
      </Box>
      <Box>
        <img src={ blocksgDrive } style={ { height: '2rem', marginRight: '10px' } } alt="logo" />
      </Box>
    </Stack>
  );
}

export default Ztest;


const LinearProgressSuccessAnimated = styled(LinearProgress)(({ theme }) => ({
  height: 8,

  '& .MuiLinearProgress-bar': {
    backgroundColor: green[700],
    backgroundImage: `repeating-linear-gradient(
      -45deg, 
      transparent, 
      transparent 0.6rem,
      #66bb6a 0.6rem,
      #66bb6a 1rem
    )`,
    backgroundSize: `200% 200%`,
    animation: `moveright 100s linear infinite`,
    borderRadius: 4,
  },
}));

const LinearProgressWarningAnimated = styled(LinearProgress)(({ theme }) => ({
  height: 8,

  '& .MuiLinearProgress-bar': {
    backgroundColor: '#dc6c09',
    backgroundImage: `repeating-linear-gradient(
      -45deg, 
      transparent, 
      transparent 0.6rem,
      #f9ae6c 0.6rem,
      #f9ae6c 1rem
    )`,
    backgroundSize: `200% 200%`,
    animation: `moveright 100s linear infinite`,
    borderRadius: 4,
  },
}));

const LinearProgressErrorAnimated = styled(LinearProgress)(({ theme }) => ({
  height: 8,

  '& .MuiLinearProgress-bar': {
    backgroundColor: red[700],
    backgroundImage: `repeating-linear-gradient(
      -45deg, 
      transparent, 
      transparent 0.6rem,
      #e48181 0.6rem,
      #e48181 1rem
    )`,
    backgroundSize: `200% 200%`,
    animation: `moveright 100s linear infinite`,
    borderRadius: 4,
  },
}));

const LinearProgressDark = styled(LinearProgress)(({ theme }) => ({
  height: 14,
  "& .MuiLinearProgress-bar": {
  },
  "& .MuiLinearProgress-barColorError": {
    backgroundColor: red[900] // bar color
  },

  "& .MuiLinearProgress-barColorWarning": {
    backgroundColor: '#dc6c09' // bar color
  },

}));



