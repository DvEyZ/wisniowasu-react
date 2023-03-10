import React from "react";

export class WiFIScheduleEntryComponent extends React.Component
{
    render()
    {
        return(
            <div className="schedule-entry slideable">
                <figure className="schedule__timespan" style={{'--order': 0}}>
                    <figcaption>{this.props.hour}</figcaption>
                </figure>
                <section className="schedule__section" style={{'--order': 0}}>
                    <h1 className="schedule__section-header">{this.props.title}</h1>

                    {this.props.sections.map((value, key) => 
                        <div key={key}>
                            <h2 className="schedule__section-subheader">{value.title ? value.title : null}</h2>
                            <p className="schedule__section-text">{value.text}</p>
                        </div>
                    )}
                </section>
            </div>
        );
    }
}