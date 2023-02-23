import React from "react";

export class ForStudentServiceCardComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className={"service-card " + this.props.new ? "new" : ""}>
                <img src={`../../../../../img/icons/${this.props.img}`} className="logo lazyload" />
                <div className="name">{this.props.name}</div>
                <div className="desc">{this.props.description}</div>
                <a target="_blank" href={this.props.link} className="btn"><span>ZOBACZ</span></a>
            </div>
        )
    }
}