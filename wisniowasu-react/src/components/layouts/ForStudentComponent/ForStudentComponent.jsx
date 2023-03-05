import React from "react";
import scrollreveal from "scrollreveal";

import './forstudent.scss'

import { ForStudentServiceCardComponent } from './ForStudentServiceCardComponent'

export class ForStudentComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            cards: [
                {
                    img: "../../../img/icons/icons8-open-door-100.png",
                    name: "Dni otwarte" ,
                    description: "Młody kandydacie chcesz dowiedzieć się czegoś więcej? Zapraszamy na wirtualny spacer po najciekawszych salach w szkole",
                    link: "https://otwarte.wisniowasu.pl/"
                },
                {
                    img: "../../../img/icons/icons8-link-100.png",
                    name: "Generator linków",
                    description: "Chcesz wygenerować sobie skrócony link z naszym brandem? Nie ma problemu, ta usługa jest dla Ciebie",
                    link: "https://links.wisniowasu.pl/" 
                },
                {
                    img: "../../../img/icons/icons8-onedrive-100.png",
                    name: "Pliki",
                    description: "Wszystkie pliki będą niedługo tutaj. Grafiki, regulaminy, materiały. Cokolwiek co jest związane z nami i może być publiczne ląduje tu",
                    link: "https://drive.wisniowasu.pl/"
                },
                {
                    img: "../../../img/icons/icons8-feedback-100.png",
                    name: "Feedback",
                    description: "Twoje zdanie się liczy! Wskazuj co jest ważne dla społeczności szkolnej",
                    link: "https://feedback.wisniowasu.pl/"
                },
                {
                    img: "../../../img/icons/icons8-github-100.png", 
                    name: "GitHub",
                    description: "Interesujesz się technologią? Dołącz do naszej organizacji na GitHubie i odbierz masę wspaniałych perków z Github Student Pack!",
                    link: "https://warsztaty-tm1.github.io/"
                },
                {
                    img: "../../../img/icons/icons8-facebook-100.png",
                    name: "Grupa ogólna",
                    description: "Dołącz do grupy całej społeczności szkolnej! Dziel się swoimi opiniami ze wszystkimi",
                    link: "https://www.facebook.com/groups/220753918677171/"
                },
                {
                    img: "../../../img/icons/icons8-discord-100.png",
                    name: "Discord",
                    description: "Dołącz do Discorda szkolnego! Jeśli chcesz pogadać z ludźmi w sekcji to jest właśnie to miejsce",
                    link: "https://discord.wisniowasu.pl/"
                },
                {
                    img: "../../../img/icons/icons8-instagram-100.png",
                    name: "Instagram",
                    description: "Chcesz być na bieżąco z najnowszymi informacjami? Zaobserwuj nas na Instagramie",
                    link: "https://instagram.wisniowasu.pl/"
                }
            ],
            loaded: true
        }
    }
    componentDidMount()
    {
        scrollreveal().reveal(this.services.childNodes, {
            easing: 'ease-in-out',
            distance: '20px',
        });
    }

    render()
    {
        if(this.state.loaded) return (
            <div className="for_student">
                <div className="title_box">
                    <h1 className="title_box_text">
                        DLA UCZNIA
                    </h1>
                </div>
                <div id="services_container" ref={node => {this.services = node}}>
                    {this.state.cards.map((value, key) => 
                        <ForStudentServiceCardComponent key={key} img={value.img} name={value.name} description={value.description} link={value.link}/>
                    )}
                </div>
            </div>
        );
    }
}