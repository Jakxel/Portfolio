import React, { useState } from "react";
import '../styles/pages.css'

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar lógica para enviar el formulario
        setSubmitted(true);
    };

    return (
        <div className="page">
            <h2>Contacto</h2>
            {submitted ? (
                <div>
                    <p>¡Gracias por contactarme! Te responderé pronto.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            Nombre:
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Mensaje:
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                            />
                        </label>
                    </div>
                    <button type="submit">
                        Enviar
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;
