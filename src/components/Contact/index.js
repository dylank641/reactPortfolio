import React, { useState } from 'react';

function Contact() {

    const [formPack, setFormPack] = useState({ name: '', email: '', message: '' });
    const [ errorMsg, setErrorMsg] = useState('');
    const { name, email, message } = formPack;

    const submit = (event) => {
        event.preventDefault();
        if (!errorMsg) {
            console.log(formPack);
        }
    }

    const check = (event) => {

        //checks name
        if (event.target.name === 'name') {
            const targetValue = event.target.value.trim();
            if (targetValue.length < 1) {
                setErrorMsg("Please enter a name.");
            } else {
                setErrorMsg("");
            }
        }

        // //checks email
        // if (event.target.name === 'email') {
        //     if (!emailIsValid(event.target.value)) {
        //         setErrorMsg("E-mail is not valid.");
        //     } else {
        //         setErrorMsg("");
        //     }
        // }

        //checks msg
        if (event.target.name === 'message') {
            const targetValue = event.target.value.trim();
            if (targetValue.length < 1) {
                setErrorMsg("Message required.");
            } else {
                setErrorMsg("");
            }
        }

      
        if (!errorMsg) {
            setFormPack({...FormData, [event.target.name]: event.target.value });
        }
    }

    return (
        <section className='my-3' id="contact">
            <h2 id="contact-header" className='text-dark bg-primary p-2 display-inline-block'>Contact</h2>
            <div>
                <form onSubmit={submit}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="name">Name:</label></td>
                                <td><input type="text" name="name" defaultValue={name} onBlur={check} /></td>
                                <td rowSpan={3} className="text-center">Form under construction, email me at: <a href="mailto:dylan.killelea@yahoo.com" target={'_blank'}>dylan.killelea@yahoo.com</a></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email:</label></td>
                                <td><input type="email" name="email" defaultValue={email} onBlur={check} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="message">Message:</label></td>
                                <td><textarea name="message" rows="5" defaultValue={message} onBlur={check}></textarea></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                {errorMsg && (
                                    <p className="error-message">{errorMsg}</p>
                                )}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><button type="submit">Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </section>
    )
}

export default Contact;