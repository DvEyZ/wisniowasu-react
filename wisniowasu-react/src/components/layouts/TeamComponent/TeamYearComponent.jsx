import React from "react";

export class TeamYearComponent extends React.Component
{
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
                <div className="human-cardcontainer">
                    {this.props.management}
                </div>
                <div className="spacer"></div>
                <p className="category">Przewodniczący Sekcji</p>
                <div className="human-cardcontainer">
                    {this.props.section_leaders}
                </div>
            </div>
        </div>
        );
    }
}