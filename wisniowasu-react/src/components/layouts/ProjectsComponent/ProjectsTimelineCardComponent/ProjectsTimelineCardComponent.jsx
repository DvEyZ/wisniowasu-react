import React from "react";

export class ProjectsTimelineCardComponent extends React.Component
{
    render()
    {
        return (
            <div class="timeline_card">
            <div class="date">
                {this.props.date}
            </div>
            <div class="container">
                <div class="img_container">
                    <img src={"../../../img/projects/" + this.props.img} />
                </div>
                <div class="title">
                    {this.props.title}
                </div>
                <div class="text">
                    {this.props.description}
                </div>
            </div>
        </div>

        );
    }
}