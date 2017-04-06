var BranchItems = React.createClass({

  render: function () {
    return (
      <div className='container'>
        <h3>{this.props.branchName}</h3>
        <div className="col-md-9">
          <div className="col-md-3">Produce</div>
          <div className="col-md-3">Remaining</div>
          <div className="col-md-3">Qty bought</div>
          <div className="col-md-3">Order qty</div>
        </div>
        {this.props.data.map((item, i) => <OrderForm key={i} data={item} current_user={this.props.current_user} returnProps={this.props.returnProps} showOrderQuantity={this.props.showOrderQuantity} orders={this.props.orders} />)}
      </div>
    )
  }
})

// {this.state.outlet_produces.map((outlet_produce, i) => <OrderForm key={i} data={outlet_produce} idx={i + 1} current_user={this.state.current_user} returnProps={this.getNewPropsFromChild.bind(this)} />)}
