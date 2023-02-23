import React from 'react';
import { ProjectsTimelineCardComponent } from './ProjectsTimelineCardComponent/ProjectsTimelineCardComponent.jsx';

export class ProjectsComponent extends React.Component
{
    render()
    {
        return (
            <div class="projects">
                <div class="title_box">
                    <h1 class="title_box_text">PROJEKTY</h1>
                </div>
                <div class="pageblock_timeline">
                    <div id="timeline_line"></div>
                    <div id="timeline_container">
                        <div class="timeline_card">
                            {this.props.timeline_cards}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}