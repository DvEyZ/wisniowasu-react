import React from "react";

class ForStudentComponent extends React.Component
{
    render()
    {
        return (
            <div class="service-card">
                <img data-src={this.props.img} class="logo lazyload" />
                <div class="name">{this.props.name}</div>
                <div class="desc">{this.props.desc}</div>
                <a target="_blank" href={this.props.link} class="btn"><span>ZOBACZ</span></a>
            </div>
        );
    }
}