import React from "react";

export class TeamPersonComponent extends React.Component
{
    render()
    {
        return(
            <div className="human-card">
                <img className="personimg" src={this.props.photo} />
                <div className="info">
                    <img src={this.props.icon} />
                    <div className="box">
                        <p className="title">{this.props.role}</p>
                        <p className="name">{this.props.name}</p>
                    </div>
                </div>
                <div className="moreinfo">
                    {this.props.text}
                </div>
            </div>
        );
    }
}