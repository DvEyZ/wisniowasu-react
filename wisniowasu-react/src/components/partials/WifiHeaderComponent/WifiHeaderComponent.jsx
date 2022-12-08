import React from 'react';
import exists from '../../../helperFunctions'

class WifiHeaderComponent extends React.Component
{
    render()
    {
        return (
            <header class="wifi-header">
                <a class={"wifi-header__button " + exists(this.props.active_wifi_home) ? "active" : ""} href="/wifi/"></a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + exists(this.props.active_wifi_details) ? "active" : ""} href="/wifi/details/">Szczegóły wydarzenia</a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + exists(this.props.active_wifi_harmonogram) ? "active" : ""} href="/wifi/harmonogram/">Harmonogram</a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + exists(this.props.active_wifi_contact) ? "active" : ""} href="/wifi/contact/">Kontakt</a>
            </header>
        );
    }
}