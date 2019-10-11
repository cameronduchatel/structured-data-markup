
// EXAMPLE - sending eCommerce booking data to GTM

// Need to create the array first and then send all of the data together i.e. item name, code, price, total price

var itemsArray = []; //initialize empty array
var totalPrice; //initialize total price

foreach($_SESSION['test']['item'] as $key => $value) {
    //code below will add all items in the itemsArray (no push to GTM yet)
    itemsArray.push(
      {
      'name': '<?php echo $_SESSION['test']['item']['item-name']; ?>',
      'itemCode': '<?php echo $_SESSION['test']['item']['itemCode']; ?>',
      'price': '<?php echo $_SESSION['test']['item']['item-price']; ?>'
      }     
    });
    totalPrice = '<?php echo $_SESSION['test']['total-price']; ?>';
}

//once all items are in the itemsArray we will push the event to dataLayer
dataLayer.push({
    'event': 'Thankspage',
    'itemname': itemsArray,
    'totalprice': totalPrice,
});