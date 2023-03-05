import React from "react";
import { WiFIMainMinicardComponent } from "./WiFIMainMinicardComponent";
import { WiFISponsorComponent } from "./WiFISponsorComponent";

import './wifi.scss';
import { WiFIPartnerComponent } from "./WiFIPartnerComponent";

export class WiFIMainComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            logo: '../../../img/logos/logo_wifi_2021_cropped.png',
            logo_alt: 'WiFI 2021',
            description: 'Wiśniowy Festiwal Inicjatyw to festiwal szkolny integrujący całą społeczność szkolną - uczniów, nauczycieli, dyrekcję oraz pracowników szkoły. Chcemy, aby przestrzeń szkolna kojarzyła się nie tylko z nauką, ale również z bezpiecznym miejscem, które daje możliwość rozwoju i pozyskiwania nowych doświadczeń. Chcemy połączyć zdobywanie wiedzy z zabawą i stworzyć możliwość na integrację, zacieśnianie relacji z równieśnikami oraz przestrzeń na poznawanie nowych pasji i zainteresowań.',
            about: [
                {
                    title: "Problem społeczny",
                    text: "Zdajemy sobie sprawę, jak nieodwracalne skutki społeczne mogła spowodować pandemia. Chcemy spróbować zostawić za sobą miesiące izolacji, brak możliwości spotykania się i socjalizowania z rówieśnikami i umożliwić obecnym oraz nowym uczniom szkoły jak najłatwiejszą adaptację w, mogłoby wydawać się takiej samej, a jednak całkiem innej i nowej rzeczywistości. Pragniemy, aby wrześniowy powrót do szkoły po takiej przerwie był przeprowadzony w dobrej i sprzyjającej uczniom atmosferze oraz niósł za sobą pozytywne odczucia, a nie strach i stres. "
                },
                {
                    title: "Cel",
                    text: "Chcemy zintegrować całą społeczność szkolną, w tym również dyrekcję, nauczycieli i pracowników szkoły, a także pomóc zaklimatyzować się nowym uczniom. Przestrzeń szkolna powinna być miejscem, gdzie można rozwijać się i zdobywać nowe doświadczenia, ale także poznawać nowe osoby tworząc niezapomniane wspomnienia"
                }
            ],
            sponsors: [
                {
                    img: "../../../img/logos/sii4.png",
                    link: "https://sii.pl/",
                    alt: "Sii"
                }
            ],
            partners: [
                {
                    img: "../../../img/wifi/perunite_logo.png",
                    alt: "Perunite",
                    title: "Kim jest PERUNITE®?",
                    content: `PERUNITE® to młody zespół liczący aż 30 osób, który tworzy content (tzn. serwery,
                        modpacki, mapy, pluginy, mody itp.) w oparciu o grę Minecraft™. Ich celem jest zapewnienie
                        satysfakcjonującej i dojrzałej rozgrywki dla graczy, przełamując tym stereotyp nieprofesjonalnego
                        contentu w społeczności MC. Aby wyjść na przeciw oczekiwaniom odbiorców przygotowują innowacyjne narzędzia
                        przyśpieszające i standaryzujące pracę z silnikiem MC.`,
                    facebook: "https://www.facebook.com/perunite/",
                    discord: "https://discord.gg/Cbzs2JXw2h",
                    twitter: "https://twitter.com/perunite/",
                    youtube: "https://www.youtube.com/channel/UCQmzUmkE1XEyE9biDdlt9kA/"
                }
            ]
        }
    }

    render()
    {
        return(
            <div>
                <div className="section_topic alt-mobile-anim" id="countdown">Czas do wydarzenia: NaN</div>
                    <div className="pageblock-full" id="description-container">
                        <div className="minicard" id="wifi_description">
                            <img className="minicard-icon lazyload" id="wifi-logo" alt={this.state.logo_alt}
                                src={this.state.logo} />
                            <h3 className="minicard-title" id="wifi_description_title">Wiśniowy Festiwal Inicjatyw</h3>
                            <h3 className="minicard-text">{this.state.description}
                            </h3>
                            {this.state.video_link ? <a href={this.state.video_link} className="gradient-button">Zobacz film promocyjny</a> : null}
                        </div>
                    </div>
                <div className="section_topic">O WiFI</div>
                <div className="pageblock-full">
                    <div className="cardgroup" id="about-container">
                        {this.state.about.map((value, key) => 
                            <WiFIMainMinicardComponent key={key} title={value.title} text={value.text}/>
                        )}
                    </div>
                </div>
                <div className="section_topic">Sponsorzy</div>
                <div className="sponsors">
                    {this.state.sponsors.map((value, key) => 
                        <WiFISponsorComponent key={key} img={value.img} alt={value.alt} link={value.link} /> 
                    )}
                </div>
                <p className="sponsors__disclaimer">{this.state.sponsors_disclaimer}</p>
                <div className="section_topic">Partnerzy</div>
                <div className="pageblock-full" style={{'flexFlow': 'row wrap', 'alignItems': 'stretch'}}>
                    {this.state.partners.map((value, key) =>
                        <WiFIPartnerComponent key={key} img={value.img} alt={value.alt} title={value.title} content={value.content} 
                            facebook={value.facebook? value.facebook : undefined} discord={value.discord? value.discord : undefined}
                            twitter={value.twitter? value.twitter : undefined} instagram={value.instagram? value.instagram : undefined} 
                            youtube={value.youtube? value.youtube : undefined}
                        />
                    )}
                </div>
            </div>
        );
    }
}