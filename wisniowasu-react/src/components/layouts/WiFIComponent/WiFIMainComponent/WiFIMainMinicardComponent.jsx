import React from "react";

export class WiFIMainMinicardComponent extends React.Component
{
    render()
    {
        return(
            <div className="minicard">
                <h3 className="minicard-title">{this.props.title}</h3>
                <h3 className="minicard-text">
                    {this.props.text}
                </h3>
            </div>
        );
    }
}