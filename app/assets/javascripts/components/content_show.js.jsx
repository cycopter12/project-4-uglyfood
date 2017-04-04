var ContentShow = React.createClass({
  getInitialState () {
    return {contents: []}
  },

  render () {
    return (
      <div>
        <h3> Project Type: {this.props.content.project_type} </h3>
        <p> Description: {this.props.content.description}</p>
        <p> Body: {this.props.content.body} </p>
        <p> Image: <img src={this.props.content.image.url} /> </p>
      </div>

    )
  }
})
