import React from "react";

export class WiFIMainComponent extends React.Component
{
    render()
    {
        return(
            <div>
                <div className="section_topic alt-mobile-anim" id="countdown">Czas do wydarzenia: NaN</div>
                <div className="pageblock-full" id="description-container">
                    {this.props.description}
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
                <div className="pageblock-full" style="flex-flow: row wrap; align-items: stretch;">
                    {this.props.partner_cards}
                </div>
            </div>
        );
    }
}