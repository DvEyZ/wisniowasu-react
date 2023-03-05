import React from "react";

export class WiFIPartnerComponent extends React.Component
{
    render()
    {
        return(
            <section class="partner-card">
                <img src={this.props.img} alt={this.props.alt} class="partner-card__image" />
                <h3 class="partner-card__header">{this.props.title}</h3>
                <p class="partner-card__text">{this.props.content}</p>
                <div class="partner-card__socials">
                    {this.props.facebook ? <a href={this.props.facebook} class="partner-card__social-link facebook"></a> : null}
                    {this.props.discord ? <a href={this.props.discord} class="partner-card__social-link discord"></a> : null}
                    {this.props.twitter ? <a href={this.props.discord} class="partner-card__social-link twitter"></a> : null}
                    {this.props.instagram ? <a href={this.props.instagram} class="partner-card__social-link instagram"></a> : null}
                    {this.props.youtube ? <a href={this.props.youtube} class="partner-card__social-link youtube"></a> : null}
                </div>
            </section>
        );
    }
}