class FooterSubscribe extends React.Component {

  onClick(e) {
    (this._input.className.includes('__valid'))
      ? alert('You are subscried for our news. e-mail: ' + this._input.value)
      : this.setValidationClass(' __not-valid')
  }

  onInputChange(e) {
    let value = e.target.value;

    if ((value.length > 5) && (value.includes('@')) && (value.includes('.'))) {
      this.setValidationClass(' __valid');
    }
    else if (!value) {
      this.setValidationClass('');
    }
    else {
      this.setValidationClass(' __not-valid');
    }
  }

  setValidationClass(status) {
    this._input.className = 'ellips-box __footer-input' + status;
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
            <input className = "ellips-box __footer-input" placeholder = "your@email.com" 
            ref= {c => {this._input = c}} onChange = {c => {this.onInputChange(c)}} type="email"/>
            <button className = "button__red-ellipse __footer" onClick = {c => {this.onClick(c)}}>Subscribe</button>
          </div>
        </div>
      </div>
    );
  }
}