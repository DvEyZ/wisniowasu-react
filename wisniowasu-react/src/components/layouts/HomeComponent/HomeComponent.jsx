import React from 'react';
import { HomeMinicardComponent } from './HomeMinicardComponent/HomeMinicardComponent';
import { HomeButtonComponent } from './HomeButtonComponent/HomeButtonComponent';
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
                        <a id='team_image' data-href="../../../img/team/2021_22/team.jpg?size=1920" className="progressive replace">
                            <img src="../../../img/team/2021_22/team.jpg?size=100" alt="Zespół" className="preview" />
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
                            Jesteśmy grupą osób, które połączyła chęć zmian. Mimo różnych kompetencji i spojrzenia na świat, każdy z nas
                            chce osiągnąć ten sam cel. Wykorzystując ten fakt, powstały poszczególne sekcje, pozwalające każdemu
                            realizować się w zakresie, w którym czuje się pewnie i w którym się spełnia. Dzięki temu mamy realny wpływ
                            na to, co dzieje się w szkole i sprawiamy, że jest ona miejscem, w którym potrzeby uczniów naprawdę się
                            liczą. Nie działamy jednak tylko w zakresie szkolnym, ponieważ nie lubimy ograniczeń. Prowadzimy również
                            projekty na skalę Warszawy. Zdajemy sobie sprawę, że do zmian, które chcemy wprowadzać w życie, potrzebny
                            jest zespół. Samorząd tworzą więc ci, którym zależy, by odpowiedzialnie i świadomie planować działania,
                            które udoskonalą i poprawią życie we wspólnocie, jaką jest szkoła.
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
                        <HomeMinicardComponent
                            img="icons8-innovation-100.png"
                            alt="Innowacja"
                            title="Innowacyjność"
                            text="Samorząd Wiśniowej jest samorządem chcącym wprowadzać wiele nowych rozwiązań
                            mających na celu ułatwić funkcjonowanie społeczności. Stawiamy na proste i skuteczne rozwiązania, takie
                            jak tablica projektów Trello, aplikacja szkoły ze wszystkimi potrzebnymi funkcjami, czy chociażby cała
                            działalność pozaszkolna samorządu, stawiająca na rozwiązania przyszłościowe"
                        />
                        <HomeMinicardComponent
                            img="icons8-people-working-together-100.png"
                            alt="Komunikacja"
                            title="Komunikacja"
                            text="Nasz SU jest instytucją bardzo otwartą na uczniów, którzy zawsze mogą skonsultować
                            swoje wątpliwości, lub po prostu wyrazic swoją opinię na temat działań SU, a jego opinia nigdy nie
                            zostanie pominięta"
                        />
                        <HomeMinicardComponent
                            img="icons8-intelligence-100.png"
                            alt="Kreatywność"
                            title="Kreatywność"
                            text="Można powiedzieć że naszemu zespołowi bardziej brakuje ludzi, niż pomysłów. W
                            samorządzie zawsze jest co robić, a projekty są innowacyjne i szeroko wykraczające poza działania
                            szkolne. Nasze inicjatywy mają zasięg całej Warszawy, a rozwiązania stosowane wewnątrz są oryginalne i
                            sprawdzają się w działaniu"
                        />
                        <HomeMinicardComponent
                            img="icons8-guarantee-100.png"
                            alt="Jakość"
                            title="Jakość"
                            text="Nasza praca jest rzetelna, a każde przydzielone zadanie, zostanie wykonane na 101%
                            możliwości. Nie jest to miejsce w którym rzeczy robi się &quot;na odwal&quot; każdy projekt przed oddaniem musi
                            być dopięty na ostatni guzik"
                        />
                        <HomeMinicardComponent
                            img="icons8-hierarchy-100.png"
                            alt="Organizacja"
                            title="Organizacja"
                            text="Dzięki kompetentnemu zespołowi i odpowiedzialnemu zarządzaniu, w samorządzie nic
                            nie dzieje się przypadkiem. Każdy ma jasno przydzielone zadanie, a każde szkolne wydarzenie ma ustalony
                            harmonogram, w którym nie ma miejsca na przypadek"
                        />
                        <HomeMinicardComponent
                            img="icons8-smart-card-100.png"
                            alt="Nowoczesność"
                            title="Nowoczesność"
                            text="Jako samorząd posiadamy rozbudowaną infrastrukturę IT, która umożliwia nam
                            dynamiczne uruchamianie nowych usług dla społeczności szkolnej. Nie boimy się nowych rozwiązań. Dzięki
                            wspraciu i zainteresowaniu społeczności szkolnej jako pierwsza szkoła w Warszawie wprowadziliśmy
                            eLegitymacje oraz mLegitymacje."
                        />
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