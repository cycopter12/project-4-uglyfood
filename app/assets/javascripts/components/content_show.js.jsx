// class ContentShow extends React.Component{
//   render() {
//     return (
//       <div>
//         <h3> Product Type: </h3>
//         <p> Description: {this.props.content.description}</p>
//         <p> Body: {this.props.content.body} </p>
//         <p> Image: {this.props.content.image} </p>
//         <br />
//       </div>
//     );
//   }
// };

class ContentShow extends React.Component {

  render () {
    return (

      <div>
        <h3> Project Type: {this.props.content.project_type} </h3>
        <p> Description: {this.props.content.description}</p>
        <p> Body: {this.props.content.body} </p>
        <p> Image: <img src={this.props.image}/> </p>

      </div>

    )
  }
}
