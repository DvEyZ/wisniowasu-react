import React from "react";
import scrollreveal from "scrollreveal";

export class TeamYearComponent extends React.Component
{
    componentDidMount()
    {
        scrollreveal().reveal(this.management_cards, {
            easing: 'ease-in-out',
            distance: '20px',
        });
        scrollreveal().reveal(this.section_cards, {
            easing: 'ease-in-out',
            distance: '20px',
        });
    }

    render()
    {
        return (
            <div className="team_year">
                <div className="title_box">
                <h1 className="title_box_text">
                    ZESPÓŁ <span className="title_box_date">{this.props.year}</span>
                </h1>
            </div>
            <div className="fullpadding" id="teamcontainer">
                <p className="category">Zarząd</p>
                <div className="human-cardcontainer" ref={node => {this.management_cards = node}}>
                    {this.props.management}
                </div>
                <div className="spacer"></div>
                <p className="category">Przewodniczący Sekcji</p>
                <div className="human-cardcontainer" ref={node => {this.section_cards = node}}>
                    {this.props.sections}
                </div>
            </div>
        </div>
        );
    }
}