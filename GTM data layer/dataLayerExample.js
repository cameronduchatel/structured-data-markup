# 2019-07
# GTM USER DEFINED VARIABLES FOR DATA LAYER

# 'Data Layer Variable' created in GTM:
# [1] dl.product.id
# [2] dl.product.price
# [3] dl.product.sku
# [4] dl.product.title
# [5] dl.product.type


# variable - 'custom javascript', variable configuration - 'product detail view':

function() {
	var ecommerce = {
    	'ecommerce': {
        	'detail': {
            	'products': [{
                	'title': '{{dl.product.title}}',
                  	'id': '{{dl.product.id}}',
                  	'sku': '{{dl.product.sku}}',
                  	'price': '{{dl.product.price}}',
                  	'type': '{{dl.product.type}}'
                
                }]
            }
        }
    };
	return ecommerceData;
}




