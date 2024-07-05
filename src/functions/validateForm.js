export const validatePersonalInfo = (data) => {
    let errors = {};

    // Validate name
    if (!data.firstName?.trim()) {
        errors.firstName = 'First Name is required';
    }

    if (!data.lastName?.trim()) {
        errors.lastName = 'Last Name is required';
    }
    // Validate email
    if (!data.email?.trim()) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email address is invalid';
    }

    // Validate phone
    if (!data.phone?.trim()) {
        errors.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(data.phone)) {
        errors.phone = 'Mobile number should be 10 digits';
    }

    return errors;
};

export const validateAddressInfo = (data) => {
    let errors = {}

    // Validate PIN code
    if (!data.zip?.trim()) {
        errors.zip = 'Zip code is required';
    } else if (!/^\d{6}$/.test(data.zip)) {
        errors.zip = 'Zip code should be 6 digits';
    }
     // Validate Address 1
     if (!data.address1?.trim()) {
        errors.address1 = 'Address is required';
    }
     // Validate Address 1
     if (!data.address2?.trim()) {
        errors.address2 = 'Address is required';
    } 
     // Validate State name
     if (!data.state?.trim()) {
        errors.state = 'State is required';
    }
     // Validate City name
     if (!data.city?.trim()) {
        errors.city = 'City is required';
    }

    return errors;
}