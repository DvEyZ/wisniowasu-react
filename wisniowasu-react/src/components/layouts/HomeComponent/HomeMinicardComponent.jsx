import React from 'react';

export class HomeMinicardComponent extends React.Component
{
    render()
    {
        return (
            <div className="minicard">
                <img className="minicard-icon lazyload" alt={this.props.alt} src={this.props.img} />
                <h3 className="minicard-title">{this.props.title}</h3>
                <h3 className="minicard-text">{this.props.text}</h3>
            </div>
        );
    }
}