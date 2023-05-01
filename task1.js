let products = [
    {
      title: "BMW",
      price: "40000",
      count: "15"
    },
    {
      title: "Toyota",
      price: "20000",
      count: "13"
    },
    {
      title: "Ford",
      price: "30000",
      count: "20"
    },
    {
      title: "Chevrolet",
      price: "60000",
      count: "9"
    },
    {
      title: "Volkswagen",
      price: "30000",
      count: "13"
    },
  ];
  
  let totalQuantity = 0;
  let totalCost = 0;
  
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let total = product.price * product.count;
    totalCost += total;
    totalQuantity += parseInt(product.count);
    let productInfo = `${product.title}: ${product.price} EURO. x ${product.count} pcs`;
    let productList = document.createElement("p");
    productList.textContent = productInfo;
    document.body.appendChild(productList);
    let productTotal = document.createElement("p");
    productTotal.textContent = `Итого: ${total} EURO.`;
    document.body.appendChild(productTotal);
  }
  
  let totalInfo = `Всего товаров: ${totalQuantity} pcs. итоговая сумма ${totalCost} EURO.`;
  let totalList = document.createElement("p");
  totalList.textContent = totalInfo;
  document.body.appendChild(totalList);
  
  
  

  