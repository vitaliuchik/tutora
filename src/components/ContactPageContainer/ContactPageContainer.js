import React from 'react'
import './ContactPageContainer.css'
import '../../App.css'



function ContactPageContainer() {
    return (
        <div className="contact-container container">
           <div class="contact-form">
                <form action="/contact">

                <label for="fname">Full Name</label>
                <input type="text" name="fname" placeholder="Your name.." />

                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Your email.." />

                <label for="position">Position</label>
                <select name="position">
                    <option value="student">Student</option>
                    <option value="tutor">Tutor</option>
                    <option value="parents">Parents</option>
                </select>

                <label for="message">Message</label>
                <textarea name="message" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit" />

                </form>
                </div>         
        </div>
    )
}

export default ContactPageContainer;


