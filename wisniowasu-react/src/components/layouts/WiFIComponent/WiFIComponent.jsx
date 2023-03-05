import React from 'react';
import { WiFIYearPickerComponent } from './WiFIYearPickerComponent';
import { Routes, Route } from 'react-router-dom';

export class WiFIComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        this.current = this.props.years.reduce((l,r) => Number(l.props.year_url.slice(0,4)) > Number(r.props.year_url.slice(0,4)) ? l : r);
    }
    
    render()
    {
        return(
            <div id="wifi">
                <WiFIYearPickerComponent years={this.props.years.map(i => {return { year: i.props.year, url: i.props.year_url }})}/>
                <Routes>
                    <Route path="/" element={this.current}/>
                    {this.props.years.map(i => 
                        <Route path={`${i.props.year_url}`} element={i}/>    
                    )}
                </Routes>
            </div>
        );
    }
}