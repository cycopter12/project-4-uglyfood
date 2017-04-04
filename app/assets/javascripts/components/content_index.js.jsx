var ContentIndex = React.createClass({
  handleDelete (id) {
    this.props.handleDelete(id)
  },
  onUpdate (content) {
    this.props.onUpdate(content)
  },
  handleShow (content) {
    this.props.handleShow(content)
  },
  getInitialState () {
    return {contents: []}
  },

  componentDidMount () {
    $.getJSON('/contents.json', (response) => { this.setState({ contents: response }) })
    console.log(this.state.contents)
  },
  render () {
    var contents = this.state.contents.map((content) => {
      return (
        <div key={content.id}>
          <ContentList content={content}
            handleDelete={this.handleDelete.bind(this, content.id)}
            handleEdit={this.onUpdate}
            handleShow={this.handleShow.bind(this, content.id)}
          />

        </div>
      )
    })
    return (
      <div>
        {contents}
      </div>
    )
  }
})
