class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      elementsAtAll: 0, 
      content: [],
      filterRule: {
        categories: 'recommended',
        city: '',
        action: '',
        keyword: '',
      }
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
      state.filterRule = newRule;
      state.pageNumber = 1;
      state.elementsAtAll = 0;
      self.setState(state);
    });
  }

  componentWillUnmount() {
    window.ee.removeListener('FilterRule.add');
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

  countEventsOnPage() {
    let lines = this.props.data.eventLinesOnPage;
    let elementsInRow = (window.innerWidth < 1200) ? 3 : 4;

    return (elementsInRow * lines * this.state.pageNumber);
  }

  templateContentOutput(rule, array) {
    let maxItemsNumber = this.countEventsOnPage();

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

  getData() {
    return fetch('/events/', { 
      method: 'GET'
    })
      .then(dataWrappedByPromise => dataWrappedByPromise.json());
  }

  render() {
    let filterRule = this.state.filterRule;
    let content = this.state.content;
    let maxEventsOnPage = this.countEventsOnPage();

    return (
      <div className = "container content">
        <div className = "row">
          {this.templateContentOutput(filterRule, content)}
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