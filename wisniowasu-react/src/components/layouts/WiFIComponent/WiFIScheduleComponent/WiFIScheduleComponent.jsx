import React from "react";
import { WiFIScheduleEntryComponent } from "./WiFIScheduleEntryComponent";

import './schedule.scss'

import scrollreveal from "scrollreveal";

export class WiFIScheduleComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            entries: [
                {
                    hour: '9.30',
                    title: 'Rozpoczęcie WiFI',
                    sections: [
                        {
                            title: 'Krótki wstęp',
                            text: `Wydarzenie rozpocznie się po zebraniu się klas pierwszych, nauczycieli i
                            pracowników na Scenie Głównej w Auli Czekoladowej na drugim piętrze naprzeciwko bufetu, przemówieniem
                            Dyrektora oraz przewodniczącej SU.`
                        },
                        {
                            title: 'Rozpoczęcie działania atrakcji',
                            text: `Zapraszamy m.in. do strefy konsol w sali 416, strefy Minecraft w salach
                            komputerowych na trzecim piętrze, na konkurs szachowy w sali 123, do “Chemosfery” w sali 406, do strefy
                            gier planszowych w auli gier oraz na karaoke w sali 308 i na wiele innych atrakcji. Pełna lista stoisk
                            dostępna będzie na plakatach rozwieszanych w budynku szkolnym oraz na stronie szkoły. Atrakcje stałe
                            będą dostępne przez cały czas między atrakcjami planowymi.`
                        }
                    ]
                },
                {
                    hour: '11.00',
                    title: 'Teleturniej',
                    sections: [
                        {
                            text: `Weź udział w teleturnieju wiedzy o szkole i zdobądź wspaniałe słodkie nagrody! Teleturniej odbędzie się na Scenie Głównej i potrwa około 30 minut.`
                        },
                    ]
                }
            ]
        }
    }
    
    componentDidMount()
    {
        scrollreveal().reveal(this.schedule.childNodes, {
            easing: 'ease-in-out',
            distance: '20px',
        });
    }

    render()
    {
        return(
            <div className="page-container">
                <section className="schedule" ref={node => {this.schedule = node}}>
                    <div className="vertical-line"></div>
                    {this.state.entries.map((value, key) => 
                        <WiFIScheduleEntryComponent key={key} hour={value.hour} title={value.title} sections={value.sections}/>
                    )}
                </section>
            </div>
        );
    }
}