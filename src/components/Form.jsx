import React, { useState } from 'react';

import { Typography } from '@mui/material';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import Confirmation from './Conformation';
import { addToLocal } from '../functions/addtoLocal';
import { getCurrentStep } from '../functions/getCurrentStep';
import { removeStepFromLocal } from '../functions/removeStepFromLocal';
import { getAllValues } from '../functions/getAllValues';
import { validateAddressInfo, validatePersonalInfo } from '../functions/validateForm';

/* 
   This function retrieves the current step from localStorage. 
   It is useful to maintain form navigation state across page refreshes, 
   ensuring the form resumes from where the user left off.
   
   If no step is found in localStorage (e.g., on initial visit), it defaults to step 1.
*/
const currentStep = () =>  JSON.parse(localStorage.getItem('step')) || 1;  


function Form() {
    const [step, setStep] = useState(currentStep());
    const [value, setValue] = useState(getAllValues());
    const [error,setError] = useState({});

    // next step 
    const nextStep = () => {
        // form validatiion 
        let validationErrors = validatePersonalInfo(value); // presonal info validation
        if(step == 2){
            validationErrors = validateAddressInfo(value); // address info validation
        }
        
            if(Object.keys(validationErrors).length === 0){
                if (step < items.length) {
                    setStep(prev => prev + 1);
                    getCurrentStep(step+1);
                    addToLocal(value);
                }
            }else {
                setError(validationErrors);
            }
           
    };

    // previous step 
    const prevStep = () => {
        if (step > 1) {
            setStep(prev => prev - 1);
            getCurrentStep(step-1);
        }
    };

    // submit form 
    const submitData = () => {
        alert("Your information has been successfully submitted.")
        setValue(''); // after submmitting set values to initial state 
        setStep(1)
        removeStepFromLocal(); // remove values form localstorage
    }
    // setting form values
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue(prevValue => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const items = [
        {
            name: "Personal Information",
            component: <PersonalInfo
                value={value}
                handleChange={handleChange}
                errors={error}
                nextStep={nextStep}
            />
        },
        {
            name: "Address Information",
            component: <AddressInfo
                value={value}
                handleChange={handleChange}
                errors={error}
                nextStep={nextStep}
                prevStep={prevStep}
            />
        },
        {
            name: "Confirmation",
            component: <Confirmation
                value={value}
                prevStep={prevStep}
                nextStep={submitData}
            />
        }
    ];

    const currentStepComponent = items[step - 1].component; 

    return (
        <div>
            <div className='flex justify-center items-center pt-40'>
                <Typography variant="h4" gutterBottom>
                    {items[step - 1].name}
                </Typography>
            </div>
            <div>
                {currentStepComponent}
            </div>
        </div>
    );
}

export default Form;
