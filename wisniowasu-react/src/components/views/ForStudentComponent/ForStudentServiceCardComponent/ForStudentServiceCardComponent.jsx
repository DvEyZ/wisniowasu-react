import React from "react";

class ForStudentServiceCardComponent extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div class={"service-card " + this.props.new ? "new" : ""}>
                <img data-src={"../../../../../img/icons/" + this.props.img} class="logo lazyload" />
                <div class="name">{this.props.name}</div>
                <div class="desc">{this.props.description}</div>
                <a target="_blank" href={this.props.link} class="btn"><span>ZOBACZ</span></a>
            </div>
        )
    }
}