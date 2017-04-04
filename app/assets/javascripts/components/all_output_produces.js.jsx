var AllOutletProduces = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id)
  },

  onUpdate(outletProduce) {
    this.props.onUpdate(outletProduce)
  },

  render() {
    console.log(this.props.outletProduces);
    var outletProduces = this.props.outletProduces.map((outletProduce) => {
      return (
        <div key={outletProduce.id}>
        <OutletProduce outletProduce={outletProduce} handleDelete={this.handleDelete.bind(this, outletProduce.id)} handleUpdate={this.onUpdate} />
        </div>
      )
    });

    return (
      <div>
        {outletProduces}
      </div>
    )
  }
})
