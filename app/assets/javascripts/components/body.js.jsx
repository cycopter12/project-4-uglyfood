var Body = React.createClass({
  getInitialState() {
    return { outletProduces: [] }
  },

  componentDidMount() {
    $.getJSON('/outlet_produces.json', (response) => { this.setState({ outletProduces: response }) })
    // console.log(this.state.outletProduces);
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
      <div className='rowC'>
        <div>
          <div className="OPheading">
            Produce for sale today at {this.props.supermarket.name} {this.props.outlet.name}, {this.props.outlet.branch}
          </div>
          <div>
            <AllOutletProduces outletProduces={this.state.outletProduces} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
          </div>
        </div>
        <br/>
        <div className='createOP'>
          <div id="addNewProduce">
            Add new produce
          </div>
          <NewOutletProduce handleSubmit={this.handleSubmit} date={this.props.date} op={this.props.op} currentUser={this.props.currentUser}/>
        </div>
      </div>
    )
  }
})
