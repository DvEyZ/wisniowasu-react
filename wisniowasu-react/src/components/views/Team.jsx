import { TeamComponent } from "../layouts/TeamComponent/TeamComponent";
import { TeamYearComponent } from "../layouts/TeamComponent/TeamYearComponent";
import { TeamPersonComponent } from "../layouts/TeamComponent/TeamPersonComponent";

const Team = () => 
    <TeamComponent years={[
        <TeamYearComponent
            key={1} year="2022/23" year_url="2022-23"
            management={[
                <TeamPersonComponent
                    key={1}
                    photo="../../../img/team/2022_23/k_tyszkiewicz.jpg?size=400"
                    icon="../../../img/icons/icons8-manager-100.png"
                    name="Kornel Tyszkiewicz"
                    role="Przewodniczący"
                    text="Człowiek wielu talentów, filantrop, osoba nieszablonowa, wielowymiarowy, nieosiągalny dla bytów tego świata, skromny
                    ale zarazem lubiący pokazać złoty perłowy pazur, kopalnia pomysłów, naszpikowany ekspresyjnym wyrażaniem siebie twórca."
                />
            ]}
            sections={[
                
            ]}
        />,
        <TeamYearComponent key={2} year="2021/22" year_url="2021-22"/>
    ]}/>

export default Team;