var Order = React.createClass({

  // componentWillMount: function () {
  //   console.log('Individual order:', this.props.data)
  // },

  deleteOrder: function () {
    $.ajax({
      url: `/orders/${this.props.data.id}.json`,
      type: 'DELETE',
      success: (response) => {
        console.log(response)

        $.get({
          url: '/orders/new.json',
          success: (response) => {
            console.log('GET request to /orders/new succeeded', response)
            this.props.returnProps(response)
          }
        })
        //
        //
        //
        // this.props.returnProps(response)
      }
    })
  },

  render: function () {
    return (
      <div className='col-md-2'>
        <h3> Order Number: {this.props.idx.toString()} </h3>
        <p> Order id: {this.props.data.id}</p>
        <p> Produce name: {this.props.data.outlet_produce.produce.name} </p>
        <p> Sub-total: {this.props.data.cost} </p>
        <p> Quantity bought: {this.props.data.quantity_bought} </p>
        <button onClick={this.deleteOrder}>Delete</button>
        <br />
      </div>
    )
  }
})
