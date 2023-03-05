import React from 'react';
import VanillaTilt from 'vanilla-tilt';

import './home.scss'
import scrollreveal from 'scrollreveal';

export class HomeComponent extends React.Component
{
    componentDidMount()
    {
        VanillaTilt.init(this.logo, {
            reverse: true, // reverse the tilt direction
            max: 10, // max tilt rotation (degrees)
            perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
            speed: 1000, // Speed of the enter/exit transition
            transition: true, // Set a transition on enter/exit.
            reset: true, // If the tilt effect has to be reset on exit.
            'full-page-listening': true,
        });

        window.addEventListener('scroll', (e) => {
            var viewH = window.innerHeight;
            var scrollPosition = document.scrollingElement.scrollTop;
            var body = document.body;

            if (scrollPosition / viewH > 0.7) {
                body.classList.add('nav-bg');
            } 
            else {
                if (body.classList.contains('nav-bg')) {
                body.classList.remove('nav-bg');
                }
            }
        });

        scrollreveal().reveal(this.buttons.childNodes, {
            easing: 'ease-in-out',
            distance: '20px',
        });
        scrollreveal().reveal(this.values.childNodes, {
            easing: 'ease-in-out',
            distance: '20px',
        });
        scrollreveal().reveal(this.sections.childNodes, {
            easing: 'ease-in-out',
            distance: '20px',
        });
    }

    render()
    {
        return (
            <div id="home">
                <div id="logo_container" style={{'$imageurl': `url('/../public/img/team/2019_20/team.jpg?size=1920')`}}>
                    <div id="logo" ref={node => {this.logo = node}}></div>
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
                        <div id='team_image' data-href={this.props.main_image} className="progressive replace">
                            <img src={this.props.main_image} alt="Zespół" className="preview" />
                        </div>
                    </div>
                </div>
                <h1 className="section_topic">
                    O nas
                </h1>
                <div className="pageblock-full">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.props.description_image}/>
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
                    <div className="buttonsgroup" ref={node => {this.buttons = node}}>
                        {this.props.buttons}
                    </div>
                </div>
                <h2 className="section_topic">
                    Nasze atuty
                </h2>
                <div className="pageblock-full">
                    <div className="cardgroup" ref={node => {this.values = node}}>
                        {this.props.values}
                    </div>
                </div>
                <h2 className="section_topic">
                    Nasze sekcje
                </h2>
                <div className="pageblock-full">
                    <div className="cardgroup cardgroup-small" ref={node => {this.sections = node}}>
                        {this.props.sections}
                    </div>
                </div>
            </div>
        );
    }
}