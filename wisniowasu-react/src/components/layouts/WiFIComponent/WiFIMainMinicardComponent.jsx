import React from "react";

export class WiFIMainMinicardComponent extends React.Component
{
    render()
    {
        return(
            <div class="minicard">
                <h3 class="minicard-title">{this.title}</h3>
                <h3 class="minicard-text">
                    {this.text}
                </h3>
            </div>
        );
    }
}