import React from "react";
import { Link } from "react-router-dom";

export class WiFIYearPickerComponent extends React.Component
{
    render()
    {
        return(
            <header className="">
                <select>
                    {this.props.years.map((i) =>
                        {return (<option key={i}><Link to={`../${i}`}>{`${i}`}</Link></option>)}
                    )}
                </select>
            </header>
        );
    }
}