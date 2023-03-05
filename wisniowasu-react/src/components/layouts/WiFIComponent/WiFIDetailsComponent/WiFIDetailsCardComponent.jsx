import React from "react";

export class WiFIDetailsCardComponent extends React.Component
{
    render()
    {
        return(
            <section class="info-card">
                <div class="info-card__image rounded">
                    <img className="info-card-image" src={this.props.img}/>
                </div>
                <p class="info-card__image-caption">
                    {this.props.caption}<br/>
                </p>
                <article class="info-card__content">
                    <h3 class="info-card__header">{this.props.title}</h3>
                    <p class="info-card__text">{this.props.text}</p>
                </article>
            </section>
        );
    }
}