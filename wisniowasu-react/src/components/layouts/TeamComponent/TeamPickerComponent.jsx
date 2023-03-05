import React from "react";

export class TeamPickerComponent extends React.Component
{
    render()
    {
        return (<div className="teampicker">
	        <div className="teampicker_dropdown">
		        <button className="teampicker_dropdown_button">Zobacz SU z wybranego rocznika</button>
	            <div className="teampicker_dropdown_content">
                    {this.props.years.map((i, key) => 
                        <a key={key} href={`/team/${i.url}`}>{i.year}</a>
                    )}
		        </div>
	        </div>
        </div>);
    }
}