define(['knockout','json!app/products.json'], function(ko,products_json) {

    var CartLine = function(item, quantity = 1){
        return {product: item, quantity: ko.observable(quantity)}
    }
    
    return function ProductsModel(){
        self = this;

        self.products = products_json;
        console.log(self.products )
        self.cart_items = ko.observableArray();
    
        self.addToCart = function(item){
            var new_in_cart = true;
            var qty = 1
            self.cart_items().forEach(function(element,index,cart_items) {
                if(element.product.id === item.id){
                    qty = cart_items[index].quantity()
                    cart_items[index].quantity(++qty)
                    new_in_cart = false
                    return
                }
            });
            if(new_in_cart)
                self.cart_items.push(new CartLine(item, qty))
        }
    }
});
