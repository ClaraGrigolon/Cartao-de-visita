import React from "react"; 
import './Card.css';
import Perfil from '../../peterparker-perfil.jpg';
import Whatsapp from '../../whatsapp-logo.png';
import Email from '../../email-logo.png';
import Linkedin from '../../linkedin-logo.png';

function Card() {
    return (
        <>
            <main>
                <img src={Perfil} alt="foto de perfil" className="perfil"/>
                <h1>Peter <br /> Parker</h1>
                <p>Fotojornalista <br /> Bioquímico <br /> Bioengenheiro</p>
                
                <div className="contato">
                    <a href="tel:+5519993551402" className="whatsapp">
                        <img src={Whatsapp} alt="WhatsApp" className="icone-botao"/>
                        Entrar em contato via WhatsApp
                    </a>
                    
                    <a href="mailto:peter.parker@gmail.com" className="email">
                        <img src={Email} alt="E-mail" className="icone-botao"/>
                        Entrar em contato via E-mail
                    </a>
                    
                    <a href="https://www.linkedin.com/in/peter-parker-0b16952ba/" className="linkedin" target="_blank">
                        <img src={Linkedin} alt="Linkedin" className="icone-botao"/>
                        Ver LinkedIn
                    </a>
               
                </div>
            </main>
        </>
    );
};

export default Card;
