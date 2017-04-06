var ContentList = React.createClass({
  getInitialState () {
    return {editable: false}
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
          <div className='col-md-4'>
          Project Type
            {projectType}
          </div>
          <div className='col-md-4'>
            Title
              {description}
          </div>
          <div className='col-md-4'>
            {body}
          </div>
          <div className='col-md-4'>
            {image}
          </div>
          <div className='col-md-4'>
            {accepted}
          </div>
        </div>
        <div className="col-md-3">
            <a type='button' href={'/contents/' + id}>Show</a>
            </div>
        </div>


    )
  }
})
