import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import DiscreteSliderMarks from './DiscreteSlider';
import LinearDeterminate from './ProgressBar';

const steps = [
  {
   
    description: `I have ambitious aims of making a difference.`,
  },
  {
   
    description:
      'My leadership journey has progressed as I anticipated.',
  },
  {
   
    description: `I have spent fewer than 4 years in full time service or ministry.`,
  },
  {
   
    description: `With hard work and determination, I have been able to persevere
    through the ministry challenges that have come my way.`,
  },
  {
   
    description: `My plans are likely to succeed.`,
  },
  {
   
    description: `Im beginning to believe the journey of service will be
    much harder than I anticipated.`,
  },
  {
   
    description: `I question whether I can remain effective in my role long-term.`,
  },
  {
   
    description: `I wonder if Im really making the difference I anticipated making.`,
  },
  {
   
    description: `It feels as though I have hit a wall in my ministry, and Im not sure
    where to go from here.`,
  },
  {
   
    description: `In this season of ministry, I am feeling the disappointment of unmet expectations.`,
  },
  {
   
    description: `If I had the option of changing careers, I would.`,
  },
  {
   
    description: `The problems we are confronting are just too big to make a meaningful difference.`,
  },{
   
    description: `The passion I once had for the ministry I serve has been depleted.`,
  },
  {
   
    description: `As a leader, it is my job to bring about outcomes at my organization.`,
  },
  {
   
    description: `I have a generally pessimistic outlook toward the future of my ministry.`,
  },
  {
   
    description: `It is my job to be faithful; it is God job to bring about outcomes.`,
  },
  {
   
    description: `When I face a challenge, I spend meaningful time praying for guidance.`,
  },
  {
   
    description: `Knowing that Jesus promised trials, I strive to keep the “light and momentary” nature of trials I face in perspective, looking toward a promised future.`,
  },
  {
   
    description: `Though I have faced many challenges, God has been faithful.`,
  },
  {
   
    description: `I have a core group of friends who are working with me in the
    leadership decisions I make.`,
  }
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const [ progress, setProgress] = React.useState(0);  

  const handleNext = () => {
    if (activeStep !== maxSteps - 1) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setProgress(progress+22)
    }
   
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setProgress(progress-22)
  };

  

  return (
    
    <Box sx={{ maxWidth: 400, margin: "50px"}}>
      <Paper
        square
        elevation={0}
        sx={{ 
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            padding :"20px",
            borderRadius: "10px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height:"400px",
            width :"900px",
          bgcolor: 'background.default',
        }}
      >
      <LinearDeterminate progress={progress}  titles = {["IDEALISTIC", "DISILLUSIONED", "CYNICAL", "HOPEFUL"]} />
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2, display: "flex",
            alignItems:"center", justifyContent:"center", fontSize:"20px"}}>
        {steps[activeStep].description}
      </Box>
      <DiscreteSliderMarks onChange= {handleNext}/>

      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
         </Paper>
    </Box>
  );
}
