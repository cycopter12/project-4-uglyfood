var OrderForm = React.createClass({
  // only provide form params here
  getInitialState: function () {
    return {
      quantity_bought: 0,
      quantity: this.props.data.quantity,
      quantity_already_bought: this.props.showOrderQuantity(this.props.orders, this.props.data.id)
    }
  },

  handleChange: function (e) {
    var name = e.target.name
    name = name.replace(/[[\]]/g, '').replace(/(order)/g, '')

    var stateObject = (function () {
      var returnObj = {}
      returnObj[name] = +e.target.value
      return returnObj
    }())
    console.log(stateObject)
    this.setState(stateObject)
  },

  submitForm: function (e) {
    console.log(e.cancelable)
    e.preventDefault()
    orderObj = {
      user_id: this.props.current_user.id,
      quantity_bought: this.state.quantity_bought,
      outlet_produce_id: this.props.data.id,
      purchase_date: createDate()
    }
    console.log(orderObj)
    $.post({
      url: '/orders.json',
      data: { order: orderObj },
      success: (response) => {
        console.log('it worked!', response)
        // shows whats left of produce and resets order quantity
        resObj = {
          // outlet_produce_id: response.order.outlet_produce_id,
          quantity_bought: 0,
          quantity: this.state.quantity - response.quantity_ordered,
          // user_id: response.order.user_id,
          quantity_already_bought: parseInt(response.order.quantity_bought)
        }
        // console.log(resObj);
        this.setState(resObj)
        $.get({
          url: '/orders/new.json',
          success: (response) => {
            console.log('GET request to /orders/new succeeded', response)
            this.props.returnProps(response)
          }
        })
      }
    })
  },

  // componentWillReceiveProps(nextProps) {
  //   this.evalOrderQty(nextProps.orders)
  // },

  // code below to show quantity already bought, removed because buggy
  // <div className='col-md-3 OPcolumn'>
  //   Quantity already bought: {this.state.quantity_already_bought}</p>
  // </div>

  // <div className='col-md-3 OPcolumn'>
  //   <p>Supermarket outlet: {this.props.data.outlet.supermarket.name} {this.props.data.outlet.branch}</p>
  // </div>

  render: function () {
    return (
      <div className='col-md-9 OProw' style={{borderBottom:0}}>
        <form className='new_order' id='new_order' action='/orders' acceptCharset='UTF-8' method='post'>
          <input name='utf8' type='hidden' value='✓' />

          <div className='col-md-3 OPcolumn' style={{marginBottom:0}}>
            {this.props.data.produce.name}
          </div>

          <div className='col-md-3 OPcolumn' style={{marginBottom:0}}>
            {this.state.quantity}
          </div>
          <div className='col-md-3 OPcolumn' style={{marginBottom:0}}>
             {this.state.quantity_already_bought}
          </div>

          <div className='field col-md-3 OPcolumn' style={{marginBottom:0}}>
            <label htmlFor='order_QTY'></label>
            <input type='number' ref='quantity_bought' name='order[quantity_bought]' id='qtyInput' min="0" value={this.state.quantity_bought} onChange={this.handleChange} />
          </div>

          <div className='actions' style={{marginBottom:0}}>
            <input type='submit' name='commit' value='Submit' className='btn btn-default' data-disable-with='Submit' onClick={this.submitForm} style={{visibility:'hidden'}} />
          </div>
        </form>
      </div>
    )
  }
})
