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

//   submitForm: function (e) {
//   e.target.preventDefault()
//   console.log(this.state)
//   $.post({ url: '/orders',
//     data: { order: this.state },
//     success: (response) => {
//       console.log('it worked!')
//     } })
// },
  render () {
    return (

      <div>
        <h3> Product Type:{this.props.content.product_type} </h3>
        <p> Description: {this.props.description}</p>
        <p> Body: {this.props.content.body} </p>
        <p> Image: <img src={this.props.image}/> </p>


      </div>

    )
  }
}
