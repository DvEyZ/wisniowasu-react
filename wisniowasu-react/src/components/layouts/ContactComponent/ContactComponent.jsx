import React from 'react';
import { MenuComponent } from '../../reusables/MenuComponent/MenuComponent.jsx';
import { FooterComponent } from '../../reusables/FooterComponent/FooterComponent.jsx';

export class ContactComponent extends React.Component 
{
    render()
    {
        return (
            <div className="contact">
                <MenuComponent active="contact" />
                <div className="title_box">
                    <h1 className="title_box_text">
                        KONTAKT
                    </h1>
                </div>
                <div className="fullpadding" id="contact_container">
                    <div className="smallbox slideable">
                        <div className="data">
                            <p className="title">Napisz maila</p>
                            <br/>
                            <p className="subtitle">Kontakowy adres mailowy SU</p>
                            <a href="mailto:su@tm1.edu.pl">kontakt@wisniowasu.pl</a>
                            <br/><br/>
                            <p className="subtitle">Administrator IT</p>
                            {this.props.admin_name}
                            <br/>
                            <a href={`mailto:${this.props.admin_email}`}>{this.props.admin_email}</a>
                        </div>
                        <div className="map">
                            <p className="title">Odwiedź nas</p>
                            <br/>
                            pokój 23
                            <br/>
                            ul. Wiśniowa 56
                            <br/>
                            02-520 Warszawa
                        </div>
                        <div className="links">
                            <p className="title">Zobacz media</p>
                            <a href="https://facebook.wisniowasu.pl" className="facebook-icon"></a>
                            <a href="https://instagram.wisniowasu.pl" className="instagram-icon"></a>
                            <a href="https://discord.wisniowasu.pl" className="discord-icon"></a>
                        </div>
                    </div>
                    <iframe className="discord slideable" src="https://discordapp.com/widget?id=497703565738115085&theme=light" width="350"
                        height="500" allowtransparency="true" frameborder="0"></iframe>
                </div>
                <FooterComponent />
            </div>
        );
    }
}