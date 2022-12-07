class Menu extends React.Component
{
    render()
    {
        return (
            <header class="cd-header">
                <div class="nav-logo">
                    <div class="nav-logo-image"></div>
                </div>
                <div class="nav-but-wrap">
                    <div class="menu-icon hover-target">
                        <span class="menu-icon__line menu-icon__line-left"></span>
                        <span class="menu-icon__line"></span>
                        <span class="menu-icon__line menu-icon__line_last menu-icon__line-right"></span>
                    </div>
                </div>
                <div class="nav">
                    <div class="nav__content">
                        <ul class="nav__list">
                            <li class={"nav__list-item " + (this.props.active_team != null ? "active-nav" : "")}><a href="/" class="hover-target">Strona
                                    główna</a></li>
                            <li class={"nav__list-item " + (this.props.active_team != null) ? "active-nav" : ""}><a href="/team/"
                                    class="hover-target">Zespół</a></li>
                            <li class={"nav__list-item " + (this.props.active_projects != null) ? "active-nav" : ""}><a href="/projects/"
                                    class="hover-target">Projekty</a></li>
                            <li class={"nav__list-item " + (this.props.active_forstudent != null) ? "active-nav" : ""} ><a href="/forstudent/"
                                    class="hover-target">Dla ucznia</a></li>
                            <li class={"nav__list-item " + (this.props.active_wifi != null ? "active-nav" : "")}><a href="/wifi/"
                                    class="hover-target">WiFI</a></li>
                            <li class={"nav__list-item " + (this.props.active_contact != null ? "active-nav" : "")}><a href="/contact/"
                                    class="hover-target">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}