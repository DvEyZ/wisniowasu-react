import React from "react";
import { WiFIScheduleEntryComponent } from "./WiFIScheduleEntryComponent";

import './schedule.scss'

import scrollreveal from "scrollreveal";

import { cms } from "../../../../CMS";

export class WiFIScheduleComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            entries: [],
            loaded: false,
            error: false
        }
    }
    
    componentDidMount()
    {
        fetch(`${cms}/api/wifis?` + new URLSearchParams({
            'filter[year][$eq]': `${this.props.year}`,
            'populate[0]': 'wifi_schedule',
            'populate[1]': 'wifi_schedule.entries',
            'populate[2]': 'wifi_schedule.entries.sections'
        })).then(value => 
            value.json().then(
                value => {
                    this.setState({
                        entries: value.data[0].attributes.wifi_schedule.data.attributes.entries.map((v) => {
                            return {
                                hour: v.hour,
                                title: v.title,
                                sections: v.sections.map((v) => {
                                    return {
                                        title: v.title,
                                        text: v.text
                                    }
                                })
                            }
                        }),
                        loaded: true,
                        error: false,
                    });
                    scrollreveal().reveal(this.schedule.childNodes, {
                        easing: 'ease-in-out',
                        distance: '20px',
                    });
                }
            ).catch(e => this.setState({error: e}))
        ).catch(e => this.setState({error:e}));
    }

    render()
    {
        if(this.state.error) return(<div>Błąd: {this.state.error.toString()}</div>)
        return(
            <div className="page-container">
                <section className="schedule">
                    <div className="vertical-line" ref={node => {this.vl = node}}></div>
                    <div ref={node => {this.schedule = node}}>
                        {this.state.entries.map((value, key) => 
                            <WiFIScheduleEntryComponent key={key} hour={value.hour} title={value.title} sections={value.sections}/>
                        )}
                    </div>
                </section>
            </div>
        );
    }
}