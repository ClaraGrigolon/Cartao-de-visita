import React from "react"; 
import './Card.css';

function Card() {
    return (
        <>
            <main>
                <img src="./peterparker-perfil.jpg" alt="foto de perfil" className="perfil"/>
                <h1>Peter <br /> Parker</h1>
                <p>Fotojornalista <br /> Bioquímico <br /> Bioengenheiro</p>
                
                <div className="contato">
                    <a href="tel:+5519993551402" className="whatsapp">
                        <img src="./whatsapp-logo.png" alt="WhatsApp" className="icone-botao"/>
                        Entrar em contato via WhatsApp
                    </a>
                    
                    <a href="mailto:peter.parker@gmail.com" className="email">
                        <img src="./email-logo.png" alt="E-mail" className="icone-botao"/>
                        Entrar em contato via E-mail
                    </a>
                    
                    <a href="https://www.linkedin.com/in/peter-parker-0b16952ba/" className="linkedin" target="_blank">
                        <img src="./linkedin-logo.png" alt="Linkedin" className="icone-botao"/>
                        Ver LinkedIn
                    </a>
               
                </div>
            </main>
        </>
    );
};

export default Card;
