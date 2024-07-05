import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import {motion} from 'framer-motion'
import { Button } from '@mui/material';
function PersonalInfo({ value, handleChange,nextStep,errors }) {
    return (
        <div className=' flex justify-center items-center px-5'>
            <div className=''>
                <motion.div className='flex justify-center items-center gap-5 pt-10 pb-5 '
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5,delay: 0.35 }}
                >
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        name="firstName"
                        variant="outlined"
                        error={!!errors?.firstName}
                        helperText={errors?.firstName}
                        value={value?.firstName}
                        onChange={handleChange}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        name="lastName"
                        error={!!errors?.lastName}
                        helperText={errors?.lastName}
                        variant="outlined"
                        value={value?.lastName}
                        onChange={handleChange}
                    />
                </motion.div>

                <motion.div className='pb-5'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5,delay:0.30 }}
                >
                    <TextField
                        sx={{ width: '100%' }}
                        type='email'
                        id="outlined-basic"
                        name='email'
                        label="Email"
                        error={!!errors?.email}
                        helperText={errors?.email}
                        variant="outlined"
                        value={value?.email}
                        onChange={handleChange}
                    />
                </motion.div>

                <motion.div className='pb-5'
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5,delay: 0.25 }}
                >
                    <TextField
                        sx={{ width: "100%" }}
                        type='number'
                        id="outlined-basic"
                        label="Phone"
                        name='phone'
                        variant="outlined"
                        error={!!errors?.phone}
                        helperText={errors?.phone}
                        value={value?.phone} 
                        onChange={handleChange}
                    />
                </motion.div>

                <motion.div className='flex justify-center items-center'
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.5,delay:0.20 }}
                >
                    <Button
                        sx={{ width: "8rem" }}
                        variant='contained'
                        onClick={nextStep}
                    >Next</Button>
                </motion.div>
            </div>
        </div>
    )
}

export default PersonalInfo;

//: Personal Information (Name, Email, Phone