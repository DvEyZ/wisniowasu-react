import React from 'react';
import { MenuComponent } from '../../reusables/MenuComponent/MenuComponent';
import { FooterComponent } from '../../reusables/FooterComponent/FooterComponent';

export class HomeComponent extends React.Component
{
    render()
    {
        return (
            <div id="home">
                <MenuComponent active="home"/>
                <div id="logo_container">
                    <div id="logo"></div>
                    <svg id="slide_down_icon" viewBox="0 0 247 390" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill:'none', stroke:'#fff', strokeWidth: '20px' }} />
                        <path id="mouse"
                            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                            style={{ fill:'none' ,stroke:'#fff', strokeWidth:'20px' }} />
                    </svg>
                    <div id="slide_down_text">Zjedź na dół by dowiedzieć się więcej</div>

                    <div id='team_image_container'>
                        <div id="moving_gradient"></div>
                        <a id='team_image' href={`${this.props.main_image}?size=1920`} className="progressive replace">
                            <img src={`${this.props.main_image}?size=100`} alt="Zespół" className="preview" />
                        </a>
                    </div>
                </div>
                <h1 className="section_topic">
                    O nas
                </h1>
                <div className="pageblock-full">
                    <div className="card">
                        <div className="card-image">
                        </div>
                        <h2 className="card-title">
                            O nas
                        </h2>
                        <h3 className="card-text">
                            {this.props.description}
                        </h3>
                    </div>
                </div>
                <h2 className="section_topic">
                    Warte uwagi
                </h2>
                <div className="pageblock-full">
                    <div className="buttonsgroup">
                        {this.props.buttons}
                    </div>
                </div>
                <h2 className="section_topic">
                    Nasze atuty
                </h2>
                <div className="pageblock-full">
                    <div className="cardgroup">
                        {this.props.values}
                    </div>
                </div>
                <h2 className="section_topic">
                    Nasze sekcje
                </h2>
                <div className="pageblock-full">
                    <div className="cardgroup">
                        {this.props.sections}
                    </div>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}