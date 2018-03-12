class Abilities extends React.Component {

  constructor() {
    super();
    this.state = {
      activeAction: 'apartment'
    };
  }

  onActionClick(element) {
    this.setState({activeAction: element});
  }

  templateActionText(data) {
    let item = data[this.state.activeAction];

    return (
      <div className = "col-sm-12 __align-center">
        <h3 className = "abilities__action-title">{item.title}</h3>
        <ul className = "abilities__action-list">
          <li>
            <div className = "abilities__action-image">
              <svg className = {item.firstIcon}>
                <use xlinkHref = {'#' + item.firstIcon} />
              </svg>
            </div>
            <p className = "abilities__action-text">{item.firstText}</p>
          </li>
          <li>
            <div className = "abilities__action-image">
              <svg className = {item.secondIcon}>
                <use xlinkHref = {'#' + item.secondIcon} />
              </svg>
            </div>
            <p className = "abilities__action-text">{item.secondText}</p>
          </li>
        </ul>
      </div>
    )
  }

  templateIconRow(array) {
    return array.map((item, i) => {
      return (
        <div className = "abilities__action" key = {i} >
          <button className = {'button__round-icon' + ((this.state.activeAction === item) ? ' active' : '')} 
          onClick = {() => {this.onActionClick(item)}}>
            <svg className = {'icon-' + item}>
              <use xlinkHref = {'#icon-' + item} />
            </svg>
          </button>
          {(i + 1 < array.length) ? (<span className = "__spliter" key = {'span' + i}/>) : ''}
        </div>
      )
    });
  }

  render() {
    let icons = ['apartment', 'shoping', 'education', 'music', 'travel'];
    let data = {
      apartment: {
        title: 'Reality',
        firstIcon: 'icon-flash',
        firstText: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra. Maecenas vitae risus est. In hendrerit, massa at.',
        secondIcon: 'icon-leaf',
        secondText: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra. Maecenas vitae risus est. In hendrerit, massa at.'
      },
      education: {
        title: 'Ability',
        firstIcon: 'icon-leaf',
        firstText: 'Maecenas vitae risus est. In hendrerit, massa at. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra.',
        secondIcon: 'icon-flash',
        secondText: 'Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra. Maecenas vitae risus est. In hendrerit, massa at. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
      },
      shoping: {
        title: 'Freedom',
        firstIcon: 'icon-flash',
        firstText: 'Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  Maecenas vitae risus est. In hendrerit, massa at.',
        secondIcon: 'icon-leaf',
        secondText: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra. Maecenas vitae risus est. In hendrerit, massa at.'
      },
      music: {
        title: 'Relax',
        firstIcon: 'icon-leaf',
        firstText: 'Maecenas vitae risus est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra. In hendrerit, massa at.',
        secondIcon: 'icon-leaf',
        secondText: 'Maecenas vitae risus est. In hendrerit, massa at. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra.'
      },
      travel: {
        title: 'Happiness',
        firstIcon: 'icon-flash',
        firstText: 'Cum sociis natoqu. Morbi penatibus et magnis dis parturient montes, nascetur ridiculus mus gravida tellus in purus pharetra, vel dignissim mauris viverra. Maecenas vitae risus est. In hendrerit, massa at.',
        secondIcon: 'icon-flash',
        secondText: 'Morbi gravida tellus in purus pharetra, vel dignissim mauris viverra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas vitae risus est. In hendrerit, massa at.'
      }
    }

    return (
      <div className = "container abilities">
        <div className = "row">
          <div className = "col-sm-12 __align-center">
            <h2 className = "abilities__title">What can DuHoot offer to you?</h2>
            <p className = "abilities__subtitle">Etiam cursus ipsum quis enim faucibus</p>
          </div>
          <div className = "col-sm-12 __align-center">{this.templateIconRow(icons)}</div>
          {this.templateActionText(data)}
        </div>
      </div>
    )
  }
}