var OrderBody = React.createClass({
  getInitialState: function () {
    return {
      outlet_produces: this.props.data,
      orders: this.props.orders,
      order_summary: this.props.order_summary,
      current_user: this.props.current_user
    }
  },

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
    return total.toFixed(2)
  },

// quantity_already_bought={this.showOrderQuantity(this.state.orders, outlet_produce.id)}

// {this.state.outlet_produces.map((outlet_produce, i) => <OrderForm key={i} data={outlet_produce} idx={i + 1} current_user={this.state.current_user} returnProps={this.getNewPropsFromChild.bind(this)} />)}

// <OrderForm key={j} data={item} current_user={this.state.current_user} returnProps={this.getNewPropsFromChild.bind(this)} />

// <h2>Orders per outlet_produce</h2>
// <Orders data={this.state.orders} invoice_pg={this.props.invoice_pg} />

  render: function () {
    return (
      <div className='container' style={{marginTop:5+"em"}}>
        <div className="container">
          <div className="col-md-9">
              {Object.keys(this.state.outlet_produces).map((branch, i) => <BranchItems key={i} data={this.state.outlet_produces[branch]} returnProps={this.getNewPropsFromChild.bind(this)} current_user={this.state.current_user} branchName={branch} showOrderQuantity={this.showOrderQuantity} orders={this.state.orders} />)}
          </div>
          <div className='col-md-3'>
            <div className="OPheading" style={{color:"#222222",paddingLeft:1.5+"em",borderBottom:0}}>Your orders</div>
            <div style={{paddingLeft:1.5+"em"}}>
              {Object.keys(this.state.order_summary).map((name, i) => <OrderSummary data={name} count={this.state.order_summary[name]['quantity_bought']} subtotal={this.state.order_summary[name]['subtotal']} key={i} />)}
              <div style={{color:"#33995C",fontSize:1.8+"em",fontWeight:"bold",paddingLeft:1+"em"}}>Total: $ {this.getOrderTotal()} </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
})
