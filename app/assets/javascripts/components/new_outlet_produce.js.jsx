var NewOutletProduce = React.createClass({
  handleClick () {
    var produceId = this.refs.produce_id.value
    var quantity = this.refs.quantity.value
    var outletId = this.props.currentUser.outlet_id
    var date = this.props.date

    // console.log(date);

    $.ajax({
      url: '/outlet_produces',
      type: 'POST',
      data: { outlet_produce: { produce_id: produceId, quantity: quantity, outlet_id: outletId, date: date } },
      success: (OutletProduce) => {
        this.props.handleSubmit(OutletProduce)
      }
    })
    // console.log('The produceId value is ' + produceId + ' and the quantity value is ' + quantity);
  },

  render () {
    return (
      <div>
        <div className="newProduceIdQty">
          Produce ID: <input id="newOP" ref='produce_id' />
        </div>
        <div className="newProduceIdQty">
          Produce quantity: <input id='newOP' ref='quantity' />
        </div>
        <div className='submitBtn'><button onClick={this.handleClick}>Submit</button></div>
      </div>
    )
  }
})
