import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const Div = styled.div`

`
const Wrapper = ({children}) => {
    return (
    
      <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut"
      }}
  
      >
        <Div id='no-drag'>
        {children}
        </Div>
      </motion.div>
 
    );
};

export default Wrapper;

