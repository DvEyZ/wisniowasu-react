import { TeamComponent } from "../layouts/TeamComponent/TeamComponent";
import { TeamYearComponent } from "../layouts/TeamComponent/TeamYearComponent";
import { TeamPersonComponent } from "../layouts/TeamComponent/TeamPersonComponent";

const Team = () => 
    <TeamComponent years={[
        <TeamYearComponent year="2022/23" year_url="2022-23"/>,
        <TeamYearComponent year="2021/22" year_url="2021-22"/>
    ]}/>

export default Team;