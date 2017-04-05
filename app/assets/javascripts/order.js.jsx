// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// helper
function createDate () {
  var today = new Date()

  var year = today.getFullYear().toString()
  var month = (today.getMonth() + 1).toString()
  var day = today.getDate().toString()
  var date = ''

  if (month.length < 2) {
    month = '0' + month
  }

  if (day.length < 2) {
    day = '0' + day
  }

  date = year + '-' + month + '-' + day

  return date
}

// react components

// PlaceOrders >> Orders >> Order
// PlaceOrders >> OrderSummary
// PlaceOrders >> OrderForm




// parent
