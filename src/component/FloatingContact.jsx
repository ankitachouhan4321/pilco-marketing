
import React, { useState } from "react";
import {
    MessageCircle,
    Phone,
    Mail,
    Plus,
} from "lucide-react";


const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Replace with PILCO's actual contact details
    const phone = "919810074596";
    const email = "pilcoindia@gmail.com";

    const whatsappMessage = encodeURIComponent(
        "Hello PILCO, I would like to enquire about your storage solutions."
    );

    return (
        <div className="pilco-floating-wrapper">

            <div
                id="pilco-contact-options"
                className={`pilco-contact-options ${isOpen ? "active" : ""}`}
            >
                <a
                    href={`https://wa.me/${phone}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pilco-contact-item whatsapp"
                    aria-label="Chat on WhatsApp"
                >
                    <span>WhatsApp</span>
                    <MessageCircle size={20} />
                </a>

                <a
                    href={`tel:+${phone}`}
                    className="pilco-contact-item call"
                    aria-label="Call PILCO"
                >
                    <span>Call Now</span>
                    <Phone size={20} />
                </a>

                <a
                    href={`mailto:${email}`}
                    className="pilco-contact-item enquiry"
                    aria-label="Email PILCO"
                >
                    <span>Enquire Now</span>
                    <Mail size={20} />
                </a>
            </div>

            <div className="pilco-floating-motion">
                <button
                    type="button"
                    className={`pilco-main-contact ${isOpen ? "opened" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close contact options" : "Open contact options"}
                    aria-expanded={isOpen}
                    aria-controls="pilco-contact-options"
                >
                    <span className="pilco-pulse"></span>
                    <Plus size={27} strokeWidth={2.5} />
                </button>
            </div>

        </div>
    );
};

export default FloatingContact;
