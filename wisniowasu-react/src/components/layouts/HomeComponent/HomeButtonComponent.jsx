import React from 'react'

export class HomeButtonComponent extends React.Component
{
    render()
    {
        return (
            <a className="button" href={ this.props.href }>
                <div className="img_container">
                    <img src={this.props.img} alt={this.props.alt} className="lazyload" />
                </div>
                <h3 className="button-text">{ this.props.button_text }</h3>
            </a>
        );
    }
}