var ContentList = React.createClass({
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
      var accepted = this.refs.accepted.value
      var content = {id: id, projectType: projectType, body: body, description: description, image: image, accepted: accepted}
      this.props.handleEdit(content)
    }
    this.setState({editable: !this.state.editable})
  },
  render () {
    var projectType = this.state.editable ? <select type='text' ref='project_type' defaultValue={this.props.content.project_type}>
      <option value='cooking'>cooking</option>
      <option value='life hacks'>life hacks</option>
    </select> : <h3>{this.props.content.project_type}</h3>
    var body = this.state.editable ? <textarea type='text' ref='body' defaultValue={this.props.content.body} /> : <p />
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.content.description} /> : <p>{this.props.content.description}</p>
    var image = this.state.editable ? <input type='file' ref='image' defaultValue={this.props.content.image.url} /> : <img src={this.props.content.image.url} />
    var accepted = this.state.editable ? <input type='checkbox' ref='accepted' defaultValue={this.props.content.accepted} /> : <p />
    var id = this.props.content.id
    return (
      <div className='container'>
        <h1>All Contents</h1>
        <div className='row'>
          <div className='col-md-5'>
          Project Type
            {projectType}
          </div>
          <div className='col-md-5'>
            Title
              {description}
          </div>
          <div className='col-md-5'>
            {body}
          </div>
          <div className='col-md-5'>
            {image}
          </div>
          <div className='col-md-5'>
            {accepted}
          </div>
        </div>
          <div className='col-md-3'>
          <div className="editDeleteBtn">
            <button onClick={this.props.handleDelete}> Delete </button>
            <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
            <a type='button' href={'/contents/' + id}>Show</a>
            </div>
        </div>
      </div>
    )
  }
})
