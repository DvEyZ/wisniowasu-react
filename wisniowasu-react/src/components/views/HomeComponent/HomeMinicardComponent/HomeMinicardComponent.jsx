import React from 'react';

class HomeMinicardComponent extends React.Component
{
    render()
    {
        return (
            <div class="minicard">
                <img class="minicard-icon lazyload" alt={this.props.alt} data-src={"../../../img/icons/" + this.props.img} />
                <h3 class="minicard-title">{this.props.title}</h3>
                <h3 class="minicard-text">{this.props.text}</h3>
            </div>
        );
    }
}