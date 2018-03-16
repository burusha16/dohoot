class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }

  onSearchCLick() {
    let top = 0;
    let animation = setInterval(initStep, 1);

    function initStep() {
      top += 2;
      document.documentElement.scrollTop = top;
      if (top > 73)
        clearInterval(animation);
    }
  }

  onLoginClick() {
    alert('Sorry, this option is not aviable.')
  }

  render() {
    let headerNavbar = [
      {
        "name": "Reality",
        "URL": "#"
      },
      {
        "name": "Living",
        "URL": "#"
      },
      {
        "name": "EduCation",
        "URL": "#"
      },
      {
        "name": "Entertainment",
        "URL": "#"
      },
      {
        "name": "Mobility",
        "URL": "#"
      }
    ];
    let navigationTemplate = headerNavbar.map((item, i) => {
      return (
        <li key={'headerNav__' + i} className = {'header__navbar-item' + ((i === headerNavbar.length - 1) ? ' hidden-md' : '')} >
          <a href={item.URL}>{item.name}</a>
        </li>
      )
    });

    return (
      <header className = {'header' + (this.state.expanded ? ' expanded': '')}>
        <div className ="container">
          <div className = "row">
            <div className = "col-sm-12">
              <div className = "header__logo">
                <a href="/" />
              </div>
              <ul className = "header__navbar">
                {navigationTemplate}
              </ul>
              <button className = "header__search visible-lg" onClick = {this.onSearchCLick}>
                <svg className = "icon-search">
                  <use xlinkHref = "#icon-search" />
                </svg>
              </button>
              <button className = "header__login" onClick = {this.onLoginClick}>
                <svg className = "icon-login">
                  <use xlinkHref = "#icon-login" />
                </svg>
                <span>Login</span>
              </button>
              <button className = "header__bar visible-sm" onClick = {() => {this.setState({expanded: !this.state.expanded})}}>
                <svg className = "icon-menu">
                  <use xlinkHref = "#icon-menu" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}