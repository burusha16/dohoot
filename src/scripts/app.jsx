class App extends React.Component {

  render() {
    console.log('render');

    return (
      <div className="app">
        <h1> Hello world! </h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);