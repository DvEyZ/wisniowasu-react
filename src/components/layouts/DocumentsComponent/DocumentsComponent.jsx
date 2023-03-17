import React from "react";

import "./documents.css";

import Error from "../../reusables/ErrorComponent/Error";
import Loading from "../../reusables/LoadingComponent/Loading";
import DocumentCardComponent from "./DocumentCardComponent";

import { title } from "../../../index";

export class DocumentsComponent extends React.Component
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

    componentDidMount() {
        document.title = `Dokumenty | ${title}`;

        setTimeout(() => {
            this.setState({
                loaded: true,
                cards: [
                    {
                        name: "Statut",
                        link: "https://tm1.edu.pl/wp-content/uploads/2022/05/statut-ZSLiT-nr-1-z-dnia-24-stycznia-2022.pdf",
                        preview: 'https://place-hold.it/800x600?text=preview placeholder&fontsize=23',
                        important: false,
                    },
                    {
                        name: "Statut (important)",
                        link: "https://tm1.edu.pl/wp-content/uploads/2022/05/statut-ZSLiT-nr-1-z-dnia-24-stycznia-2022.pdf",
                        preview: 'https://place-hold.it/800x600?text=preview placeholder&fontsize=23',
                        important: true,
                    },
                ],
            });
        }, 0);
    }

    render()
    {
 
        if(this.state.error) return(<Error message={this.state.error.toString()} />)
        if(!this.state.loaded) return(<Loading />)
        return(
            <div className="documents">
                <div className="title_box">
                    <h1 className="title_box_text">
                        DOKUMENTY
                    </h1>
                </div>
                <div className="documents-container">
                    {this.state.cards
                        .filter(c => c.important)
                        .map((card, i) => 
                            <DocumentCardComponent
                                key={i}
                                name={card.name}
                                link={card.link}
                                preview={card.preview}
                                important
                            />
                    )}
                    {this.state.cards
                        .filter(c => !c.important)
                        .map((card, i) => 
                            <DocumentCardComponent
                                key={i}
                                name={card.name}
                                link={card.link}
                                preview={card.preview}
                            />
                    )}
                </div>
            </div>
        )
    }
}