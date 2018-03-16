class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFilter: 'recommended',
      expanded: false
    };
  }

  onShowMapClick() {
    alert('Sorry, this option is not aviable.');
  }

  onFilterRuleChange(data) {
    let newRule = {};
    let state = this.state;

    if (data.action) {
      state.activeFilter = newRule.action = data.action;
      location.hash = '#'+data.action;
    } 
    else if (data.target.value) {
      state.activeFilter = newRule.city = data.target.value;
      location.hash = '#cities';
    }
    else {
      state.activeFilter = newRule.categories = data.target.innerHTML.toLowerCase();
    }
    
    this.setState(state);
    window.ee.emit('FilterRule.add', newRule);
  }

  templateFilterIcons(self, data) {
    return data.map((item, index) => {
      return(
        <button key = {'action__filter__' + index}
        className = {'button-round __button-round__' + item.action.toLowerCase()} 
        onClick = {() => self.onFilterRuleChange({action: item.action})}>
          <svg className = {item.icon} >
            <use xlinkHref = {'#'+item.icon} />
          </svg>
        </button>
      )
    });
  }

  templateOptionList(array) {
    return array.map((item, index) => {
      return (
        <option key = {index}>{item}</option>
      );
    });
  }

  render() {
    let cities = this.props.data.cities;

    return (
      <div className = {'filters' + (this.state.expanded ? ' expanded' : '')}>
        <div className = "container">
          <div className = "row">
            <div className = "col-sm-12 col-md-6 col-lg-4">
              <div className = "filters__categories" ref = "categories">
                <a href = "#recommended" ref="recommended"
                className = {(this.state.activeFilter === 'recommended') ? 'active' : ''} 
                onClick = {c => {this.onFilterRuleChange(c)}}>
                  Recommended
                </a>

                <a href = "#latest" ref="latest"
                className = {(this.state.activeFilter === 'latest') ? 'active' : ''} 
                onClick = {c => {this.onFilterRuleChange(c)}}>
                  Latest
                </a>

                <a href = "#highlights" ref="highlights"
                className = {(this.state.activeFilter === 'highlights') ? 'active' : ''}
                onClick = {c => {this.onFilterRuleChange(c)}}>
                  Highlights
                </a>

                <svg className = "icon-menu visible-sm" onClick = {() => {this.setState({expanded: !this.state.expanded, activeFilter: this.state.activeFilter})}}>
                  <use xlinkHref = "#icon-menu" />
                </svg>
              </div>
            </div>

            <div className = "col-sm-12 col-lg-4 hidden-md">
              <div className = "filters__location">
                <div className = "ellips-box filters__location-select">
                  <select onChange = {c => {this.onFilterRuleChange(c)}}>{this.templateOptionList(cities)}</select>
                  <svg className = "icon-arrowdown">
                    <use xlinkHref = "#icon-arrowdown" />
                  </svg>
                </div>
                
                <button className = "ellips-box filters__location-map" onClick = {this.onShowMapClick}>
                  Show Map
                  <svg className = "icon-map">
                    <use xlinkHref = "#icon-map" />
                  </svg>
                </button>
              </div>
            </div>

            <div className = "col-sm-12 col-md-6 col-lg-4">
              <div className = "filters__action">
                <p>Filter:</p>
                {this.templateFilterIcons(this, [
                  {action: 'Apartment', icon: 'icon-apartment'},
                  {action: 'Shoping', icon: 'icon-shoping'},
                  {action: 'Education', icon: 'icon-education'},
                  {action: 'Music', icon: 'icon-music'},
                  {action: 'Travel', icon: 'icon-travel'}
                ])}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}