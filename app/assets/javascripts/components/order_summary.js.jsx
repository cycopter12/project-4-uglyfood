var OrderSummary = React.createClass({

  render: function () {
    return (
      <div className='container'>
        <div className='col-md-2'>
          <p>{this.props.data} : {this.props.value}</p>
        </div>
      </div>
    )
  }
})
