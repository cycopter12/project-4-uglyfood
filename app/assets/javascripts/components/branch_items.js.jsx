var BranchItems = React.createClass({

  render: function () {
    return (
      <div className='container' style={{marginBottom: 3.5 + 'em'}}>
        <div className='OPheading' style={{color: '#222222', borderBottom: 0}}>{this.props.branchName}</div>
        <div className='col-md-9' style={{color: 'black', fontSize: 1.4 + 'em', fontWeight: 'bold', paddingLeft: '0'}}>
          <div className='col-md-3'><h4>Produce</h4><hr style={{maxWidth: 100 + '%', borderColor: '#555555'}} /></div>
          <div className='col-md-3'><h4>Remaining</h4><hr style={{maxWidth: 100 + '%', borderColor: '#555555'}} /></div>
          <div className='col-md-3'><h4>Bought</h4><hr style={{maxWidth: 100 + '%', borderColor: '#555555'}} /></div>
          <div className='col-md-3'><h4>Buy</h4><hr style={{maxWidth: 100 + '%', borderColor: '#555555'}} /></div>
        </div>

        {this.props.data.map((item, i) => <OrderForm key={i} data={item} current_user={this.props.current_user} returnProps={this.props.returnProps} showOrderQuantity={this.props.showOrderQuantity} orders={this.props.orders} />)}
      </div>
    )
  }
})

// {this.state.outlet_produces.map((outlet_produce, i) => <OrderForm key={i} data={outlet_produce} idx={i + 1} current_user={this.state.current_user} returnProps={this.getNewPropsFromChild.bind(this)} />)}
