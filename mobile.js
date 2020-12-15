
var Show=function(model,color,price,accessories,features)
{
    this.model=model;
    this.color=color;
    this.price=price;
    this.accessories=accessories;
    this.features=features;
    this.greet=function()
    {
        console.log(this.model,',',this.color,',',this.price,',',this.accessories,",",this.features)
    }
}
var mobile1=new Show('Samsung','Black',25000,['charger', 'earphones','temperglass'],
['ram','processor'])
mobile1.greet();

var mobile2=new Show('Nokia','Red',5000,['charger', 'earphones','temperglass'],
['ram','processor'])
mobile2.greet();




       
    