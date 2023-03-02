import React from "react";
import { TeamPickerComponent } from './TeamPickerComponent'
import { MenuComponent } from '../../reusables/MenuComponent/MenuComponent'
import { FooterComponent } from '../../reusables/FooterComponent/FooterComponent'
import { Routes, Route} from "react-router-dom";

import './team.scss';
export class TeamComponent extends React.Component
{
    render()
    {
        return(
            <div id="team">
                <MenuComponent active="team"/>
                <Routes>
                    <Route path="/" element={
                        this.props.years.reduce((l,r) => Number(l.props.year_url.slice(0,4)) > Number(r.props.year_url.slice(0,4)) ? l : r)
                        // Automatyczne wybieranie najnowszego teamu
                    }/>
                    {this.props.years.map(i => 
                        <Route path={`${i.props.year_url}`} element={i}/>    
                    )}
                </Routes>
                <TeamPickerComponent years={this.props.years.map(i => {return { year: i.props.year, url: i.props.year_url }})} />
                <FooterComponent/>
            </div>
        );
    }
}