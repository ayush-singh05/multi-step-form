import { fireEvent, render } from "@testing-library/react"
import PersonalInfo from "../../components/PersonalInfo"
import '@testing-library/jest-dom'

test('should be on screen', () => {
    const { getByLabelText, getByText} = render(<PersonalInfo/>)

    fireEvent.click(getByText('Next'))
    expect(getByLabelText('First Name')).toBeInTheDocument()
    expect(getByLabelText('Last Name')).toBeInTheDocument()
    expect(getByLabelText('Email')).toBeInTheDocument()
    expect(getByLabelText('Phone')).toBeInTheDocument()
    
})
