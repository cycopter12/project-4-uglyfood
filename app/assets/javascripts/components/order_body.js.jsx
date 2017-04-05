var OrderBody = React.createClass({
  getInitialState: function () {
    return {
      outlet_produces: this.props.data,
      orders: this.props.orders,
      order_summary: this.props.order_summary,
      current_user: this.props.current_user
    }
  },

  // handleNewOrder: function(created_order) {
  //   this.setState({
  //     orders: this.state.orders.push(created_order)
  //   })
  //

  showOrderQuantity: function (outletProduceId) {
    console.log('calculating order qty')
    console.log(this.state.orders)
    for (var i = 0; i < this.state.orders.length; i++) {
      console.log('query:', outletProduceId)
      console.log('obj OP_id:', this.state.orders[i].outlet_produce.id)
      if (this.state.orders[i].outlet_produce.id === outletProduceId) {
        console.log(this.state.orders[i].quantity_bought)
        return this.state.orders[i].quantity_bought
      }
    }
    console.log('nothing found')
    return 0
  },

  // componentWillMount: function () {
  //   console.log('Main div:', this.props.orders)
  // },

  getNewPropsFromChild: function (responseObj) {
    console.log('parent talking here', responseObj)
    return this.setState({
      outlet_produces: responseObj.outlet_produces,
      orders: responseObj.orders,
      order_summary: responseObj.order_summary
    })
  },

  render: function () {
    return (
      <div className='container'>
        <h2>Orders per outlet_produce</h2>
        <Orders data={this.state.orders} getUpdateFromDelete={this.getNewPropsFromChild.bind(this)} />
        <h2>Summarised orders</h2>
        {Object.keys(this.state.order_summary).map((name, i) => <OrderSummary data={name} value={this.state.order_summary[name]} key={i} />)}
        <h2>Order form</h2>
        {this.state.outlet_produces.map((outlet_produce, i) => <OrderForm key={i} data={outlet_produce} idx={i + 1} current_user={this.state.current_user} returnProps={this.getNewPropsFromChild.bind(this)} quantity_already_bought={this.showOrderQuantity(outlet_produce.id)} orders={this.state.orders} />)}
      </div>
    )
  }
})
