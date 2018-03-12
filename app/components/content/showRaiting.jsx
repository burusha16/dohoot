class ContentShowRaiting extends React.Component {
  templateRaiting(value) {
    let template = [];

    function star(type, i) {
      return(
        <svg className = {'icon-star __' + type} key = {'raiting-star__' + i}>
          <use xlinkHref = "#icon-star" />
        </svg>
      )
    };

    for (let i = 0; i < 5; i++) {
      let classNameValue = (i < value) ? star('filled', i) : star('pure', i);
      template.push(classNameValue);
    }
    return template;
  }

  render() {
    let value = this.props.data.value;
    let counts = this.props.data.counts;

    return (
      <p className = "content__raiting">
        {this.templateRaiting(value)}
        <span className = "content__raiting-votes">{counts}</span>
      </p>
    );
  }
}