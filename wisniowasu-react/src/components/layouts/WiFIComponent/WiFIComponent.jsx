import React from 'react';
import { WiFIYearPickerComponent } from './WiFIYearPickerComponent';
import { Routes, Route } from 'react-router-dom';

export class WiFIComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div id="wifi">
                <WiFIYearPickerComponent years={this.props.years.map(i => {return i.props.year })}/>
                <Routes>
                    <Route path="/*" element={this.props.years.reduce((l,r) => l.props.year > r.props.year ? l : r)}/>
                    {this.props.years.map(i => 
                        <Route key={i.props.year} path={`${i.props.year}/*`} element={i}/>    
                    )}
                </Routes>
            </div>
        );
    }
}