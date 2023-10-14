import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

export default function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
        } else if (inputType === 'company') {
            setCompany(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check if any of the required fields are empty or if the email is invalid
        if (!firstName || !lastName || !email || !validateEmail(email)) {
            setErrorMessage('Email, first name, or last name is invalid or empty');
        } else {
            // Clear all the form fields on successful submission
            setFirstName('');
            setLastName('');
            setEmail('');
            setCompany('');
            setMessage('');
            setErrorMessage('');
        }

    };

    return (
        <div className="form">
            <h1>Hello {firstName}</h1>
            <form onSubmit={handleFormSubmit}>
                <div class="form-box">
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                        class="form-control" id="exampleInputEmail1"
                    />
                </div>
                <div class="form-row form-box">
                    <div class="form-group col-md-6">
                        <input
                            value={firstName}
                            name="firstName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="First Name"
                            class="form-control" id="exampleInputEmail1"
                        />
                    </div>
                    <div class="form-group col-md-6">
                        <input
                            value={lastName}
                            name="lastName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Last Name"
                            class="form-control" id="exampleInputEmail1"
                        />
                    </div>
                </div>
                <div class="form-box">
                    <input
                        value={company}
                        name="company"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Company"
                        class="form-control" id="exampleInputEmail1"
                    />
                </div>
                <div class="form-box msg">
                    <input
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                        class="form-control" id="exampleInputEmail1"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>

            {errorMessage && (
                <div>
                    <div class="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                </div>
            )}
        </div>
    )
}
