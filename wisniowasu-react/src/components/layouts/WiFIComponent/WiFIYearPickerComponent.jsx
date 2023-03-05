import React from "react";

export class WiFIYearPickerComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <header className="wifi-header">
                <select>
                    {this.props.years.map((i) => {
                        <option><a href={i.url}>{i.year}</a></option>
                    })
                    }
                </select>
                <a className="wifi-header__home-button" href={`${window.location.pathname}`}></a>
                <span className="vertical-spacer"></span>
                <a className="wifi-header__button" href={`${window.location.pathname}/details`}>Szczegóły wydarzenia</a>
                <span className="vertical-spacer"></span>
                <a className="wifi-header__button" href={`${window.location.pathname}/schedule`}>Harmonogram</a>
                <span className="vertical-spacer"></span>
                <a className="wifi-header__button" href={`${window.location.pathname}/contact`}>Kontakt</a>
            </header>
        );
    }
}