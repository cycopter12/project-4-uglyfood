var AllOutletProduces = React.createClass({
  getInitialState() {
    return { outletProduces: [] }
  },

  componentDidMount() {
    $.getJSON('/outlet_produces.json', (response) => { this.setState({ outletProduces: response }) })
    console.log('Component mounted');
  },

  render() {
    var outletProduces = this.state.outletProduces.map((outletProduce) => {
      return (
        <div key={outletProduce.id}>
        <h3>{outletProduce.produce.name}</h3>
          <p>Quantity: {outletProduce.quantity}</p>
          <p>Supermarket: {outletProduce.outlet.name} {outletProduce.outlet.branch}</p>
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
