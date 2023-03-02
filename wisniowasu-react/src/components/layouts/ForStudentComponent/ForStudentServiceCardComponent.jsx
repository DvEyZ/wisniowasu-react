import React from "react";

export class ForStudentServiceCardComponent extends React.Component
{
    render()
    {
        return (
            <div className={`service-card ${this.props.new ? "new" : ""}`}>
                <img src={this.props.img} alt={this.props.alt} className="logo lazyload" />
                <div className="name">{this.props.name}</div>
                <div className="desc">{this.props.description}</div>
                <a target="_blank" rel="noreferer" href={this.props.link} className="btn"><span>ZOBACZ</span></a>
            </div>
        )
    }
}