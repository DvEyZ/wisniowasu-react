class WifiHeader extends React.Component
{
    render()
    {
        return (
            <header class="wifi-header">
                <a class={"wifi-header__home-button " + (this.props.active_wifi_home != null) ? "active" : ""} href="/wifi/"></a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + (this.props.active_wifi_details != null) ? "active" : ""} href="/wifi/details/">Szczegóły wydarzenia</a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + (this.props.active_wifi_harmonogram != null) ? "active" : ""} href="/wifi/harmonogram/">Harmonogram</a>
                <span class="vertical-spacer"></span>
                <a class={"wifi-header__button " + (this.props.active_wifi_contact != null) ? "active" : ""} href="/wifi/contact/">Kontakt</a>
            </header>
        );
    }
}