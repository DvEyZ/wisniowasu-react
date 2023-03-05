import React from "react";

export class WiFIPartnerComponent extends React.Component
{
    render()
    {
        return(
            <section className="partner-card">
                <img src={this.props.img} alt={this.props.alt} className="partner-card__image" />
                <h3 className="partner-card__header">{this.props.title}</h3>
                <p className="partner-card__text">{this.props.content}</p>
                <div className="partner-card__socials">
                    {this.props.facebook ? <a href={this.props.facebook} className="partner-card__social-link facebook"></a> : null}
                    {this.props.discord ? <a href={this.props.discord} className="partner-card__social-link discord"></a> : null}
                    {this.props.twitter ? <a href={this.props.twitter} className="partner-card__social-link twitter"></a> : null}
                    {this.props.instagram ? <a href={this.props.instagram} className="partner-card__social-link instagram"></a> : null}
                    {this.props.youtube ? <a href={this.props.youtube} className="partner-card__social-link youtube"></a> : null}
                </div>
            </section>
        );
    }
}