import React from 'react';
import VanillaTilt from 'vanilla-tilt';

import './home.scss'
import scrollreveal from 'scrollreveal';

import { HomeMinicardComponent } from './HomeMinicardComponent';
import { HomeButtonComponent } from './HomeButtonComponent';

export class HomeComponent extends React.Component
{
    constructor(props)
    {
        super(props);

        // Mockup values !!!
        this.state = {
            main_image: '../../../img/team/2021_22/team.jpg',
            description_image: '../../../img/team/2021_22/alt_team.jpg',
            description: `Jesteśmy grupą osób, które połączyła chęć zmian. Mimo różnych kompetencji i spojrzenia na świat, każdy z nas
            chce osiągnąć ten sam cel. Wykorzystując ten fakt, powstały poszczególne sekcje, pozwalające każdemu
            realizować się w zakresie, w którym czuje się pewnie i w którym się spełnia. Dzięki temu mamy realny wpływ
            na to, co dzieje się w szkole i sprawiamy, że jest ona miejscem, w którym potrzeby uczniów naprawdę się
            liczą. Nie działamy jednak tylko w zakresie szkolnym, ponieważ nie lubimy ograniczeń. Prowadzimy również
            projekty na skalę Warszawy. Zdajemy sobie sprawę, że do zmian, które chcemy wprowadzać w życie, potrzebny
            jest zespół. Samorząd tworzą więc ci, którym zależy, by odpowiedzialnie i świadomie planować działania,
            które udoskonalą i poprawią życie we wspólnocie, jaką jest szkoła.`,
            values: [
                {
                img: "../../../img/icons/icons8-innovation-100.png",
                alt: "Innowacja",
                title: "Innowacyjność",
                text: `Samorząd Wiśniowej jest samorządem chcącym wprowadzać wiele nowych rozwiązań
                    mających na celu ułatwić funkcjonowanie społeczności. Stawiamy na proste i skuteczne rozwiązania, takie
                    jak tablica projektów Trello, aplikacja szkoły ze wszystkimi potrzebnymi funkcjami, czy chociażby cała
                    działalność pozaszkolna samorządu, stawiająca na rozwiązania przyszłościowe`
                },
                {
                    img: "../../../img/icons/icons8-people-working-together-100.png",
                    alt: "Komunikacja",
                    title: "Komunikacja",
                    text: `Nasz SU jest instytucją bardzo otwartą na uczniów, którzy zawsze mogą skonsultować
                        swoje wątpliwości, lub po prostu wyrazic swoją opinię na temat działań SU, a jego opinia nigdy nie
                        zostanie pominięta`
                },
                {
                    img: "../../../img/icons/icons8-intelligence-100.png",
                    alt: "Kreatywność",
                    title: "Kreatywność",
                    text: `Można powiedzieć że naszemu zespołowi bardziej brakuje ludzi, niż pomysłów. W
                        samorządzie zawsze jest co robić, a projekty są innowacyjne i szeroko wykraczające poza działania
                        szkolne. Nasze inicjatywy mają zasięg całej Warszawy, a rozwiązania stosowane wewnątrz są oryginalne i
                        sprawdzają się w działaniu`
                },
                {
                    img: "../../../img/icons/icons8-guarantee-100.png",
                    alt: "Jakość",
                    title: "Jakość",
                    text: `Nasza praca jest rzetelna, a każde przydzielone zadanie, zostanie wykonane na 101%
                        możliwości. Nie jest to miejsce w którym rzeczy robi się "na odwal", każdy projekt przed oddaniem musi
                        być dopięty na ostatni guzik.`
                },
                {
                    img: "../../../img/icons/icons8-hierarchy-100.png",
                    alt: "Organizacja",
                    title: "Organizacja",
                    text: `Dzięki kompetentnemu zespołowi i odpowiedzialnemu zarządzaniu, w samorządzie nic
                        nie dzieje się przypadkiem. Każdy ma jasno przydzielone zadanie, a każde szkolne wydarzenie ma ustalony
                        harmonogram, w którym nie ma miejsca na przypadek`
                },
                {
                    img: "../../../img/icons/icons8-smart-card-100.png",
                    alt: "Nowoczesność",
                    title: "Nowoczesność",
                    text: `Jako samorząd posiadamy rozbudowaną infrastrukturę IT, która umożliwia nam
                        dynamiczne uruchamianie nowych usług dla społeczności szkolnej. Nie boimy się nowych rozwiązań. Dzięki
                        wspraciu i zainteresowaniu społeczności szkolnej jako pierwsza szkoła w Warszawie wprowadziliśmy
                        eLegitymacje oraz mLegitymacje.`
                }
            ],
            sections: [
                {
                    img: "../../../img/icons/icons8-mind-map-100.png",
                    alt: "Organizacja",
                    title: "Sekcja Organizacyjna",
                    text: `Odpowiada za organizację wydarzeń w szkole i poza nią, po cichu pociąga za sznurki wszystkiego, co na Wiśniowej wychodzi z inicjatywy uczniów.`
                },
                {
                    img: "../../../img/icons/icons8-job-seeker-100.png",
                    alt: "Prawna",
                    title: "Sekcja Prawna",
                    text: `Wprowadza w tajniki dobrej administracji wspierając samorząd merytorycznie poprzez negocjacje, tworzenie aktów prawnych i archiwizację wszystkich podejmowanych działań. Zapewnia pozostałym sekcjom pole do pracy.`
                },
                {
                    img: "../../../img/icons/icons8-maintenance-100.png",
                    alt: "Technologia",
                    title: "Sekcja Techniczna",
                    text: `Grupa miłośników technologicznych nowinek, zapewniająca naszej szkole wiele nowatorskich rozwiązań, wsparcie techniczne eventów oraz działań su w internecie poza sieciami społecznościowymi.`
                },
                {
                    img: "../../../img/icons/icons8-social-network-100.png",
                    alt: "Media",
                    title: "Sekcja Medialna",
                    text: `Projektuje i publikuje treści w mediach społecznościowych co pozwala na dobrą
                    komunikacje z uczniami. Ponadto wykonują zdjęcia różnych wydarzeń odbywających się w naszej szkole.`
                },
                {
                    img: "../../../img/icons/icons8-musical-notes-100.png",
                    alt: "Sztuka",
                    title: "Sekcja Artystyczna",
                    text: "Sekcja zrzeszająca twórców z wielu dziedzin sztuki. Umożliwia uczniom zaprezentowanie swoich talentów oraz przeprowadza konkursy z nagrodami umożliwiając dalszy rozwój w danym kierunku"
                }
            ],
            buttons: [
                {
                    href: "/projects/",
                    img: "../../../img/projects/projects.jpg?size=600",
                    alt: "Projekty Wiśniowa SU",
                    button_text: "Projekty",
                },
                {
                    href: "/wifi/",
                    img: "../../../img/wifi/wifi_przycisk.jpg",
                    alt: "WiFI 2021",
                    button_text: "WiFI 2021"
                },
                {
                    href: "https://pasje.wisniowasu.pl/",
                    img: "../../../img/logos/konferencja.svg",
                    alt: "Konferencja Samorządów Warszawskich",
                    button_text: "Konferencja 2020"
                },
                {
                    href: "https://mc.wisniowasu.pl/",
                    img: "../../../img/logos/logo_cherrycraft.png?size=600",
                    alt: "CherryCraft: Retold",
                    button_text: "CherryCraft: Retold"
                }
            ],
            loaded: true
        }
        // END
    }

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
        if(this.state.loaded) return (
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
                        <div id='team_image' data-href={this.state.main_image} className="progressive replace">
                            <img src={this.state.main_image} alt="Zespół" className="preview" />
                        </div>
                    </div>
                </div>
                <h1 className="section_topic">
                    O nas
                </h1>
                <div className="pageblock-full">
                    <div className="card">
                        <div className="card-image">
                            <img src={this.state.description_image}/>
                        </div>
                        <h2 className="card-title">
                            O nas
                        </h2>
                        <h3 className="card-text">
                            {this.state.description}
                        </h3>
                    </div>
                </div>
                <h2 className="section_topic">
                    Warte uwagi
                </h2>
                <div className="pageblock-full">
                    <div className="buttonsgroup" ref={node => {this.buttons = node}}>
                        {this.state.buttons.map((value, index) => 
                            <HomeButtonComponent key={index} href={value.href} img={value.img} alt={value.alt} button_text={value.button_text}/>
                        )}
                    </div>
                </div>
                <h2 className="section_topic">
                    Nasze atuty
                </h2>
                <div className="pageblock-full">
                    <div className="cardgroup" ref={node => {this.values = node}}>
                        {this.state.values.map((value, index) => 
                            <HomeMinicardComponent key={index} img={value.img} alt={value.alt} title={value.title} text={value.text}/>
                        )}
                    </div>
                </div>
                <h2 className="section_topic">
                    Nasze sekcje
                </h2>
                <div className="pageblock-full">
                    <div className="cardgroup cardgroup-small" ref={node => {this.sections = node}}>
                        {this.state.sections.map((value, index) =>
                            <HomeMinicardComponent key={index} img={value.img} alt={value.alt} title={value.title} text={value.text}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}