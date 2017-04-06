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
      var costPerUnit = this.refs.cost_per_unit.value
      var outletProduce = {id: outletProduceId, outlet_id: outletId, produce_id: produceId, quantity: quantity, date: date, cost_per_unit: costPerUnit}
      this.props.handleUpdate(outletProduce)

      console.log('in handleEdit', quantity)
    }
    this.setState({editable: !this.state.editable})
  },

  render() {
    var quantity = this.state.editable ? <div><input id="qtyInput" type='text' ref='quantity' defaultValue={this.props.outletProduce.quantity} /></div> : <div>{this.props.outletProduce.quantity}</div>

    var costPerUnit = this.state.editable ? <div>$<input id="qtyInput" type='text' ref='cost_per_unit' defaultValue={Number(this.props.outletProduce.cost_per_unit).toFixed(2)} /></div> : <div>${Number(this.props.outletProduce.cost_per_unit).toFixed(2)}</div>

    return (
      <div className="row" id="OProw">
        <div className="col-md-3">
        <div>{this.props.outletProduce.produce.name}</div>
        <div>{costPerUnit}</div>
        </div>
        <div className="col-md-3 OPcolumn">
        <div>{quantity}</div>
        </div>
        <div className="col-md-3 OPcolumn">
        ${Number(this.props.outletProduce.cost_per_unit * this.props.outletProduce.quantity).toFixed(2)}
        </div>
        <div className="col-md-3 OPcolumn">
        <div className="editDeleteBtn"><button className="btn-1" id="editBtn" onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit'} </button>
        <button className="btn-1" onClick={this.props.handleDelete}> Delete </button></div>
        </div>
      </div>
    )
  }
})
