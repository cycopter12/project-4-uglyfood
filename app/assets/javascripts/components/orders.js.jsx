var Orders = React.createClass({
  // componentWillMount: function () {
  //   console.log('Orders:', this.props.data)
  // },
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

    var arr = []

    if (this.props.invoice_pg) {
      arr = this.state.orders
    } else {
      arr = this.props.data
    }

    return (
      <div className='container'>
        {arr.map((order, i) => <Order key={i} data={order} idx={i + 1} returnProps={this.getUpdateFromDelete} invoice_pg={this.props.invoice_pg} />)}
      </div>
    )
  }
})
