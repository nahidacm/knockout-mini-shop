define(['knockout','json!app/products.json'], function(ko,products_json) {

    var CartLine = function(item, quantity = 1){
        line_item_price = item.price*quantity
        return {product: item, quantity: ko.observable(quantity), line_item_price: ko.observable(line_item_price)}
    }
    
    return function ProductsModel(){
        self = this;

        self.products = products_json;
        self.cart_items = ko.observableArray();
    
        self.addToCart = function(item){
            var new_in_cart = true;
            var qty = 1
            self.cart_items().forEach(function(element,index,cart_items) {
                if(element.product.id === item.id){
                    qty = cart_items[index].quantity()
                    cart_items[index].quantity(++qty)
                    cart_items[index].line_item_price(qty*cart_items[index].product.price)
                    new_in_cart = false
                    return
                }
            });
            if(new_in_cart)
                self.cart_items.push(new CartLine(item, qty))
        }
    }
});
