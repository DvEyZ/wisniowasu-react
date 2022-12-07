class ForStudentServiceCard extends React.Component
{
    render()
    {
        <div class="service-card new">
            <img data-src={this.props.data_src} class="logo lazyload" />
            <div class="name">{this.props.name}</div>
            <div class="desc">{this.props.desc}</div>
            <a target="_blank" href={this.props.link} class="btn"><span>ZOBACZ</span></a>
        </div>
    }
}