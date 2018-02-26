class App extends React.Component {

  constructor() {
    super();
    this.state = {
      searchFilter: {
        city: '',
        action: '',
        keyword: ''
      }
    };
  }

  componentDidMount() {
    let self = this;

    window.ee.addListener('Search.add', function(rule) {
      let newRule = self.state.searchFilter;
      
      for (let key in rule) {
        if (rule[key]) {
          newRule[key] = rule[key];
        }
      }
      self.setState({searchFilter: newRule});
    });
  }

  componentWillUnmount() {
    window.ee.removeListener('Search.add');
  }

  render() {
    let data = {};
    data.cities = ['Dubai', 'Moscow', 'Kazan', 'London', 'New York'];
    data.action = ['Education', 'Travel', 'Music', 'Apartments', 'Other'];

    return (
      <div className="app">
        <Header />
        <Search data = {data}/>
        <Filter data = {data}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);