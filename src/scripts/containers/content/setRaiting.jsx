class ContentSetRaiting extends React.Component {
  constructor() {
    super();
    this.state = {
      ableToEdit: true,
      value: 0
    };
  }

  eventsHandler(e, eventName, itemId) {
    let id = (e.target.getAttribute('meta-id') || e.target.parentElement.getAttribute('meta-id'));
    
    if (this.state.ableToEdit) {
      let state = {};

      state.ableToEdit = (eventName === 'click') ? false : true;
      state.value = (eventName === 'mouseOut') ? 0 : id;
      this.setState(state);

      if (eventName === 'click') {
        window.ee.emit('newRaiting.add', {id: itemId, value: state.value});
      }
    }
  }

  templateStars(id) {
    let array = [];
    for (let i = 1; i <= 5; i++) {
      array.push(
        <svg className = {'icon-star' + ((i <= this.state.value) ? ' active' : '')} 
        key = {i} meta-id = {i} onClick = {c => {this.eventsHandler(c, 'click', id)}} 
        onMouseOver = {c => {this.eventsHandler(c, 'hover')}} onMouseOut = {c => {this.eventsHandler(c, 'mouseOut')}}>
          <use xlinkHref = "#icon-star" />
        </svg>
      )
    }
    return array;
  }

  render() {
    let id = this.props.id;

    return (
      <div className = "content__hover-star">
        {this.templateStars(id)}
      </div>
    );
  }
}