var Main = React.createClass({
  render() {
    return (
      <div>
        <Body date={this.props.date} op={this.props.outlet_produce} outlet={this.props.outlet} supermarket={this.props.supermarket} />
      </div>
    )
  }
})
