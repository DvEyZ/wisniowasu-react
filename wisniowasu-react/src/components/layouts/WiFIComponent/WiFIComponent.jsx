import React from 'react';
import { WiFIYearPickerComponent } from './WiFIYearPickerComponent';
import { WiFIYearComponent } from './WiFIYearComponent';
import { Routes, Route } from 'react-router-dom';

export class WiFIComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        // Mockup values!!!
        this.state = {
            years: ['2021'],
            loaded: true
        }
    }
    
    render()
    {
        if(this.state.loaded) return(
            <div id="wifi">
                <div className="title_box">
                    <h1 className="title_box_text">
                        Wiśniowy Festiwal Inicjatyw
                    </h1>
                </div>
                <WiFIYearPickerComponent years={this.state.years}/>
                <Routes>
                    <Route path="/*" element={<WiFIYearComponent year={this.state.years.reduce((l,r) => l > r ? l : r)}/>}/>
                    {this.state.years.map(i => 
                        <Route key={i} path={`${i}/*`} element={<WiFIYearComponent year={i}/>}/>    
                    )}
                </Routes>
            </div>
        );
    }
}