import React from "react";
import { TeamPickerComponent } from './TeamPickerComponent'
import { TeamYearComponent } from './TeamYearComponent';
import { Routes, Route } from "react-router-dom";

import './team.scss';

import { cms } from '../../../CMS';

export class TeamComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            years: [],
            loaded: false,
            error: false
        };
    }

    componentDidMount()
    {
        fetch(`${cms}/api/teams`).then(value => 
            value.json().then(
                value => {
                    this.setState({
                        years: value.data.map((v) => {
                                return v.attributes.year;
                            }),
                        loaded: true,
                        error: false,
                    });
                }
            ).catch(e => this.setState({error: e}))
        ).catch(e => this.setState({error:e}));
    }

    render()
    {
        if(this.state.error) return(<div>Błąd</div>);
        if(this.state.loaded) return(
            <div id="team">
                <Routes>
                    <Route path="/" element={
                        <TeamYearComponent url={this.state.years.reduce((l,r) => Number(l.slice(0,4)) > Number(r.slice(0,4)) ? l : r)} />
                        // Automatyczne wybieranie najnowszego teamu
                    }/>
                    {this.state.years.map((i, key) => 
                        <Route path={`${i}`} key={key} element={
                            <TeamYearComponent url={i}/>}
                        />
                    )}
                    
                </Routes>
                <TeamPickerComponent years={this.state.years.map(i => {return { year: i.replace('-', '/'), url: i }})} />
            </div>
        );
    }
}