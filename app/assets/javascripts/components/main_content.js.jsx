var MainContent = React.createClass({
  getInitialState () {
    return {contents: []}
  },

  // handleShow(id){
  //   $.ajax({
  //     url: `/contents/${content.id}`,
  //     type: 'GET',
  //     data: {content: content},
  //     success: (data) => {
  //       this.showContents(data)
  //       console.log(data.json.inspect)
  //     }
  //   })
  // },
  showContents(id){
    var contents = this.state.contents.filter((content)=>{
      return content.id = id
    })
    this.setState({contents: contents})
  },
  handleDelete (id) {
    $.ajax({
      url: `/contents/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeContentClient(id)
      }
    })
  },
  removeContentClient (id) {
    var newContents = this.state.contents.filter((content) => {
      return content.id != id
    })
    this.setState({contents: newContents})
  },
  render: function () {
    return (
      <div>
        <ContentIndex contents={this.state.contents} />
        <ContentShow contents={this.state.contents} handleDelete={this.handleDelete} onUpdate={this.handleEdit} />
      </div>
    )
  }
})
