import { React } from "react";
import MenuComponent from "../../partials/MenuComponent/MenuComponent"
import FooterComponent from "../../partials/FooterComponent/FooterComponent"
import ForStudentServiceCardComponent from "./ForStudentServiceCardComponent/ForStudentServiceCardComponent"

class ForStudentComponent extends React.Component
{
    render()
    {
        return (
            <div class="for_student">
                <MenuComponent active="forstudent" />
                <div class="title_box">
                    <h1 class="title_box_text">
                        DLA UCZNIA
                    </h1>
                </div>
                <div id="services_container">
                    <ForStudentServiceCardComponent name="" />
                </div>
                <FooterComponent />
            </div>
        );
    }
}