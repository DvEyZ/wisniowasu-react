import React from "react";
import { WiFIComponent } from "./WiFIComponent";
import { Routes, Route } from 'react-router-dom';

export class WiFIYearComponent extends WiFIComponent
{
    render()
    {
        return(
            <div id="wifi-year">
                <Routes>
                    <Route path="/" element={this.main}/>
                    <Route path="details" element={this.details}/>
                    <Route path="schedule" element={this.schedule}/>
                    <Route path="contact" element={this.contact}/>
                </Routes>
            </div>
        );
    }
}