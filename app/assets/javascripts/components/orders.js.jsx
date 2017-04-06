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
      <div className='container'>
        {this.props.data.length}
        <p style={{visibility: this.state.orders.length === 0 ? 'visible' : 'hidden' }}>
          You have no orders!
          <a href='/orders/new'> Place an order </a>
        </p>
        {this.state.orders.map((order, i) => <Order key={i} data={order} idx={i + 1} returnProps={this.getUpdateFromDelete} />)}
        <p style={{visibility: !(this.state.orders.length === 0) ? 'visible' : 'hidden' }}>
          <a href='/orders/new'> Place an order </a>
        </p>
      </div>
    )
  }
})
