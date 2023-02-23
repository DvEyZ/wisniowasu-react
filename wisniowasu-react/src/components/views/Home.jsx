import { HomeComponent } from "../layouts/HomeComponent/HomeComponent";
import { HomeButtonComponent } from "../layouts/HomeComponent/HomeButtonComponent/HomeButtonComponent";
import { HomeMinicardComponent } from "../layouts/HomeComponent/HomeMinicardComponent/HomeMinicardComponent";

const Home = () => {
    return(<HomeComponent
        sections={[
            <HomeMinicardComponent
                short="true"
                img="icons8-mind-map-100.png"
                alt="Organizacja"
                title="Sekcja Organizacyjna"
                text="Odpowiada za organizację wydarzeń w szkole i poza nią, po cichu pociąga za sznurki wszystkiego, co na Wiśniowej wychodzi z inicjatywy uczniów."
            />,
            /*<HomeMinicardComponent
                short="true"
                img="icons8-mind-map-100.png"
                alt="Debaty"
                title="Sekcja Debatancka"
                text="Grupa ludzi z zamiłowaniem do dyskusji, zawsze gotowa poratować dobrym argumentem.
                Reprezentuje szkołę w Warszawskiej Lidze Debatanckiej."
            /> */
            <HomeMinicardComponent
                short="true"
                img="icons8-job-seeker-100.png"
                alt="Prawna"
                title="Sekcja Prawna"
                text="Wprowadza w tajniki dobrej administracji wspierając samorząd merytorycznie poprzez negocjacje, tworzenie aktów prawnych i archiwizację wszystkich podejmowanych działań. Zapewnia pozostałym sekcjom pole do pracy."
            />,
            <HomeMinicardComponent
                short="true"
                img="icons8-maintenance-100.png"
                alt="Technologia"
                title="Sekcja Techniczna"
                text="Grupa miłośników technologicznych nowinek, zapewniająca naszej szkole wiele nowatorskich rozwiązań, wsparcie techniczne eventów oraz działań su w internecie poza sieciami społecznościowymi."
            />,
            <HomeMinicardComponent
                short="true"
                img="icons8-social-network-100.png"
                alt="Media"
                title="Sekcja Medialna"
                text="Projektuje i publikuje treści w mediach społecznościowych co pozwala na dobrą
                komunikacje z uczniami. Ponadto wykonują zdjęcia różnych wydarzeń odbywających się w naszej szkole."
            />,
            <HomeMinicardComponent
                short="true"
                img="icons8-musical-notes-100.png"
                alt="Sztuka"
                title="Sekcja Artystyczna"
                text="Sekcja zrzeszająca twórców z wielu dziedzin sztuki. Umożliwia uczniom zaprezentowanie swoich talentów oraz przeprowadza konkursy z nagrodami umożliwiając dalszy rozwój w danym kierunku"
            />
        ]}
        buttons={[
            <HomeButtonComponent
                href="/projects/"
                img="projects/projects.jpg?size=600"
                alt="Projekty Wiśniowa SU"
                button_text="Projekty"
            />,
            <HomeButtonComponent
                href="/wifi/"
                img="wifi/wifi_przycisk.jpg"
                alt="WiFI 2021"
                button_text="WiFI 2021"
            />,
            <HomeButtonComponent
                href="https://pasje.wisniowasu.pl/"
                img="logos/konferencja.svg"
                alt="Konferencja Samorządów Warszawskich"
                button_text="Konferencja 2020"
            />,
            <HomeButtonComponent
                href="https://mc.wisniowasu.pl/"
                img="logos/cherrycraft.png?size=600"
                alt="CherryCraft: Retold"
                button_text="CherryCraft: Retold"
            />
        ]}
    />)
}

export default Home;