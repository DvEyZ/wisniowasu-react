import React from "react";
import { TeamPickerComponent } from './TeamPickerComponent'
import { TeamYearComponent } from './TeamYearComponent';
import { Routes, Route } from "react-router-dom";

import './team.scss';
export class TeamComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        
        // Mockup values!!!!
        this.state = {
            years: [
                '2022-23',
                '2021-22'
            ],
            loaded: true
        };
    }
    render()
    {
        if(this.state.loaded) return(
            <div id="team">
                <Routes>
                    <Route path="/" element={
                        <TeamYearComponent url={this.state.years.reduce((l,r) => Number(l.slice(0,4)) > Number(r.slice(0,4)) ? l : r)} />
                        // Automatyczne wybieranie najnowszego teamu
                    }/>
                    {this.state.years.map(i => 
                        <Route path={`${i}`} element={
                            <TeamYearComponent url={i}/>}
                        />
                    )}
                    
                </Routes>
                <TeamPickerComponent years={this.state.years.map(i => {return { year: i.replace('-', '/'), url: i }})} />
            </div>
        );
    }
}