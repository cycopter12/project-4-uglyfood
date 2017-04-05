var OrderForm = React.createClass({
  // only provide form params here
  getInitialState: function () {
    return {
      // outlet_produce_name: this.props.data.produce.name,
      // outlet_produce_id: this.props.data.id,
      // user_id: this.props.current_user.id,
      quantity_bought: 0,
      quantity: this.props.data.quantity,
      // purchase_date: createDate(),
      // supermarket: this.props.data.outlet.supermarket.name,
      // branch: this.props.data.outlet.branch,
      quantity_already_bought: this.props.quantity_already_bought
    }
  },

  // evalOrderQty: function (orderArr) {
  //   // outlet produce id keeps changing, probably as a result of re-arrangement of the outlet produce array
  //   console.log('calculating order qty')
  //   for (var i = 0; i < orderArr.length; i++) {
  //     if (parseInt(orderArr[i].outlet_produce.id) === parseInt(this.props.data.id)) {
  //       console.log('match!')
  //       this.setState({
  //         quantity_already_bought: orderArr[i].quantity_bought
  //       })
  //       return
  //     }
  //   }
  // },

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
  // <div className='col-md-3'>
  //   <p>Quantity already bought: {this.state.quantity_already_bought}</p>
  // </div>

  render: function () {
    return (
      <div className='container'>
        <form className='new_order' id='new_order' action='/orders' acceptCharset='UTF-8' method='post'>
          <input name='utf8' type='hidden' value='✓' />

          <div className='col-md-3'>
            <p>Name: {this.props.data.produce.name}</p>
          </div>
          <div className='col-md-3'>
            <p>Supermarket outlet: {this.props.data.outlet.supermarket.name} {this.props.data.outlet.branch}</p>
          </div>
          <div className='col-md-3'>
            <p>Quantity: {this.state.quantity}</p>
          </div>

          <div className='field col-md-3'>
            <label htmlFor='order_QTY'>Quantity</label>
            <input type='number' ref='quantity_bought' name='order[quantity_bought]' id='order_quantity_bought' value={this.state.quantity_bought} onChange={this.handleChange} />
          </div>

          <div className='actions'>
            <input type='submit' name='commit' value='Submit' className='btn btn-default' data-disable-with='Submit' onClick={this.submitForm} />
          </div>
        </form>
        <br />
        <hr />
      </div>
    )
  }
})