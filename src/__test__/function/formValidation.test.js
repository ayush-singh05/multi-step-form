import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from '../../components/Form';

test('Should validate input field', () => {
    const { getByText } = render(<Form />);


    fireEvent.click(getByText('Next'));

   

    expect(getByText('First Name is required')).toBeInTheDocument();
    expect(getByText('Last Name is required')).toBeInTheDocument();
    expect(getByText('Email is required')).toBeInTheDocument();
    expect(getByText('Mobile number is required')).toBeInTheDocument();

})