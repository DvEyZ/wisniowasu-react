import React from 'react'

export class HomeButtonComponent extends React.Component
{
    render()
    {
        return (
            <a class="button" href={ this.props.href }>
                <div class="img_container">
                    <img data-src={"../../../../img/" + this.props.img } alt={this.props.alt} class="lazyload" />
                </div>
                <h3 class="button-text">{ this.props.button_text }</h3>
            </a>
        );
    }
}