import React from "react";

export class WiFISponsorComponent extends React.Component
{
    render()
    {
        return(
            <a href={this.props.link} className="slideable"><img className="sponsors__image" src={this.props.img} alt={this.props.alt} /></a>
        );
    }
}