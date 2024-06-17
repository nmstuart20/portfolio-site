// components/Contact.js
import React, { Component } from 'react';
import Navigation from './Navigation';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to a server
    alert(`Message sent:\nName: ${this.state.name}\nEmail: ${this.state.email}\nMessage: ${this.state.message}`);
    // Reset form fields
    this.setState({
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    return (
    <>
    <Navigation />
    <div className="header-container">
    <header className="page-header">Contact Form
            <div style={{ fontSize: 'small' }}>Fill out the contact form to reach me.</div>
        </header><div className="contact-form">
                <h1>Contact Me</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea name="message" value={this.state.message} onChange={this.handleChange} required />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
            </div></>
    );
  }
}

export default Contact;