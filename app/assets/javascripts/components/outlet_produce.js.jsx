var OutletProduce = React.createClass({
  getInitialState() {
    return {editable: false}
  },

  handleEdit() {
    if(this.state.editable) {
      var quantity = this.refs.quantity.value
      var outletProduceId = this.props.outletProduce.id
      var date = this.props.outletProduce.date
      var outletId = this.props.outletProduce.outlet.id
      var produceId = this.props.outletProduce.produce.id
      var outletProduce = {id: outletProduceId, outlet_id: outletId, produce_id: produceId, quantity: quantity, date: date}
      this.props.handleUpdate(outletProduce)
      
      console.log('in handleEdit', quantity)
    }
    this.setState({editable: !this.state.editable})
  },

  render() {
    var quantity = this.state.editable ? <input type='text' ref='quantity' defaultValue={this.props.outletProduce.quantity} /> : <p>Quantity: {this.props.outletProduce.quantity}</p>

    return (
      <div>
        <h3>{this.props.outletProduce.produce.name}</h3>
        {quantity}
        <p>Supermarket: {this.props.outletProduce.outlet.name} {this.props.outletProduce.outlet.branch}</p>
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'} </button>
        <button onClick={this.props.handleDelete}> Delete </button>
      </div>
    )
  }
})
