var Body = React.createClass({
  getInitialState() {
    return { outletProduces: [] }
  },

  componentDidMount() {
    $.getJSON('/outlet_produces.json', (response) => { this.setState({ outletProduces: response }) })
    console.log('Component mounted');
  },

  handleSubmit(OutletProduce) {
    var newState = OutletProduce
    // console.log(this.state.outletProduces);
    this.setState({ outletProduces: newState })
  },

  handleDelete(id) {
    $.ajax({
      url: `/outlet_produces/${id}`,
      type: 'DELETE',
      success:() => {
        this.removeOutletProduce(id)
      }
    })
  },

  removeOutletProduce(id) {
    var newOutletProduces = this.state.outletProduces.filter((outletProduce) => {
      return outletProduce.id != id
    })
    this.setState({ outletProduces: newOutletProduces})
  },

  handleUpdate(outletProduce) {
    $.ajax({
      url: `/outlet_produces/${outletProduce.id}`,
      type: 'PUT',
      data: { outlet_produce: outletProduce },
      success: (OutletProduce) => {
        this.setState({ outletProduces: OutletProduce })

      }
    })
  },



  render() {
    return (
      <div>
        <AllOutletProduces outletProduces={this.state.outletProduces} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
        <br/>
        <NewOutletProduce handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
})
