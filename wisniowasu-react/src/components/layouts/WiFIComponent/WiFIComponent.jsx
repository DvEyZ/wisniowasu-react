import React from 'react';
import { WiFIYearPickerComponent } from './WiFIYearPickerComponent';
import { WiFIYearComponent } from './WiFIYearComponent';
import { Routes, Route } from 'react-router-dom';

import { cms } from '../../../CMS';

export class WiFIComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        // Mockup values!!!
        this.state = {
            years: [],
            loaded: false,
            error: false
        }
    }

    componentDidMount()
    {
        fetch(`${cms}/api/wifis`).then(value => 
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
        if(this.state.error) return(<div>Błąd</div>)
        if(this.state.loaded) return(
            <div id="wifi">
                <div className="title_box">
                    <h1 className="title_box_text">
                        Wiśniowy Festiwal Inicjatyw
                    </h1>
                </div>
                <Routes>
                    <Route path="/*" element={<WiFIYearComponent year={this.state.years.reduce((l,r) => l > r ? l : r)}/>}/>
                    {this.state.years.map(i => 
                        <Route key={i} path={`${i}/*`} element={<WiFIYearComponent year={i}/>}/>    
                    )}
                </Routes>
                <WiFIYearPickerComponent years={this.state.years}/>
            </div>
        );
    }
}