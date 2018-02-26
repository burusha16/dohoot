class Header extends React.Component {

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

    let navigationTemplate = headerNavbar.map((item, index) => {
      return (
        <li key={'headerNav__' + index} className = "header__navbar-item">
          <a href={item.URL}>{item.name}</a>
        </li>
      )
    });

    return (
      <header className = "header">
        <div className ="container">
          <div className = "row">
            <div className = "col-sm-12">
              <div className = "header__logo">
                <a href="/" />
              </div>
              <ul className = "header__navbar">
                {navigationTemplate}
              </ul>
              <button className = "header__search" onClick = {this.onSearchCLick}/>
              <button className = "header__login" onClick = {this.onLoginClick}>
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}