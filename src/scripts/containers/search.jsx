class Search extends React.Component {

  onSubmitClick(e) {
    let newRule = {
      city: this._inputCity.value,
      action: this._inputAction.value,
      keyword: this._inputKeyword.value
    }

    e.preventDefault();
    window.ee.emit('FilterRule.add', newRule);
  }

  render() {
    let cities = this.props.data.cities;
    let action = this.props.data.action;
    
    function getOptionList(array) {
      let list = array.map((item, index) => {
        return (
        <option key = {index}>{item}</option>
        );
      });
      return list;
    }

    return (
      <form className = "search">
        <div className = "container"> 
          <div className = "row">
            <div className = "col-sm-12 __align-center">
              <p className = "search__title">What are you looking for?</p>
            </div>
            <div className = "col-sm-12 __align-center">
              <div className = "ellips-box search__select">
                <select ref={c => {this._inputCity = c}}>{getOptionList(cities)}</select>
                <svg className = "icon-arrowdown">
                  <use xlinkHref = "#icon-arrowdown" />
                </svg>
              </div>
              <div className = "ellips-box search__select">
                <select ref={c => {this._inputAction = c}}>{getOptionList(action)}</select>
                <svg className = "icon-arrowdown">
                  <use xlinkHref = "#icon-arrowdown" />
                </svg>
              </div>
            </div>
            <div className = "col-sm-12 __align-center">
              <input className = "ellips-box search__input" placeholder = "Keyword, name, date, ..." ref={c => {this._inputKeyword = c}}/>
            </div>
            <div className = "col-sm-12 __align-center">
              <button type="submit" className = "button__red-ellipse" onClick = {e => {this.onSubmitClick(e)}}>Search</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}