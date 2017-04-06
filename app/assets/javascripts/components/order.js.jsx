var Order = React.createClass({

  componentWillMount: function () {
    console.log('invoicePg: ', this.props.invoice_pg)
  },

  deleteOrder: function () {
    $.ajax({
      url: `/orders/${this.props.data.id}.json`,
      type: 'DELETE',
      success: (response) => {
        console.log(response)
        this.props.returnProps(response)
        // $.get({
        //   url: '/orders/new.json',
        //   success: (response) => {
        //     console.log('GET request to /orders/new succeeded', response)
        //     this.props.returnProps(response)
        //   }
        // })
        //
        //
        //
        // this.props.returnProps(response)
      }
    })
  },

  render: function () {
    return (
      <div className='container'>
        <h3> Order Number: {this.props.idx.toString()} </h3>
        <div className='col-md-2'>
          <p>
            Order id:
            <br />
            {this.props.data.id}
          </p>
        </div>
        <div className='col-md-2'>
          <p>
            Supermarket branch:
            <br />
            {this.props.data.outlet_produce.outlet.supermarket.name} {this.props.data.outlet_produce.outlet.branch}
          </p>
        </div>
        <div className='col-md-2'>
          <p>
            Produce name:
            <br />
            {this.props.data.outlet_produce.produce.name}
          </p>
        </div>
        <div className='col-md-2'>
          <p>
            Sub-total:
            <br />
            {this.props.data.cost}
          </p>
        </div>
        <div className='col-md-2'>
          <p>
            Quantity bought:
            <br />
            {this.props.data.quantity_bought}
          </p>
        </div>
        <button onClick={this.deleteOrder}>Delete</button>
        <br />
      </div>
    )
  }
})
