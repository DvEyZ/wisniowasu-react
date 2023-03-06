import React from 'react';
import scrollreveal from 'scrollreveal';

import { cms } from '../../../CMS';

import './contact.scss'

export class ContactComponent extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.slideables = [];

        this.state = {
            admin_name: undefined,
            admin_email: undefined,
            error: false
        }
    }

    componentDidMount()
    {
        fetch(`${cms}/api/contact`).then(
            res => {res.json().then(
                value => {
                    this.setState({
                        admin_name: value.data.attributes.admin_name,
                        admin_email: value.data.attributes.admin_email,
                        error: false
                    })
                }
            ).catch((e) => this.setState({error: e}))}
        ).catch((e) => this.setState({error: e}));

        scrollreveal().reveal(this.slideables, {
            easing: 'ease-in-out',
            distance: '20px',
        });
    }

    render()
    {
        if(!this.state.error) return (
            <div className="contact">
                <div className="title_box">
                    <h1 className="title_box_text">
                        KONTAKT
                    </h1>
                </div>
                <div className="fullpadding" id="contact_container">
                    <div className="smallbox slideable" ref={node => {this.slideables[0] = node}}>
                        <div className="data">
                            <p className="title">Napisz maila</p>
                            <br/>
                            <p className="subtitle">Kontakowy adres mailowy SU</p>
                            <a href="mailto:su@tm1.edu.pl">kontakt@wisniowasu.pl</a>
                            <br/><br/>
                            <p className="subtitle">Administrator IT</p>
                            {this.state.admin_name}
                            <br/>
                            <a href={`mailto:${this.state.admin_email}`}>{this.state.admin_email}</a>
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
                        height="500" allowtransparency="true" frameBorder="0" ref={node => {this.slideables[1] = node}}></iframe>
                </div>
            </div>
        );
    }
}