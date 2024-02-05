import { useState } from "react";
import axios from "axios";
import styles from "./ContactForm.module.css"

function ContactForm () {
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
            await axios.post("http://localhost:5000/api/contacts", formData);

            setFormData({
                firstname: "",
                lastname: "",
                phonenumber: "",
                email: "",
                message: ""
            });

            console.log("Formulaire soumis avec succès!");
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom:
                <input 
                type="text" 
                name="firstname" 
                className={styles.firstname} 
                value={formData.firstname} 
                onChange={handleChange}
                 />
            </label>
            <br />
            <label>
                Prenom:
                <input 
                type="text" 
                name="lastname" 
                className={styles.lastname} 
                value={formData.lastname} 
                onChange={handleChange} 
                />
            </label>
            <br />
            <label>
                Telephone:
                <input 
                type="text" 
                name="phone" 
                className={styles.phone} 
                value={formData.phone}
                onChange={handleChange} 
                />
            </label>
            <br />
            <label>
                e-mail:
                    <input 
                    type="text" 
                    name="email" 
                    className={styles.email} 
                    value={formData.email} 
                    onChange={handleChange} 
                    />
            </label>
            <br />
            <label>
                message:
                <textarea 
                name="message" 
                className={styles.message} 
                value={formData.message} 
                onChange={handleChange} 
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