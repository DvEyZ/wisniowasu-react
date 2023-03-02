import React from "react";
import { FooterComponent } from '../../reusables/FooterComponent/FooterComponent.jsx'
import { MenuComponent } from '../../reusables/MenuComponent/MenuComponent.jsx'
import scrollreveal from "scrollreveal";

import './forstudent.scss'

export class ForStudentComponent extends React.Component
{
    componentDidMount()
    {
        scrollreveal().reveal(this.services.childNodes, {
            easing: 'ease-in-out',
            distance: '20px',
        });
    }

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
                <div id="services_container" ref={node => {this.services = node}}>
                    {this.props.cards}
                </div>
                <FooterComponent />
            </div>
        );
    }
}