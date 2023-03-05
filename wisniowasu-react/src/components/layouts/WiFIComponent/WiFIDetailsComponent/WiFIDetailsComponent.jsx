import React from "react";
import { WiFIDetailsCardComponent } from "./WiFIDetailsCardComponent";

import './details.scss';

export class WiFIDetailsComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        
        // Mockup values!!!
        this.state = {
            cards: [
                {
                    img: "../../../img/wifi/atrakcje/strefa_minecraft_0.jpg",
                    caption: "Zespół PERUNITE®",
                    title: "Strefa Minecraft",
                    text: `Własny, ogromny serwer Minecraft, z którego będzie można skorzystać podczas
                    wydarzenia. Tworzenie go, dostarcza nam dużo wrażeń, a wspólne korzystanie w jednym pomieszczeniu dostarczy
                    jeszcze więcej, szczególnie, że to szkoła o zacięciu informatycznym. :)`
                }
            ]
        }
    }

    render()
    {
        return(
            <div>
                <h2 class="section_topic alt-mobile-anim">Poznaj listę atrakcji</h2>
                <div class="pageblock-full">
                    <h3 class="sub-header" style={{margin: '-20px 0 10px'}}>i ich organizatorów</h3>
                </div>
                {this.state.cards.map((value, key) =>
                    <WiFIDetailsCardComponent key={key} img={value.img} caption={value.caption} title={value.title} text={value.text}/>
                )}
            </div>
        );
    }
}