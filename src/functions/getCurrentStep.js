export function getCurrentStep(newStep) {
    const currentStep = localStorage.getItem('step');
    if(currentStep){
        localStorage.removeItem('step')
    }
    localStorage.setItem('step',JSON.stringify(newStep))
}