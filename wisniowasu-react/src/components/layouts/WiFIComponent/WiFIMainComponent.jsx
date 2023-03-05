import React from "react";

export class WiFIMainComponent extends React.Component
{
    render()
    {
        return(
            <div>
                <div className="section_topic alt-mobile-anim" id="countdown">Czas do wydarzenia: NaN</div>
                    <div className="pageblock-full" id="description-container">
                        <div className="minicard" id="wifi_description">
                            <img className="minicard-icon lazyload" id="wifi-logo" alt={this.props.logo_alt}
                                src={this.props.logo_link} />
                            <h3 className="minicard-title" id="wifi_description_title">Wiśniowy Festiwal Inicjatyw</h3>
                            <h3 className="minicard-text">{this.description}
                            </h3>
                            {this.props.video_link ? <a href={this.video_link} className="gradient-button">Zobacz film promocyjny</a> : null}
                        </div>
                    </div>
                <div className="section_topic">O WiFI</div>
                <div className="pageblock-full">
                    <div className="cardgroup" id="about-container">
                        {this.props.about}
                    </div>
                </div>
                <div className="section_topic">Sponsorzy</div>
                <div className="sponsors">
                    {this.props.sponsors}
                </div>
                <p className="sponsors__disclaimer">{this.props.sponsors_disclaimer}</p>
                <div className="section_topic">Partnerzy</div>
                <div className="pageblock-full" style={{'flexFlow': 'row wrap', 'alignItems': 'stretch'}}>
                    {this.props.partner_cards}
                </div>
            </div>
        );
    }
}