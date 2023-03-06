import React from "react";

export class WiFIDetailsCardComponent extends React.Component
{
    render()
    {
        return(
            <section className="info-card">
                <div className="info-card__image rounded">
                    <img className="info-card-image" src={this.props.img}/>
                </div>
                <p className="info-card__image-caption">
                    {this.props.caption}<br/>
                </p>
                <article className="info-card__content">
                    <h3 className="info-card__header">{this.props.title}</h3>
                    <p className="info-card__text">{this.props.text}</p>
                </article>
            </section>
        );
    }
}