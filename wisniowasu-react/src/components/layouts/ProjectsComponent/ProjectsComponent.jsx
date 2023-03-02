import React from 'react';
import { MenuComponent } from '../../reusables/MenuComponent/MenuComponent.jsx';
import { FooterComponent } from '../../reusables/FooterComponent/FooterComponent.jsx';
import scrollreveal from 'scrollreveal';

import './projects.scss'

export class ProjectsComponent extends React.Component
{
    componentDidMount()
    {
        scrollreveal().reveal(this.cards, {
            easing: 'ease-in-out',
            distance: '20px',
          });
    }

    render()
    {
        return (
            <div className="projects">
                <MenuComponent active="projects"/>
                <div className="title_box">
                    <h1 className="title_box_text">PROJEKTY</h1>
                </div>
                <div className="pageblock_timeline">
                    <div id="timeline_line"></div>
                    <div id="timeline_container">
                        <div className="timeline_card" ref={node => {this.cards = node}}>
                            { this.props.cards }
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}