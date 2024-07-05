import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';

function Confirmation({ value, nextStep, prevStep }) {

  const motionSettings = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  };

  return (
    <div className='flex flex-col justify-center items-center px-5 py-10'>
      <div className='text-2xl font-semibold mx-auto'>
        <motion.div
          {...motionSettings}
          transition={{ duration: 0.90, delay: 0.4 }}
        >
          Name: <span className='font-normal'>{value.firstName} {value.lastName}</span>
        </motion.div>
        <motion.div
          {...motionSettings}
          transition={{ duration: 0.85, delay: 0.50 }}
        >
          Email: <span className='font-normal'>{value.email}</span>
        </motion.div>
        <motion.div
          {...motionSettings}
          transition={{ duration: 0.80, delay: 0.55 }}
        >
          Phone: <span className='font-normal'>{value.phone}</span>
        </motion.div>
        <motion.div
          {...motionSettings}
          transition={{ duration: 0.75, delay: 0.60 }}
        >
          Address Line 1: <span className='font-normal'>{value.address1}</span>
        </motion.div>
        <motion.div
          {...motionSettings}
          transition={{ duration: 0.70, delay: 0.65 }}
        >
          Address Line 2: <span className='font-normal'>{value.address2}</span>
        </motion.div>
        <motion.div
          {...motionSettings}
          transition={{ duration: 0.65, delay: 0.70 }}
        >
          State: <span className='font-normal'>{value.state}</span>
        </motion.div>
        <motion.div
          {...motionSettings}
          transition={{ duration: 0.60, delay: 0.75 }}
        >
          City: <span className='font-normal'>{value.city}</span>
        </motion.div>
        <motion.div
          {...motionSettings}
          transition={{ duration: 0.55, delay: 0.80 }}
        >
          Zip Code: <span className='font-normal'>{value.zip}</span>
        </motion.div>
      </div>
      <motion.div
        className='flex justify-center items-center py-5 gap-10'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.85 }}
      >
        <Button
          sx={{ width: "100px" }}
          variant='contained'
          onClick={prevStep}
        >
          Previous
        </Button>
        <Button
          sx={{ width: "100px" }}
          variant='contained'
          onClick={nextStep}
        >
          Submit
        </Button>
      </motion.div>
    </div>
  );
}

export default Confirmation;