import { HomeComponent } from "../layouts/HomeComponent/HomeComponent";
import { HomeButtonComponent } from "../layouts/HomeComponent/HomeButtonComponent";
import { HomeMinicardComponent } from "../layouts/HomeComponent/HomeMinicardComponent";

const Home = () =>
    <HomeComponent
        main_image="../../../img/team/2021_22/team.jpg"
        description="Jesteśmy grupą osób, które połączyła chęć zmian. Mimo różnych kompetencji i spojrzenia na świat, każdy z nas
            chce osiągnąć ten sam cel. Wykorzystując ten fakt, powstały poszczególne sekcje, pozwalające każdemu
            realizować się w zakresie, w którym czuje się pewnie i w którym się spełnia. Dzięki temu mamy realny wpływ
            na to, co dzieje się w szkole i sprawiamy, że jest ona miejscem, w którym potrzeby uczniów naprawdę się
            liczą. Nie działamy jednak tylko w zakresie szkolnym, ponieważ nie lubimy ograniczeń. Prowadzimy również
            projekty na skalę Warszawy. Zdajemy sobie sprawę, że do zmian, które chcemy wprowadzać w życie, potrzebny
            jest zespół. Samorząd tworzą więc ci, którym zależy, by odpowiedzialnie i świadomie planować działania,
            które udoskonalą i poprawią życie we wspólnocie, jaką jest szkoła."
        
        values={[
            <HomeMinicardComponent
                img="../../../img/icons/icons8-innovation-100.png"
                alt="Innowacja"
                title="Innowacyjność"
                text="Samorząd Wiśniowej jest samorządem chcącym wprowadzać wiele nowych rozwiązań
                    mających na celu ułatwić funkcjonowanie społeczności. Stawiamy na proste i skuteczne rozwiązania, takie
                    jak tablica projektów Trello, aplikacja szkoły ze wszystkimi potrzebnymi funkcjami, czy chociażby cała
                    działalność pozaszkolna samorządu, stawiająca na rozwiązania przyszłościowe"
            />,
            <HomeMinicardComponent
                img="../../../img/icons/icons8-people-working-together-100.png"
                alt="Komunikacja"
                title="Komunikacja"
                text="Nasz SU jest instytucją bardzo otwartą na uczniów, którzy zawsze mogą skonsultować
                    swoje wątpliwości, lub po prostu wyrazic swoją opinię na temat działań SU, a jego opinia nigdy nie
                    zostanie pominięta"
            />,
            <HomeMinicardComponent
                img="../../../img/icons/icons8-intelligence-100.png"
                alt="Kreatywność"
                title="Kreatywność"
                text="Można powiedzieć że naszemu zespołowi bardziej brakuje ludzi, niż pomysłów. W
                    samorządzie zawsze jest co robić, a projekty są innowacyjne i szeroko wykraczające poza działania
                    szkolne. Nasze inicjatywy mają zasięg całej Warszawy, a rozwiązania stosowane wewnątrz są oryginalne i
                    sprawdzają się w działaniu"
            />,
            <HomeMinicardComponent
                img="../../../img/icons/icons8-guarantee-100.png"
                alt="Jakość"
                title="Jakość"
                text="Nasza praca jest rzetelna, a każde przydzielone zadanie, zostanie wykonane na 101%
                    możliwości. Nie jest to miejsce w którym rzeczy robi się &quot;na odwal&quot; każdy projekt przed oddaniem musi
                    być dopięty na ostatni guzik"
            />,
            <HomeMinicardComponent
                img="../../../img/icons/icons8-hierarchy-100.png"
                alt="Organizacja"
                title="Organizacja"
                text="Dzięki kompetentnemu zespołowi i odpowiedzialnemu zarządzaniu, w samorządzie nic
                    nie dzieje się przypadkiem. Każdy ma jasno przydzielone zadanie, a każde szkolne wydarzenie ma ustalony
                    harmonogram, w którym nie ma miejsca na przypadek"
            />,
            <HomeMinicardComponent
                img="../../../img/icons/icons8-smart-card-100.png"
                alt="Nowoczesność"
                title="Nowoczesność"
                text="Jako samorząd posiadamy rozbudowaną infrastrukturę IT, która umożliwia nam
                    dynamiczne uruchamianie nowych usług dla społeczności szkolnej. Nie boimy się nowych rozwiązań. Dzięki
                    wspraciu i zainteresowaniu społeczności szkolnej jako pierwsza szkoła w Warszawie wprowadziliśmy
                    eLegitymacje oraz mLegitymacje."
                />
        ]}
        sections={[
            <HomeMinicardComponent
                img="../../../img/icons/icons8-mind-map-100.png"
                alt="Organizacja"
                title="Sekcja Organizacyjna"
                text="Odpowiada za organizację wydarzeń w szkole i poza nią, po cichu pociąga za sznurki wszystkiego, co na Wiśniowej wychodzi z inicjatywy uczniów."
            />,
            /*<HomeMinicardComponent
                img="icons8-mind-map-100.png"
                alt="Debaty"
                title="Sekcja Debatancka"
                text="Grupa ludzi z zamiłowaniem do dyskusji, zawsze gotowa poratować dobrym argumentem.
                Reprezentuje szkołę w Warszawskiej Lidze Debatanckiej."
            /> */
            <HomeMinicardComponent
                img="../../../img/icons/icons8-job-seeker-100.png"
                alt="Prawna"
                title="Sekcja Prawna"
                text="Wprowadza w tajniki dobrej administracji wspierając samorząd merytorycznie poprzez negocjacje, tworzenie aktów prawnych i archiwizację wszystkich podejmowanych działań. Zapewnia pozostałym sekcjom pole do pracy."
            />,
            <HomeMinicardComponent
                img="../../../img/icons/icons8-maintenance-100.png"
                alt="Technologia"
                title="Sekcja Techniczna"
                text="Grupa miłośników technologicznych nowinek, zapewniająca naszej szkole wiele nowatorskich rozwiązań, wsparcie techniczne eventów oraz działań su w internecie poza sieciami społecznościowymi."
            />,
            <HomeMinicardComponent
                img="../../../img/icons/icons8-social-network-100.png"
                alt="Media"
                title="Sekcja Medialna"
                text="Projektuje i publikuje treści w mediach społecznościowych co pozwala na dobrą
                komunikacje z uczniami. Ponadto wykonują zdjęcia różnych wydarzeń odbywających się w naszej szkole."
            />,
            <HomeMinicardComponent
                img="../../../img/icons/icons8-musical-notes-100.png"
                alt="Sztuka"
                title="Sekcja Artystyczna"
                text="Sekcja zrzeszająca twórców z wielu dziedzin sztuki. Umożliwia uczniom zaprezentowanie swoich talentów oraz przeprowadza konkursy z nagrodami umożliwiając dalszy rozwój w danym kierunku"
            />
        ]}
        buttons={[
            <HomeButtonComponent
                href="/projects/"
                img="../../../img/projects/projects.jpg?size=600"
                alt="Projekty Wiśniowa SU"
                button_text="Projekty"
            />,
            <HomeButtonComponent
                href="/wifi/"
                img="../../../img/wifi/wifi_przycisk.jpg"
                alt="WiFI 2021"
                button_text="WiFI 2021"
            />,
            <HomeButtonComponent
                href="https://pasje.wisniowasu.pl/"
                img="../../../img/logos/konferencja.svg"
                alt="Konferencja Samorządów Warszawskich"
                button_text="Konferencja 2020"
            />,
            <HomeButtonComponent
                href="https://mc.wisniowasu.pl/"
                img="../../../img/logos/cherrycraft.png?size=600"
                alt="CherryCraft: Retold"
                button_text="CherryCraft: Retold"
            />
        ]}
    />

export default Home;