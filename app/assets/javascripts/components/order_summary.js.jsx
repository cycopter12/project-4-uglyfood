var OrderSummary = React.createClass({

  render: function () {
    return (
      <div className='container' style={{marginBottom:1+"em"}}>
        <div className='col-md-2 OPcolumn'>
          {this.props.data} x {this.props.count}
          <br />
          Subtotal: ${parseFloat(this.props.subtotal).toFixed(2)}
        </div>
      </div>
    )
  }
})
