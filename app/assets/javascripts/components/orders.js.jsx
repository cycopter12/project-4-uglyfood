var Orders = React.createClass({

  getInitialState: function () {
    return {
      orders: this.props.data
    }
  },

  getUpdateFromDelete: function (responseObj) {
    console.log('deleting...')
    return this.setState({
      orders: responseObj.orders
    })
  },

  render: function () {
    // var arr = []
    //
    // if (this.props.invoice_pg) {
    //   arr = this.state.orders
    // } else {
    //   arr = this.props.data
    // }

    return (
      <div className='container' style={{marginTop: 5 + 'em'}}>
        <div style={{visibility: !(this.state.orders.length === 0) ? 'visible' : 'hidden', marginTop:3+"em" }}>
        <div className='OProw' style={{color: '#33995C', fontSize: 1.4 + 'em', fontWeight: 'bold', paddingLeft: '0'}}>
          <div class='col-md-12'>
            <div className='col-md-2'><h4>id</h4><hr style={{maxWidth: 100 + '%'}} /></div>
            <div className='col-md-2'><h4>Branch</h4><hr style={{maxWidth: 100 + '%'}} /></div>
            <div className='col-md-2'><h4>Produce</h4><hr style={{maxWidth: 100 + '%'}} /></div>
            <div className='col-md-2'><h4>Bought</h4><hr style={{maxWidth: 100 + '%'}} /></div>
            <div className='col-md-4'><h4>Subtotal</h4><hr style={{maxWidth: 50 + '%', marginLeft: 0}} /></div>
          </div>
        </div>
        {this.state.orders.map((order, i) => <Order key={i} data={order} idx={i + 1} returnProps={this.getUpdateFromDelete} />)}
        <div className='container'>
        <p style={{visibility: this.state.orders.length === 0 ? 'visible' : 'hidden' }}>
        You have no orders!
        <a className="btn-1" href='/orders/new'> Place an order </a>
        </p>

        </div>
          <a className='btn-1' href='/orders/new'> Place an order </a>
        </div>
      </div>
    )
  }
})
