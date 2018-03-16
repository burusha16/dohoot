class App extends React.Component {

  constructor() {
    super();
    
    this.state = {
      filterValues: {
        cities: ['Dubai', 'Moscow', 'Kazan', 'London', 'New York'],
        action: ['Education', 'Travel', 'Music', 'Apartment', 'Shoping']
      },
      eventLinesOnPage: 2
    };
  }

  componentWillMount() {
    window.ee.addListener('newRaiting.add', function(res) {
      console.log(res);
    });
  }

  componentWillUnmount() {
    window.ee.removeListener('newRaiting.add');
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Search data = {this.state.filterValues}/>
        <Filter data = {this.state.filterValues}/>
        <Content data = {this.state} />
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