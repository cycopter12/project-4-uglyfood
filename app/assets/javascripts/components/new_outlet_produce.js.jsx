var NewOutletProduce = React.createClass({
  handleClick() {
    var produceId = this.refs.produce_id.value;
    var quantity = this.refs.quantity.value;
    var outletId = this.refs.outlet_id.value;
    var date = this.refs.date.value

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

  render() {
    return (
      <div>
        <input ref='produce_id' placeholder='Produce id' /><br/>
        <input ref='quantity' placeholder='Produce quantity' /><br/>
        <input ref='outlet_id' placeholder='Outlet id' /><br/>
        <input ref='date' placeholder='YYYY-MM-DD' /><br/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
})
