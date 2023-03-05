import { WiFIComponent } from "../layouts/WiFIComponent/WiFIComponent";
import { WiFIYearComponent } from "../layouts/WiFIComponent/WiFIYearComponent";
import { WiFIMainComponent } from "../layouts/WiFIComponent/WiFIMainComponent";
import { WiFIDetailsComponent } from "../layouts/WiFIComponent/WiFIDetailsComponent";

import { WiFIMainMinicardComponent } from "../layouts/WiFIComponent/WiFIMainMinicardComponent";

const WiFI = () =>
    <WiFIComponent years={[
        <WiFIYearComponent
            key={1}
            year="2021"
            main={
                <WiFIMainComponent
                    logo="../../../img/logos/logo_wifi_2021.png"
                    logo_alt="WiFI 2021"
                    description="Wiśniowy Festiwal Inicjatyw to festiwal szkolny integrujący całą społeczność szkolną - uczniów, nauczycieli, dyrekcję oraz pracowników szkoły. Chcemy, aby przestrzeń szkolna kojarzyła się nie tylko z nauką, ale również z bezpiecznym miejscem, które daje możliwość rozwoju i pozyskiwania nowych doświadczeń. Chcemy połączyć zdobywanie wiedzy z zabawą i stworzyć możliwość na integrację, zacieśnianie relacji z równieśnikami oraz przestrzeń na poznawanie nowych pasji i zainteresowań."
                />
            }
        />
    ]}/>

export default WiFI;