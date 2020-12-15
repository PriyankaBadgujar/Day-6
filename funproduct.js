var Product=function(name,price)
{
    this.name=name;
    this.price=price;
    this.printDetail=function(){
        console.log("This",this.name,'for',this.price)
    }
}
var product1=new Product("Car",200000)
product1.printDetail();
Product.prototype.brand="BMW";
Product.prototype.showBrand=function(){
    console.log("Brand is ",this.brand)
};

 console.log(product1.brand)
 product1.showBrand();

 Product.prototype. discountedPrice=function(){
     discount=50;
     dis=discount/100
    console.log("Total price with discount: ",(this.price-dis))
};
product1.discountedPrice()

