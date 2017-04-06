var ContentShow = React.createClass({
  handleDelete () {
    $.ajax({
      url: `/contents/${this.props.content.id}`,
      type: 'DELETE',
      success: () => {
        this.removeContentClient(this.props.content.id)
      }
    })
  },
  removeContentClient (id) {
    var newContents = this.state.contents.filter((content) => {
      return content.id != id
    })
    this.setState({contents: newContents})
  },
  updateContents (content) {
    var contents = this.state.contents.filter((i) => { return i.id != content.id })
    contents.push(content)

    this.setState({contents: contents })
  },
  // handleDelete (id) {
  //   this.props.handleDelete(id)
  // },
  getInitialState () {
    return {contents: []}
  },
  getInitialState () {
    return {editable: false}
  },
  handleEdit () {
    if (this.state.editable) {
      var projectType = this.refs.project_type.value
      var id = this.props.content.id
      var body = this.refs.body.value
      var description = this.refs.description.value
      var image = this.refs.image.value
      // var accepted = this.refs.accepted.value
      var content = {id: id, projectType: projectType, body: body, description: description, image: image}
      var form = $('#new_content')[0]
      var data = new FormData(form)
      $.ajax({
        url: `/contents/${content.id}`,
        type: 'PUT',
        data: {content: content},
        success: (content) => {
          this.updateContents(this.props.content.id)
        }
      })
    }
    this.setState({editable: !this.state.editable})
  },
  render () {
    var projectType = this.state.editable ? <select type='text' ref='project_type' defaultValue={this.props.content.project_type}>
      <option value='cooking'>cooking</option>
      <option value='life hacks'>life hacks</option>
    </select> : <h3>{this.props.content.project_type}</h3>
    var body = this.state.editable ? <textarea type='text' ref='body' defaultValue={this.props.content.body} /> : <p>{this.props.content.body}</p>
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.content.description} /> : <p>{this.props.content.description}</p>
    var image = this.state.editable ? <input type='file' ref='image' defaultValue={this.props.content.image.url} /> : <img src={this.props.content.image.url} />
    var accepted = this.state.editable ? <input type='checkbox' ref='accepted' defaultValue={this.props.content.accepted} /> : <p />
    return (
      <div className='container'>
        <div className='content'>
          <h2>Project Type:</h2> {projectType}
          <h2>Title:</h2> {description}
          <h2>Description: {body}</h2>
          <h2>{image}</h2>

          <button className='btn-1' onClick={this.handleDelete}> Delete </button>
          <button className='btn-1' onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
          <a href="/contents"><button className="btn-1">Back</button></a>
        </div>
      </div>
    )
  }
})
