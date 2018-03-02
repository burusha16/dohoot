class FooterSubscribe extends React.Component {

  onClick(e) {
    if(this._input.value)
      alert('You are subscried for our news. e-mail: ' + this._input.value);
  }

  render() {
    return (
      <div className = "row">
        <div className = "col-sm-12 __align-center">
          <h3 className = "footer__title">Subscribe to our newsletter</h3>
        </div>

        <div className = "col-sm-12 __align-center">
          <div className = "footer__input">
            <svg className = "icon-mail">
              <use xlinkHref = "#icon-mail" />
            </svg>
            <input className = "ellips-box __footer-input" placeholder = "your@email.com" ref= {c => {this._input = c}}/>
            <button className = "button__red-ellipse __footer" onClick = {c => {this.onClick(c)}}>Subscribe</button>
          </div>
        </div>
      </div>
    );
  }
}