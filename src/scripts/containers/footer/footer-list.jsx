class FooterList extends React.Component {

  templateTextList(data) {
    function listOfItems(array) {
      return array.items.map( (item, i) => {
        return (
          <a href = "#" className = "footer__list-item" key = {i}>{item}</a>
        )
      });
    }

    return(
      <div className = "footer__list">
        <p className = "footer__list-title">{data.title}</p>
        {listOfItems(data)}
      </div>
    )
  }

  templateSocialList(array) {
    return array.map( (item, i) => {
      return (
        <a href="#" key = {i}>
          <svg className = {'icon-' + item} >
            <use xlinkHref = {'#icon-' + item} />
          </svg>
        </a>
      )
    });
  }

  render() {
    let column = {
      title: 'Ipsum quis',
      items: ['Aliquam quis', 'Pulvinar purus', 'Etiam cursus', 'Ipsum quis', 'Enim faucibus']
    };
    let social = ['facebook', 'twitter', 'gplus', 'youtube'];

    return (
      <div className = "row">
        <div className = "col-sm-6 col-md-4">
          {this.templateTextList(column)}
        </div>
        <div className = "col-sm-6 col-md-4">
          {this.templateTextList(column)}
        </div>
        <div className = "col-sm-12 col-md-4">
          <div className = "footer__list">
            <p className = "footer__list-title">Follow us</p>
            <div className = "footer__list-social">{this.templateSocialList(social)}</div>
            <p className = "footer__list-copyright">Copyright © All Rights reserved</p>
          </div>
        </div>

      </div>
    );
  }
}