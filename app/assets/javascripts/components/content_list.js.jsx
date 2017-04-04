var ContentList = React.createClass({
  getInitialState () {
    return {editable: false}
  },
  handleEdit () {
    if(this.state.editable){
      var projectType= this.refs.project_type.value;
      var id= this.props.content.id;
      var body=this.refs.body.value;
      var description=this.refs.description.value;
      var image=this.refs.image.value
      var content={id: id, projectType: projectType, body: body, description: description, image: image}
      this.props.handleEdit(content)
    }
    this.setState({editable: !this.state.editable})
  },
  handleShow(){
    this.props.handleShow(this.props.content.id)
    this.setState({select: !this.state.select})
  },

  render () {
    var projectType = this.state.editable ? <select type='text' ref='project_type' defaultValue={this.props.content.project_type} /> : <h3>{this.props.content.project_type}</h3>
    var body = this.state.editable ? <input type='text' ref='body' defaultValue={this.props.content.body} /> : <p>{this.props.content.body}</p>
    var description = this.state.editable ? <textarea type='text' ref='description' defaultValue={this.props.content.description} /> : <p>{this.props.content.description}</p>
    var image = this.state.editable ? <input type='file' ref='image' defaultValue={this.props.content.image.url} /> : <img src={this.props.content.image.url}/>
    var id = this.props.content.id
    return (
      <div>
        {projectType}
        {body}
        {description}
        {image}
        
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit'}</button>
        <a type="button" href={"/contents/" + id}>Show</a>
      </div>
    )
  }
})
