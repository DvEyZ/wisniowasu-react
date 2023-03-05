import React from "react";

export class WiFIYearPickerComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    changeYear = (i) =>
    {
        window.location.href = `/wifi/${i}/`
    }
    
    render()
    {
        return(
            <header className="">
                <select>
                    {this.props.years.map((i) =>
                        {return (<option key={i} onClick={() => {this.changeYear(i)}}>{i}</option>)}
                    )}
                </select>
            </header>
        );
    }
}