import React from "react";
import { WiFIComponent } from "./WiFIComponent";
import { Routes, Route } from 'react-router-dom';
import { WiFIMenuComponent } from "./WiFIMenuComponent";

export class WiFIYearComponent extends WiFIComponent
{
    render()
    {
        return(
            <div id="wifi-year">
                <WiFIMenuComponent year={this.props.year}/>
                <Routes>
                    <Route path="/" element={this.props.main}/>
                    <Route path="details" element={this.props.details}/>
                    <Route path="schedule" element={this.props.schedule}/>
                    <Route path="contact" element={this.props.contact}/>
                </Routes>
            </div>
        );
    }
}