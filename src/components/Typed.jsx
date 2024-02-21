import { ReactTyped } from "react-typed";
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const MyComponent = () => (
  <>

   <ReactTyped
  backSpeed={50}
  onBegin={function noRefCheck(){}}
  onComplete={function noRefCheck(){}}
  onDestroy={function noRefCheck(){}}
  onLastStringBackspaced={function noRefCheck(){}}
  onReset={function noRefCheck(){}}
  onStart={function noRefCheck(){}}
  onStop={function noRefCheck(){}}
  onStringTyped={function noRefCheck(){}}
  onTypingPaused={function noRefCheck(){}}
  onTypingResumed={function noRefCheck(){}}
  strings={[
    'Frontend Developer',
    'UI/UX Designer',
    'Software Developer',
  ]}
  typeSpeed={50}
  typedRef={function noRefCheck(){}}
  style={{color:"#C61036"}}
/>

 
  
 
  </>
);
export default MyComponent;