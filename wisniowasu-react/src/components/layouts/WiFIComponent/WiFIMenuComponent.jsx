import React from "react";
import './wifi_header.scss';

export class WiFIMenuComponent extends React.Component
{
    render()
    {
        return(
            <div className="wifi-header">
                <a className="wifi-header__home-button" href={`/wifi/${this.props.year}`}></a>
                    <span className="vertical-spacer"></span>
                    <a className="wifi-header__button" href={`/wifi/${this.props.year}/details`}>Szczegóły wydarzenia</a>
                    <span className="vertical-spacer"></span>
                    <a className="wifi-header__button" href={`/wifi/${this.props.year}/schedule`}>Harmonogram</a>
                    <span className="vertical-spacer"></span>
                <a className="wifi-header__button" href={`/wifi/${this.props.year}/contact`}>Kontakt</a>
            </div>
        );
    }
}