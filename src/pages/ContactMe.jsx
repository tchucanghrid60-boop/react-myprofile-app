import { useState } from 'react'
import Swal from 'sweetalert2'

const initialForm = {
    email: '',
    phone: '',
    name: '',
    address: '',
    content: '',
    newsletter: false
}

function ContactMe() {
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        Swal.fire({
            title: 'Thank You!',
            text: 'Your form has been submitted.',
            icon: 'success',
            confirmButtonColor: '#ff5b0a'
        })

        setForm(initialForm)
    }

    return (
        <section className="page-content">
            <h1>Contact <span>Me</span></h1>
            <p className="description">Let's get in touch!</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-col">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <label className="newsletter">
                        <input
                            type="checkbox"
                            name="newsletter"
                            checked={form.newsletter}
                            onChange={handleChange}
                        />
                        <span>I would like to receive the newsletter.</span>
                    </label>

                    <button type="submit" className="hire-btn submit-btn">
                        Submit
                    </button>
                </div>

                <div className="form-col">
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            id="address"
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default ContactMe