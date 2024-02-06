import { useState } from "react";
import axios from "axios";
import styles from "./ContactForm.module.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phonenumber: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/contact", formData);
            console.log(response.data);

            setFormData({ firstname: "", lastname: "", phonenumber: "", email: "", message: "" });
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire :", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom:
                <input 
                type="text" 
                name="firstname" 
                placeholder="Nom" 
                value={formData.firstname} 
                onChange={handleChange} 
                required
                />
            </label>
            <br />
            <label>
                Prenom:
                <input 
                type="text" 
                name="lastname" 
                placeholder="Prénom" 
                value={formData.lastname} 
                onChange={handleChange} 
                required
                />
            </label>
            <br />
            <label>
                Telephone:
                <input 
                type="text" 
                name="phone" 
                placeholder="Téléphone" 
                value={formData.phonenumber} 
                onChange={handleChange} 
                required
                />
            </label>
            <br />
            <label>
                e-mail:
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="E-mail" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required
                    />
            </label>
            <br />
            <label>
                message:
                <textarea 
                name="message" 
                placeholder="Message" 
                value={formData.message} 
                onChange={handleChange} 
                required
                />
            </label>
            <br />
            <button 
            type="submit" 
            className={styles.submit} 
            onSubmit={handleSubmit}>
                Envoyer
                </button>
        </form>
    );
}

export default ContactForm;