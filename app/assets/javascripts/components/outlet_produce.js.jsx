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
    var quantity = this.state.editable ? <p>Quantity: <input id="qtyInput" type='text' ref='quantity' defaultValue={this.props.outletProduce.quantity} /></p> : <p>Quantity: {this.props.outletProduce.quantity}</p>

    return (
      <div className="row" id="OProw">
        <div className="col-md-3 OPcolumn">
        <div>{this.props.outletProduce.produce.name}</div>
        <div>${Number(this.props.outletProduce.cost_per_unit).toFixed(2)}</div>
        </div>
        <div className="col-md-3 OPcolumn">
        <div>{quantity}</div>
        </div>
        <div className="col-md-3 OPcolumn">
        ${Number(this.props.outletProduce.cost_per_unit * this.props.outletProduce.quantity).toFixed(2)}
        </div>
        <div className="col-md-3 OPcolumn">
        <div className="editDeleteBtn"><button id="editBtn" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'} </button>
        <button onClick={this.props.handleDelete}> Delete </button></div>
        </div>
      </div>
    )
  }
})
