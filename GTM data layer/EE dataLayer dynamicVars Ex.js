
// MEASURE SCHOOL ENHANCE ECOMMERCE DATALAYER EXAMPLE

// hard-coded variables (sent to developer)

<script>
var dataLayer - window.dataLayer || [];
dataLayer.push({
'event': 'transaction',
  'ecommerce': {
    'purchase': {
      'actionField': {
        'id': '464',
        'revenue': '68.00',
        'tax':'0.00',
        'shipping': '15.00',
        'coupon': ''
      },
      'products': [{ 
        'name': 'Happy Ninja',
        'id': '37',
        'price': '18.00',
        'category': 'Clothing',
        'variant': '',
        'quantity': 1,
        'coupon': ''
       },
       {
        'name': 'Happy Ninja',
        'id': '53',
        'price': '35.00',
        'category': 'Clothing',
        'variant': '',
        'quantity': 1
       }]
    }
  }
});
</script>

// dynamic variables added (by developer)

// variables need to change dynamically based on the users order...

// "I echo out the order number from the order variable and implement this into this field, so it will be automatically filled out"
// "more (PHP) code is require so it can be parsed correctly"
// "for the products, depending on how many a user has bought you will need increase the different products that are in the array to have 3, 4, 10 or only 1 product"
// "require a for each loop that goes throught the different products"



<script>
    
    var dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'transaction',
            'ecommerce': {
                'purchase':{
                    'actionField':{
                        'id': '<?php echo $order->get_order_number(); ?>',
                        'revenue': '<?php echo number_format($order->get_subtotal(), 2, ".", "");?>',
                        'tax': '<?php echo number_format($order->get_total_tax(), 2, ".", ""); ?>',
                        'shipping': '<?php echo number_format($order->calculate_shipping(), 2, ".", ""); ?>',
                        <?php if($order->get_used_coupons()): ?>
                            'coupon': '<?php echo implode("-", $order->get_used_coupons()); ?>'
                        <?php endif; ?>
                    },
                    'products': [
                        <?
                        foreach ($order->get_items() as $key => $item):
                            $product = $order->get_product_from_item( $item );
                            $variant_name = ($item['variation_id']) ? wc_get_product($item['variation_id']) : ''; ?>
                        
                        {
                            'name': '<?php echo $item['name']; ?>',
                            'id': '<?php echo $item['product_id']; ?>',
                            'price': '<?php echo number_format($order->get_line_subtotal($item), 2, ".", ""); ?>',
                            'category': '<?php echo strip_tags($product->get_categories(', ', '', '')); ?>',
                            'varient': '<?php echo ($variant_name) ? implode("-", $variant_name->get_variation_attributes()) :''; ?>',
                            'quantity': '<?php echo $item['qty']; ?>'
                        },
                    <?php endforeach; ?>
                    ]
                }
            }
        });
    
</script>


