var OrderSummary = React.createClass({

  render: function () {
    return (
      <div className='container'>
        <div className='col-md-2'>
          <p>{this.props.data} : Qty {this.props.count} : Subtotal {this.props.subtotal}</p>
        </div>
      </div>
    )
  }
})
