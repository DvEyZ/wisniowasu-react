import { ForStudentComponent } from "../layouts/ForStudentComponent/ForStudentComponent";
import { ForStudentServiceCardComponent } from "../layouts/ForStudentComponent/ForStudentServiceCardComponent";

const ForStudent = () => 
    <ForStudentComponent
        cards={[<ForStudentServiceCardComponent 
                key={1}
                img="../../../img/icons/icons8-open-door-100.png" 
                name="Dni otwarte" 
                description="Młody kandydacie chcesz dowiedzieć się czegoś więcej? Zapraszamy na wirtualny spacer po najciekawszych salach w szkole"
                link="https://otwarte.wisniowasu.pl/"
            />,
            <ForStudentServiceCardComponent
                key={2}
                img="../../../img/icons/icons8-link-100.png" 
                name="Generator linków" 
                description="Chcesz wygenerować sobie skrócony link z naszym brandem? Nie ma problemu, ta usługa jest dla Ciebie" 
                link="https://links.wisniowasu.pl/" 
            />,
            <ForStudentServiceCardComponent
                key={3}
                img="../../../img/icons/icons8-onedrive-100.png" 
                name="Pliki" 
                description="Wszystkie pliki będą niedługo tutaj. Grafiki, regulaminy, materiały. Cokolwiek co jest związane z nami i może być publiczne ląduje tu" 
                link="https://drive.wisniowasu.pl/"
            />,
            <ForStudentServiceCardComponent 
                key={4}
                img="../../../img/icons/icons8-feedback-100.png" 
                name="Feedback" 
                description="Twoje zdanie się liczy! Wskazuj co jest ważne dla społeczności szkolnej"
                link="https://feedback.wisniowasu.pl/"
            />,
            <ForStudentServiceCardComponent 
                key={5}
                img="../../../img/icons/icons8-github-100.png" 
                name="GitHub" 
                description="Interesujesz się technologią? Dołącz do naszej organizacji na GitHubie i odbierz masę wspaniałych perków z Github Student Pack!"
                link="https://warsztaty-tm1.github.io/"
            />,
            <ForStudentServiceCardComponent 
                key={6}
                img="../../../img/icons/icons8-facebook-100.png" 
                name="Grupa ogólna" 
                description="Dołącz do grupy całej społeczności szkolnej! Dziel się swoimi opiniami ze wszystkimi"
                link="https://www.facebook.com/groups/220753918677171/"
            />,
            <ForStudentServiceCardComponent 
                key={7}
                img="../../../img/icons/icons8-discord-100.png" 
                name="Discord" 
                description="Dołącz do Discorda szkolnego! Jeśli chcesz pogadać z ludźmi w sekcji to jest właśnie to miejsce"
                link="https://discord.wisniowasu.pl/"
            />,
            <ForStudentServiceCardComponent 
                key={8}
                img="../../../img/icons/icons8-instagram-100.png" 
                name="Instagram" 
                description="Chcesz być na bieżąco z najnowszymi informacjami? Zaobserwuj nas na Instagramie"
                link="https://instagram.wisniowasu.pl/"
            />
        ]}
    />
export default ForStudent;