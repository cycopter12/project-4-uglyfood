var Orders = React.createClass({
  // componentWillMount: function () {
  //   console.log('Orders:', this.props.data)
  // },

  render: function () {
    return (
      <div className='container'>
        {this.props.data.map((order, i) => <Order key={i} data={order} idx={i + 1} returnProps={this.props.getUpdateFromDelete} />)}
      </div>
    )
  }
})
