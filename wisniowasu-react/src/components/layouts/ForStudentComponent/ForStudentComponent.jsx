import React from "react";
import { ForStudentServiceCardComponent } from "./ForStudentServiceCardComponent/ForStudentServiceCardComponent.jsx"
import { FooterComponent } from '../../reusables/FooterComponent/FooterComponent.jsx'
import { MenuComponent } from '../../reusables/MenuComponent/MenuComponent.jsx'

export class ForStudentComponent extends React.Component
{
    render()
    {
        return (
            <div className="for_student">
                <MenuComponent active="forstudent" />
                <div className="title_box">
                    <h1 className="title_box_text">
                        DLA UCZNIA
                    </h1>
                </div>
                <div id="services_container">
                    {this.props.cards}
                </div>
                <FooterComponent />
            </div>
        );
    }
}