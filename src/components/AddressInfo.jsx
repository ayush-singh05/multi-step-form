import { Button, TextField } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'



function AddressInfo({ value, handleChange, prevStep, nextStep, errors }) {
  
  return (
    <div className=' flex justify-center items-center px-5'>
      <div className='py-10'>
        <motion.div className='pb-5'
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.40 }}
        >
          <TextField
            sx={{ width: '100%' }}
            type='text'
            id="outlined-basic"
            label="Address Line 1"
            name='address1'
            error={!!errors?.address1}
            helperText={errors.address1}
            variant="outlined"
            value={value.address1}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }} className='pb-5'>
          <TextField
            sx={{ width: '100%' }}
            type='text'
            id="outlined-basic"
            name='address2'
            error={!!errors?.address2}
            helperText={errors.address2}
            label="Address Line 2"
            variant="outlined"
            value={value.address2}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.30 }} className='pb-5'>
          <TextField
            sx={{ width: '100%' }}
            type='text'
            id="outlined-basic"
            label="State"
            variant="outlined"
            error={!!errors?.state}
            helperText={errors.state}
            name='state'
            value={value.state}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }} className='flex justify-center items-center gap-5 pb-5'
        >
          <TextField
            type='text'
            id="outlined-basic"
            label="City"
            variant="outlined"
            error={!!errors?.city}
            helperText={errors.city}
            name='city'
            value={value.city}
            onChange={handleChange}
          />
          <TextField
            type='number'
            id="outlined-basic"
            label="Zip Code"
            name='zip'
            variant="outlined"
            error={!!errors?.zip}
            helperText={errors.zip}
            value={value.zip}
            onChange={handleChange}
          />
        </motion.div>

        <motion.div initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.20 }} className='flex justify-center items-center py-5 gap-10'>
          <Button
            sx={{ width: "100px" }}
            variant='contained'
            onClick={prevStep}
          >Prevoius</Button>
          <Button
            sx={{ width: "80px" }}
            variant='contained'
            onClick={nextStep}
          >Next</Button>


        </motion.div>
      </div>
    </div>
  )
}

export default AddressInfo;
