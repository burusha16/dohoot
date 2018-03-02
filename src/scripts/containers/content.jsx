class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      elementsAtAll: 0
    };
  }

  componentDidMount() {
    let self = this;

    window.ee.addListener('FilterRule.add', function(newRule) {
      self.setState({pageNumber: 1, elementsAtAll: 0});
    });
  }

  onMoreItemsClick(e) {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
      elementsAtAll: this.state.elementsAtAll
    });
  }

  onShowMoreClick() {
    alert('Sorry, this option is not aviable.')
  }

  templateContentOutput(rule, array, maxItemsNumber) {
    for (let key in rule) {
      if (rule[key]) {
        array = array.filter( (item) => {
          if (item[key].includes(rule[key]))
            return item;
        });
      }
    }
    this.state.elementsAtAll = array.length;

    return array.map((item, index) => {
      return (
        <div key={'content__' + index} className = "col-sm-12 col-md-4 col-lg-3">
          <div className = {'content__item __content-'+item.action.toLowerCase()}>
            <p className = "content__price">{item.price}</p>
            <div className = "content__hover">
              <button className = "ellips-box button__show-more" onClick = {this.onShowMoreClick}>
                <svg className = "icon-search" >
                  <use xlinkHref = "#icon-search" />
                </svg>
                Show more
              </button>
              <ContentSetRaiting id = {item._id}/>
            </div>
            <img src = {'/assets/img/'+item.imagesrc} className = "content__image" />
            <button className = "content__category">
              <svg className = {'icon-'+item.action.toLowerCase()} >
                <use xlinkHref = {'#icon-'+item.action.toLowerCase()} />
              </svg>
            </button>
            <p className = "content__title">{item.name}</p>
            <p className = "content__location">{item.location}</p>
            <ContentShowRaiting data = {{value: item.raiting, counts:item.raitingScore}} />
          </div>
        </div>
      )
    }).slice(0, maxItemsNumber);
  }

  render() {
    let filterRule = this.props.data.filterRule;
    let content = this.props.data.content;
    let maxEventsOnPage = this.props.data.eventsOnPage * this.state.pageNumber;

    return (
      <div className = "container content">
        <div className = "row">
          {this.templateContentOutput(filterRule, content, maxEventsOnPage)}
        </div>

        <div className = "row"> 
          <div className = "col-sm-12">
            <button onClick = {c => {this.onMoreItemsClick(c)}}
             className = {'content__moreitems' + ((maxEventsOnPage < this.state.elementsAtAll) ? '' : ' hidden')}>
              <span>Load more</span>
              <svg className = 'icon-arrowright' >
                <use xlinkHref = '#icon-arrowright'/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}