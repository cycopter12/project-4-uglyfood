// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// helper
function createDate () {
  var today = new Date()

  var year = today.getFullYear().toString()
  var month = (today.getMonth() + 1).toString()
  var day = today.getDate().toString()
  var date = ''

  if (month.length < 2) {
    month = '0' + month
  }

  if (day.length < 2) {
    day = '0' + day
  }

  date = year + '-' + month + '-' + day

  return date
}

// react components
var Orders = React.createClass({
  // getInitialState: function () {
  //   return {
  //     records: this.props.data
  //   }
  // },

  render: function () {
    return (
      <div className='row'>
        <div className='col-md-4'>
          {this.props.data.map((order, i) => <Order key={i} data={order} idx={i + 1} />)}
        </div>
      </div>
    )
  }
})

var Order = React.createClass({
  // getInitialState: function () {
  //   return {
  //     record: this.props.data
  //   }
  // },

  render: function () {
    return (
      <div>
        <h3> Order Number: {this.props.idx.toString()} </h3>
        <p> Order id: {this.props.data.id}</p>
        <p> Sub-total: {this.props.data.cost} </p>
        <p> Quantity bought: {this.props.data.quantity_bought} </p>
        <br />
      </div>
    )
  }
})

var PlaceOrders = React.createClass({
  getInitialState: function () {
    return {
      orders: this.props.data
    }
  },

  // handleNewOrder: function(created_order) {
  //   this.setState({
  //     orders: this.state.orders.push(created_order)
  //   })
  // },

  render: function () {
    return (
      <div className='row'>
        <p> {this.props.data_inspect} </p>
        {this.props.data.map((outlet_produce, i) => <OrderForm key={i} data={outlet_produce} idx={i + 1} current_user={this.props.current_user} />)}
      </div>
    )
  }
})

var OrderForm = React.createClass({
  // only provide form params here
  getInitialState: function () {
    return {
      // outlet_produce_name: this.props.data.produce.name,
      outlet_produce_id: this.props.data.produce_id,
      user_id: this.props.current_user.id,
      quantity_bought: 0,
      // quantity: this.props.data.quantity,
      purchase_date: createDate()
      // supermarket: this.props.data.outlet.supermarket.name,
      // branch: this.props.data.outlet.branch
    }
  },

  handleChange: function (e) {
    var name = e.target.name
    name = name.replace(/[[\]]/g, '').replace(/(order)/g, '')
    // console.log(name);
    // this.setState({ name: e.target.value })
    // console.log(e.target.value);
    var stateObject = function () {
      var returnObj = {}
      returnObj[name] = +this.target.value
      return returnObj
    }.bind(e)()
    console.log(stateObject)
    this.setState(stateObject)
  },

  submitForm: function (e) {
    e.preventDefault()
    console.log(this.state)
    $.post({ url: '/orders',
      data: { order: this.state },
      success: (response) => {
        console.log('it worked!')
      } })
  },

  render: function () {
    return (
      <form className='new_order' id='new_order' action='/orders' acceptCharset='UTF-8' method='post'>
        <input name='utf8' type='hidden' value='✓' />
        <input type='hidden' name='authenticity_token' value='TB2ZMr8mXdCwaGU89iSpaMdwgJZpiyCyqrHnTMP2Dvla/xdjltXy/buJ6IGB9c7bxBAB+wroyXJguUKTtU8wIA==' />
        <div className='col-md-4'>
          <p>Name: {this.props.data.produce.name}</p>
        </div>
        <div className='col-md-4'>
          <p>Supermarket outlet: {this.props.data.outlet.supermarket.name} {this.props.data.outlet.branch}</p>
        </div>
        <div className='col-md-4'>
          <p>Quantity: {this.props.data.quantity}</p>
        </div>
        <div className='field'>
          <label htmlFor='order_QTY'>Quantity</label>
          <input type='number' ref='quantity_bought' name='order[quantity_bought]' id='order_quantity_bought' value={this.state.quantity_bought} onChange={this.handleChange} />
        </div>
        <div className='field'>
          <label htmlFor='order_User'>User</label>
          <input value={this.state.current_user} type='text' ref='user_id' name='order[user_id]' id='order_user_id' />
        </div>
        <div className='field'>
          <label htmlFor='order_outlet_produce_id'>Outlet produce</label>
          <input value={this.state.outlet_produce_id} type='text' ref='outlet_produce_id' name='order[outlet_produce_id]' id='order_outlet_produce_id' />
        </div>
        <div className='field'>
          <label htmlFor='order_purchase_date'>Purchase date</label>
          <input value={this.state.purchase_date} type='date' ref='purchase_date' name='order[purchase_date]' id='order_purchase_date' />
        </div>
        <div className='actions'>
          <input type='submit' name='commit' value='Submit' className='btn btn-default' data-disable-with='Submit' onClick={this.submitForm} />
        </div>
      </form>
    )
  }
})
