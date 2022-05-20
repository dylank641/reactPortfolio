import React, { useState } from 'react';

function Contact() {

    const [formPack, setFormPack] = useState({ name: '', email: '', message: '' });
    const [ errMsg, seterrMsg] = useState('');
    const { name, email, message } = formPack;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errMsg) {
            console.log(formPack);
        }
    }

    const handleChange = (event) => {

        //checks name
        if (event.target.name === 'name') {
            const targetValue = event.target.value.trim();
            if (targetValue.length < 1) {
                seterrMsg("Name cannot be empty!");
            } else {
                seterrMsg("");
            }
        }

        //checks email
        if (event.target.name === 'email') {
            if (!emailIsValid(event.target.value)) {
                seterrMsg("Email is not valid!");
            } else {
                seterrMsg("");
            }
        }

        //checks msg
        if (event.target.name === 'message') {
            const targetValue = event.target.value.trim();
            if (targetValue.length < 1) {
                seterrMsg("Message is required!");
            } else {
                seterrMsg("");
            }
        }

      
        if (!errMsg) {
            setFormPack({...FormData, [event.target.name]: event.target.value });
        }
    }
