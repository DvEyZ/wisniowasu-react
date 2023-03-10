import React from "react";

import './forstudent.scss'

import { ForStudentServiceCardComponent } from './ForStudentServiceCardComponent'
import Loading from "../../reusables/LoadingComponent/Loading";
import Error from "../../reusables/ErrorComponent/Error";

import { cms } from "../../../CMS";

import { slide } from '../../../slide'

export class ForStudentComponent extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            cards: [],
            loaded: false,
            error: false
        }
    }
    componentDidMount()
    {
        fetch(`${cms}/api/for-student?` + new URLSearchParams({'populate[0]':'cards', 'populate[1]':'cards.image'})).then(
            res => {res.json().then(
                value => {
                    this.setState({
                        cards: value.data.attributes.cards.map((v) => {
                            return {
                                name: v.title,
                                description: v.description,
                                link: v.link,
                                img: `${cms}${v.image.data.attributes.url}`,
                            }
                        }),
                        // loaded: true,
                        error: false
                    });
                }
            ).catch((e) => this.setState({error: e}))}
        ).catch((e) => this.setState({error: e}))
        .finally(() => this.setState({loaded: true}));
    }

    componentDidUpdate()
    {
        slide();
    }

    render()
    {
        if(this.state.error) return(<Error message={this.state.error.toString()} />)
        if(!this.state.loaded) return(<Loading />)
        return (
            <div className="for_student">
                <div className="title_box">
                    <h1 className="title_box_text">
                        DLA UCZNIA
                    </h1>
                </div>
                <div id="services_container" ref={node => {this.services = node}}>
                    {this.state.cards.map((value, key) => 
                        <ForStudentServiceCardComponent key={key} img={value.img} name={value.name} description={value.description} link={value.link}/>
                    )}
                </div>
            </div>
        );
    }
}