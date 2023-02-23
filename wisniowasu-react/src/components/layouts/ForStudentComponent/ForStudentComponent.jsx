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
                    <ForStudentServiceCardComponent 
                        img="icons8-open-door-100.png" 
                        name="Dni otwarte" 
                        description="Młody kandydacie chcesz dowiedzieć się czegoś więcej? Zapraszamy na wirtualny spacer po najciekawszych salach w szkole"
                        link="https://otwarte.wisniowasu.pl/"
                    />
                    <ForStudentServiceCardComponent 
                        img="icons8-link-100.png" 
                        name="Generator linków" 
                        description="Chcesz wygenerować sobie skrócony link z naszym brandem? Nie ma problemu, ta usługa jest dla Ciebie" 
                        link="https://links.wisniowasu.pl/" 
                    />
                    <ForStudentServiceCardComponent 
                        img="icons8-onedrive-100.png" 
                        name="Pliki" 
                        description="Wszystkie pliki będą niedługo tutaj. Grafiki, regulaminy, materiały. Cokolwiek co jest związane z nami i może być publiczne ląduje tu" 
                        link="https://drive.wisniowasu.pl/"
                    />
                    <ForStudentServiceCardComponent 
                        img="icons8-feedback-100.png" 
                        name="Feedback" 
                        description="Twoje zdanie się liczy! Wskazuj co jest ważne dla społeczności szkolnej"
                        link="https://feedback.wisniowasu.pl/"
                    />
                    <ForStudentServiceCardComponent 
                        img="icons8-github-100.png" 
                        name="GitHub" 
                        description="Interesujesz się technologią? Dołącz do naszej organizacji na GitHubie i odbierz masę wspaniałych perków z Github Student Pack!"
                        link="https://warsztaty-tm1.github.io/"
                    />
                    <ForStudentServiceCardComponent 
                        img="icons8-facebook-100.png" 
                        name="Grupa ogólna" 
                        description="Dołącz do grupy całej społeczności szkolnej! Dziel się swoimi opiniami ze wszystkimi"
                        link="https://www.facebook.com/groups/220753918677171/"
                    />
                    <ForStudentServiceCardComponent 
                        img="icons8-discord-100.png" 
                        name="Discord" 
                        description="Dołącz do Discorda szkolnego! Jeśli chcesz pogadać z ludźmi w sekcji to jest właśnie to miejsce"
                        link="https://discord.wisniowasu.pl/"
                    />
                    <ForStudentServiceCardComponent 
                        img="icons8-instagram-100.png" 
                        name="Instagram" 
                        description="Chcesz być na bieżąco z najnowszymi informacjami? Zaobserwuj nas na Instagramie"
                        link="https://instagram.wisniowasu.pl/"
                    />
                </div>
                <FooterComponent />
            </div>
        );
    }
}