import React from "react";
import { Routes, Route } from 'react-router-dom';
import { WiFIMenuComponent } from "./WiFIMenuComponent";
import { WiFIMainComponent } from './WiFIMainComponent';
import { WiFIDetailsComponent } from './WiFIDetailsComponent';
import { WiFIScheduleComponent } from './WiFIScheduleComponent';
import { WiFIContactComponent } from './WiFIContactComponent';

export class WiFIYearComponent extends React.Component
{
    render()
    {
        return(
            <div id="wifi-year">
                <WiFIMenuComponent year={this.props.year}/>
                <Routes>
                    <Route path="/" element={<WiFIMainComponent year={this.props.year}/>}/>
                    <Route path="details" element={<WiFIDetailsComponent year={this.props.year}/>}/>
                    <Route path="schedule" element={<WiFIScheduleComponent year={this.props.year}/>}/>
                    <Route path="contact" element={<WiFIContactComponent year={this.props.year}/>}/>
                </Routes>
            </div>
        );
    }
}