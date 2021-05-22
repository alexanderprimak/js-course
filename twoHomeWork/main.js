
let simv = " ";

for (let i = 0 ; i < 6 ; i++ ) {
    console.log(simv)
    simv += "#"
}

/////////////////////////////////////////////

const PRODUCT_TYPE = {
    MILK_FOOD: 1,
    FRUIT: 2,
    VEGETABLE: 3,
    CLOTHES: 4,
    BAKERY: 5,
  }
  
  const data = [
    {
      name: 'Milk',
      price: 20,
      quantity: 1,
      type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
      name: 'Apple',
      price: 10,
      quantity: 3,
      type: PRODUCT_TYPE.FRUIT,
    },
    {
      name: 'Butter',
      price: 12,
      quantity: 1,
      type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
      name: 'Bread',
      price: 23,
      quantity: 1,
      type: PRODUCT_TYPE.BAKERY,
    },
    {
      name: 'Orange',
      price: 12,
      quantity: 3,
      type: PRODUCT_TYPE.FRUIT,
    },
    {
      name: 'T-Shirt',
      price: 200,
      quantity: 1,
      type: PRODUCT_TYPE.CLOTHES,
    },
    {
      name: 'Jacket',
      price: 400,
      quantity: 1,
      type: PRODUCT_TYPE.CLOTHES,
    },
    {
      name: 'Tomato',
      price: 15,
      quantity: 5,
      type: PRODUCT_TYPE.VEGETABLE,
    },
    {
      name: 'Onion',
      price: 10,
      quantity: 4,
      type: PRODUCT_TYPE.VEGETABLE,
    },
  ]
  let sumProdukt = 0;
  let productСostQuantityMilk_Food  = 0 ;
  let productСostQuantityBakery     = 0 ;
  let productСostQuantityFruit      = 0 ;
  let productСostQuantityClothes    = 0 ;
  let productСostQuantityVegetable  = 0 ;
  
  
  
  
   for (let i = 0 ; i < data.length ; i ++ ) {
      const {price, quantity , type} = data[i];
      const productСostQuantity = price * quantity ;
  
      sumProdukt +=  productСostQuantity; 
  
  
      switch (type) {
  
        case  PRODUCT_TYPE.MILK_FOOD : {
          productСostQuantityMilk_Food += productСostQuantity;
          break;
        }
  
        case  PRODUCT_TYPE.FRUIT : {
          productСostQuantityFruit +=   productСostQuantity;
          break;
        }
  
        case  PRODUCT_TYPE.BAKERY : {
          productСostQuantityBakery +=  productСostQuantity;
          break;
        }
  
        case  PRODUCT_TYPE.CLOTHES : {
          productСostQuantityClothes += productСostQuantity;
          break;
        }
  
        case  PRODUCT_TYPE.VEGETABLE : {
          productСostQuantityVegetable += productСostQuantity ;
          break;
        } 
      }
   }
  console.log(`Общая сумма потраченная на товары : ${sumProdukt}`);
  console.log(`Сумма потраченная на молочные изделия : ${productСostQuantityMilk_Food}`);
  console.log(`Cумма потраченная на фрукты : ${productСostQuantityFruit}`);
  console.log(`Сумма потраченная на выпечку : ${productСostQuantityBakery}`);
  console.log(`Сумма потраченная на одежду : ${productСostQuantityClothes}`);
  console.log(`Сумма потраченная на овощи : ${productСostQuantityVegetable}`);
  