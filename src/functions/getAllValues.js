export const getAllValues = () => {
    const value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        state: '',
        city: '',
        zip: '',
    };
    const localVal = JSON.parse(localStorage.getItem('value'));
    if(!localVal) {
        return value;
    }else {
        return localVal;
    }
}