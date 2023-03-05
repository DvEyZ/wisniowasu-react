import React from "react";

import './wifi.scss';

export class WiFIMainComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            logo: '../../../img/logos/logo_wifi_2021.png',
            logo_alt: 'WiFI 2021',
            description: ['Wiśniowy Festiwal Inicjatyw to festiwal szkolny integrujący całą społeczność szkolną - uczniów, nauczycieli, dyrekcję oraz pracowników szkoły. Chcemy, aby przestrzeń szkolna kojarzyła się nie tylko z nauką, ale również z bezpiecznym miejscem, które daje możliwość rozwoju i pozyskiwania nowych doświadczeń. Chcemy połączyć zdobywanie wiedzy z zabawą i stworzyć możliwość na integrację, zacieśnianie relacji z równieśnikami oraz przestrzeń na poznawanie nowych pasji i zainteresowań.']
        }
    }

    render()
    {
        return(
            <div>
                <div className="section_topic alt-mobile-anim" id="countdown">Czas do wydarzenia: NaN</div>
                    <div className="pageblock-full" id="description-container">
                        <div className="minicard" id="wifi_description">
                            <img className="minicard-icon lazyload" id="wifi-logo" alt={this.state.logo_alt}
                                src={this.state.logo} />
                            <h3 className="minicard-title" id="wifi_description_title">Wiśniowy Festiwal Inicjatyw</h3>
                            <h3 className="minicard-text">{this.state.description}
                            </h3>
                            {this.state.video_link ? <a href={this.state.video_link} className="gradient-button">Zobacz film promocyjny</a> : null}
                        </div>
                    </div>
                <div className="section_topic">O WiFI</div>
                <div className="pageblock-full">
                    <div className="cardgroup" id="about-container">
                        {this.state.about}
                    </div>
                </div>
                <div className="section_topic">Sponsorzy</div>
                <div className="sponsors">
                    {this.state.sponsors}
                </div>
                <p className="sponsors__disclaimer">{this.state.sponsors_disclaimer}</p>
                <div className="section_topic">Partnerzy</div>
                <div className="pageblock-full" style={{'flexFlow': 'row wrap', 'alignItems': 'stretch'}}>
                    {this.state.partner_cards}
                </div>
            </div>
        );
    }
}