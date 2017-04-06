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
      <div className='OProw' style={{marginTop:2+"em"}}>
        <div className='col-md-2 OPcolumn'>
            {this.props.data.id}
        </div>
        <div className='col-md-2 OPcolumn'>
            {this.props.data.outlet_produce.outlet.supermarket.name} {this.props.data.outlet_produce.outlet.branch}
        </div>
        <div className='col-md-2 OPcolumn'>
            {this.props.data.outlet_produce.produce.name}
        </div>
        <div className='col-md-2 OPcolumn'>
            {this.props.data.cost}
        </div>
        <div className='col-md-2 OPcolumn'>
            {this.props.data.quantity_bought}
        </div>
        <button className='btn-1' onClick={this.deleteOrder}>Delete</button>
        <br />
      </div>
    )
  }
})
