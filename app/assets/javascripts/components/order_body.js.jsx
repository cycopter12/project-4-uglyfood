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

  showOrderQuantity: function (orderArr, outletProduceId) {
    console.log('calculating order qty')
    console.log(orderArr)
    for (var i = 0; i < this.state.orders.length; i++) {
      console.log('query:', outletProduceId)
      console.log('obj OP_id:', orderArr[i].outlet_produce.id)
      if (orderArr[i].outlet_produce.id === outletProduceId) {
        console.log(orderArr[i].quantity_bought)
        return orderArr[i].quantity_bought
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

  getOrderTotal: function () {
    var total = 0
    for (var item in this.state.order_summary) {
      total += +this.state.order_summary[item]['subtotal']
    }
    return total
  },

  // componentDidMount: function() {
  //   this.getOrderTotal()
  // },

// quantity_already_bought={this.showOrderQuantity(this.state.orders, outlet_produce.id)}

// {this.state.outlet_produces.map((outlet_produce, i) => <OrderForm key={i} data={outlet_produce} idx={i + 1} current_user={this.state.current_user} returnProps={this.getNewPropsFromChild.bind(this)} />)}

// <OrderForm key={j} data={item} current_user={this.state.current_user} returnProps={this.getNewPropsFromChild.bind(this)} />

  render: function () {
    return (
      <div className='container'>
        <h2>Orders per outlet_produce</h2>
        <Orders data={this.state.orders} invoice_pg={this.props.invoice_pg} />
        <div>
          <h2>Summarised orders</h2>
          {Object.keys(this.state.order_summary).map((name, i) => <OrderSummary data={name} count={this.state.order_summary[name]['quantity_bought']} subtotal={this.state.order_summary[name]['subtotal']} key={i} />)}
          <p>Total: {this.getOrderTotal()} </p>
        </div>

        <h2>Order form</h2>

        {Object.keys(this.state.outlet_produces).map((branch, i) => <BranchItems key={i} data={this.state.outlet_produces[branch]} returnProps={this.getNewPropsFromChild.bind(this)} current_user={this.state.current_user} branchName={branch} showOrderQuantity={this.showOrderQuantity} />)}
      </div>
    )
  }
})
