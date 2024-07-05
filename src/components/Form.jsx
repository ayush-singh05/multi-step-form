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

const currentStep = () =>  JSON.parse(localStorage.getItem('step')) || 1;


function Form() {
    const [step, setStep] = useState(currentStep());
    const [value, setValue] = useState(getAllValues());
    const [error,setError] = useState({});
    // next step 
    const nextStep = () => {
        // form validatiion 
        let validationErrors = validatePersonalInfo(value);
        if(step == 2){
            validationErrors = validateAddressInfo(value);
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
        setValue('');
        setStep(1)
        removeStepFromLocal();
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
