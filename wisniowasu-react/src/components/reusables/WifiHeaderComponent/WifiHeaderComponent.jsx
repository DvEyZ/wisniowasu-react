import React from 'react';

export class WifiHeaderComponent extends React.Component
{
    render()
    {
        return (
            <header class="wifi-header">
                <a class={"wifi-header__button " + this.props.active == "home" ? "active" : ""} href="/wifi/"></a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + this.props.active == "details" ? "active" : ""} href="/wifi/details/">Szczegóły wydarzenia</a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + this.props.active == "harmonogram" ? "active" : ""} href="/wifi/harmonogram/">Harmonogram</a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + this.props.active == "contact"  ? "active" : ""} href="/wifi/contact/">Kontakt</a>
            </header>
        );
    }
}