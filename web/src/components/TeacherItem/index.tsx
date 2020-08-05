import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherList() {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://scontent.fgru6-1.fna.fbcdn.net/v/t1.0-9/83613389_2717599941664815_8398183131370225664_o.jpg?_nc_cat=101&_nc_sid=174925&_nc_eui2=AeHvI4yXgnjyokqgL7QkBT2pyHz6Uj77tbrIfPpSPvu1us0eiAwM8U95mMTNYlSlWAa84UwJsuNvndTb7DsSr5yz&_nc_ohc=x03JMzYbuPcAX9Ul8dc&_nc_ht=scontent.fgru6-1.fna&oh=99b280ea248164ad5c177d5592825304&oe=5F4E18CD" alt="Carol Galvao muito linda"/>
                        <div>
                            <strong>Carol Galvão</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Ama aprender.
                        <br/>
                        Principalmente java mas atualmente esta explorando novas ferramentas.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>

    );
}

export default TeacherList;