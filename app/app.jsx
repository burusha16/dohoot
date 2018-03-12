class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      searchFilter: {
        categories: 'recommended',
        city: '',
        action: '',
        keyword: '',
      }, 
      content: []
    };
  }

  componentWillMount() {
    let self = this;
    let state = self.state;

    if(!state.content.length) {
      self.getData().then( arr => {
        state.content = arr;
        self.setState(state);
      });
    }

    window.ee.addListener('FilterRule.add', function(newRule) {
      state.searchFilter = newRule;
      self.setState(state);
    });

    window.ee.addListener('newRaiting.add', function(res) {
      console.log(res);
    });
  }

  componentWillUnmount() {
    window.ee.removeListener('FilterRule.add');
    window.ee.removeListener('newRaiting.add');
  }

  getData() {
    return fetch('/events/', { 
      method: 'GET'
    })
      .then(dataWrappedByPromise => dataWrappedByPromise.json());
  }

  render() {
    let config = {
      eventLinesOnPage: 2,
      filterValues: {
        cities: ['Dubai', 'Moscow', 'Kazan', 'London', 'New York'],
        action: ['Education', 'Travel', 'Music', 'Apartment', 'Shoping']
      },
      content: this.state.content,
      filterRule: this.state.searchFilter
    };

    return (
      <div className="app">
        <Header />
        <Search data = {config.filterValues}/>
        <Filter data = {config.filterValues}/>
        <Content data = {config} />
        <Abilities />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);