import { useState } from 'react';
import Link from 'next/link';
import { emailContactForm } from '../../actions/form';

const ContactForm = () => {
    const [values, setValues] = useState({
        message: '',
        name: '',
        email: '',
        sent: false,
        buttonText: 'Send Message',
        success: false,
        error: false
    });

    const { message, name, email, sent, buttonText, success, error } = values;

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, buttonText: 'Sending...' });
        emailContactForm({ name, email, message }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: '',
                    email: '',
                    message: '',
                    buttonText: 'Sent',
                    success: data.success
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value, error: false, success: false, buttonText: 'Send Message' });
    };

    const showSuccessMessage = () => success && <div className="alert alert-info">Thank you for contacting us.</div>;

    const showErrorMessage = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const contactForm = () => {
        return (
            <form onSubmit={clickSubmit} className="pb-5">
                <div className="form-group">
                    <label className="lead">Message</label>
                    <textarea
                        onChange={handleChange('message')}
                        type="text"
                        className="form-control"
                        value={message}
                        required
                        rows="10"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label className="lead">Name</label>
                    <input type="text" onChange={handleChange('name')} className="form-control" value={name} required />
                </div>

                <div className="form-group">
                    <label className="lead">Email</label>
                    <input
                        type="email"
                        onChange={handleChange('email')}
                        className="form-control"
                        value={email}
                        required
                    />
                </div>

                <div>
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
            </form>
        );
    };

    return (
        <React.Fragment>
            {showSuccessMessage()}
            {showErrorMessage()}
            {contactForm()}
        </React.Fragment>
    );
};

export default ContactForm;
