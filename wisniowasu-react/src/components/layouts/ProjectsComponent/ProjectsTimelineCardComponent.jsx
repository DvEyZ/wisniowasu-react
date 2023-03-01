import React from "react";

export class ProjectsTimelineCardComponent extends React.Component
{
    render()
    {
        return (
            <div className="timeline_card">
            <div className="date">
                {this.props.date}
            </div>
            <div className="container">
                <div className="img_container">
                    <img src={this.props.img} />
                </div>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="text">
                    {this.props.text}
                </div>
            </div>
        </div>

        );
    }
}