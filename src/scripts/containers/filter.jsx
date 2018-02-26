class Filter extends React.Component {

  onShowMapClick() {
    alert('Sorry, this option is not aviable.');
  }

  onFilterRuleChange(event) {
    let newRule = {};

    if (event.target.name) {
      newRule.action = event.target.name;
    }
    else {
      newRule.city = event.target.value;
    }

    window.ee.emit('Search.add', newRule);
  }

  render() {
    let cities = this.props.data.cities;

    function getOptionList(array) {
      let list = array.map((item, index) => {
        return (
          <option key = {index}>{item}</option>
        );
      });
      return list;
    }

    return (
      <div className = "filters">
        <div className = "container">
          <div className = "row">
            <div className = "col-sm-12">
              <div className = "filters__rules">
                <a href = "#" className = "active">Recommended</a>
                <a href = "#">Latest</a>
                <a href = "#">Highlights</a>
              </div>

              <div className = "filters__location">
                <div className = "ellips-box filters__location-select">
                  <select onChange = {this.onFilterRuleChange}>{getOptionList(cities)}</select>
                </div>
                
                <button className = "ellips-box filters__location-map" onClick = {this.onShowMapClick}>Show Map</button>
              </div>

              <div className = "filters__action">
                <p>Filter:</p>
                <button className = "button-round __button-round__apartrments" name = "Apartmens" onClick = {this.onFilterRuleChange}></button>
                <button className = "button-round __button-round__girl" name = "Girl" onClick = {this.onFilterRuleChange}></button>
                <button className = "button-round __button-round__education" name = "Education" onClick = {this.onFilterRuleChange}></button>
                <button className = "button-round __button-round__music" name = "Music" onClick = {this.onFilterRuleChange}></button>
                <button className = "button-round __button-round__travel" name = "Travel" onClick = {this.onFilterRuleChange}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}