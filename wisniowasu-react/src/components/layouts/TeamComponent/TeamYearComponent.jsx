import React from "react";
import scrollreveal from "scrollreveal";
import { TeamPersonComponent } from './TeamPersonComponent';

export class TeamYearComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        // Mockup values!!!
        this.state = {
            year: this.props.url.replace('-', '/'),
            management: [
                <TeamPersonComponent
                    key={1}
                    photo="../../../img/team/2022_23/k_tyszkiewicz.jpg?size=400"
                    icon="../../../img/icons/icons8-manager-100.png"
                    name="Kornel Tyszkiewicz"
                    role="Przewodniczący"
                    text="Człowiek wielu talentów, filantrop, osoba nieszablonowa, wielowymiarowy, nieosiągalny dla bytów tego świata, skromny
                    ale zarazem lubiący pokazać złoty perłowy pazur, kopalnia pomysłów, naszpikowany ekspresyjnym wyrażaniem siebie twórca."
                />
            ],
            loaded: true
        }
    }

    componentDidMount()
    {
        scrollreveal().reveal(this.management_cards, {
            easing: 'ease-in-out',
            distance: '20px',
        });
        scrollreveal().reveal(this.section_cards, {
            easing: 'ease-in-out',
            distance: '20px',
        });
    }

    render()
    {
        if(this.state.loaded) return (
            <div className="team_year">
                <div className="title_box">
                <h1 className="title_box_text">
                    ZESPÓŁ <span className="title_box_date">{this.state.year}</span>
                </h1>
            </div>
            <div className="fullpadding" id="teamcontainer">
                <p className="category">Zarząd</p>
                <div className="human-cardcontainer" ref={node => {this.management_cards = node}}>
                    {this.state.management}
                </div>
                <div className="spacer"></div>
                <p className="category">Przewodniczący Sekcji</p>
                <div className="human-cardcontainer" ref={node => {this.section_cards = node}}>
                    {this.state.sections}
                </div>
            </div>
        </div>
        );
    }
}