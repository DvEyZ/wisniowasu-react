import React from "react";

export class WiFIMainMinicardComponent extends React.Component
{
    render()
    {
        return(
            <div className="wifi-minicard slideable">
                <h3 className="wifi-minicard-title">{this.props.title}</h3>
                <h3 className="wifi-minicard-text">
                    {this.props.text}
                </h3>
            </div>
        );
    }
}