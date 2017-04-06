var OrderSummary = React.createClass({

  render: function () {
    return (
      <div className='container'>
        <div className='col-md-2'>
          <p>{this.props.data} x {this.props.count}
          <br />
          Subtotal: ${parseInt(this.props.subtotal).toFixed(2)}</p>
        </div>
      </div>
    )
  }
})
