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
        <div style={{ maxWidth: 500, margin: "40px auto", padding: 24 }}>
            <h2>Contacto</h2>
            {submitted ? (
                <div>
                    <p>¡Gracias por contactarme! Te responderé pronto.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Nombre:
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                style={{ width: "100%", padding: 8, marginTop: 4 }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                style={{ width: "100%", padding: 8, marginTop: 4 }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <label>
                            Mensaje:
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                style={{ width: "100%", padding: 8, marginTop: 4 }}
                            />
                        </label>
                    </div>
                    <button type="submit" style={{ padding: "8px 24px" }}>
                        Enviar
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;