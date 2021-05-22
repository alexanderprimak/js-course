
let number = [1,2,3,4,5,] ;


let valueProdukt  = +prompt ("Введите пожалуйста число от 1 до 5");


if (valueProdukt === 1) {
    valueProdukt = PRODUCT_TYPE.MILK_FOOD;   
}

else if (valueProdukt === 2) {
    valueProdukt = PRODUCT_TYPE.FRUIT; 
} 

else if (valueProdukt === 3) {
    valueProdukt = PRODUCT_TYPE.BAKERY; 
}
else if (valueProdukt === 4) {
    valueProdukt = PRODUCT_TYPE.CLOTHES; 
} 

else if (valueProdukt === 5) {
    valueProdukt = PRODUCT_TYPE.VEGETABLE; 
} 

else {
  console.log("Зачем приходили")
}

let resultOne = data.filter(function (item) {
  return item.type === valueProdukt;
  
} )

console.log(resultOne);
