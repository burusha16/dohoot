class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchFilter: {
        categories: 'recommended',
        city: '',
        action: '',
        keyword: '',
      }
    };
  }

  componentDidMount() {
    let self = this;

    window.ee.addListener('FilterRule.add', function(newRule) {
      self.setState({searchFilter: newRule});
    });

    window.ee.addListener('newRaiting.add', function(res) {
      console.log(res);
    });
  }

  componentWillUnmount() {
    window.ee.removeListener('FilterRule.add');
  }

  render() {
    let config = {
      eventsOnPage: 8
    };
    let filterValues = {
      cities: ['Dubai', 'Moscow', 'Kazan', 'London', 'New York'],
      action: ['Education', 'Travel', 'Music', 'Apartment', 'Shoping']
    };
    let data = {
      eventsOnPage: config.eventsOnPage,
      content: db,
      filterRule: this.state.searchFilter
    };

    return (
      <div className="app">
        <Header />
        <Search data = {filterValues}/>
        <Filter data = {filterValues}/>
        <div className = "wrapper__main">
          <Content data = {data} />
          <Abilities />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);