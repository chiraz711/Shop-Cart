var carts=document.querySelectorAll('.btn')


let products=[
    {
        name:'Nike Air Force 1',
        tag:'NikeAir1',
        price:150,
        incart:0
    },
    {
        name:'Nike Air Force 2',
        tag:'NikeAir2',
        price:120,
        incart:0
    },
    {
        name:'Nike Air Force 3',
        tag:'NikeAir3',
        price:200,
        incart:0
    }
]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click',()=>{
    cartNumbers(products[i]);
    totalcost(products[i]);
  }
  )  
}

function onLaodCartsNumber(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }
}
function cartNumbers(product){
    var productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers+1;
    }else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
    }
  setItems(product);

}
function setItems(product){
   var cartitems=localStorage.getItem('ProductsInCart');
   cartitems=JSON.parse(cartitems);

   if(cartitems!=null){

    if(cartitems[product.tag] == undefined){ 
        cartitems={
            ...cartitems,
            [product.tag]: product
        }
    }
      cartitems[product.tag].incart += 1;
   }else {
    product.incart=1;
    cartitems={
        [product.tag]:product
    }
    }
    localStorage.setItem("ProductsInCart",JSON.stringify(cartitems));
}

function totalcost(product){
    var cartcost=localStorage.getItem('totalcost');
   
    console.log('my cart cost:',cartcost);
    if(cartcost !=null){
        cartcost=parseInt(cartcost);
        localStorage.setItem("totalcost",cartcost +product.price);

    }else{
        localStorage.setItem("totalcost",product.price);

    }
}
function displaycard(){
    var cartitems=localStorage.getItem("ProductsInCart");
    cartitems=JSON.parse(cartitems);
    var productscontainer=document.querySelector(".products");
    var cartcost=localStorage.getItem('totalcost');
     
    console.log(cartitems);
    if(cartitems && productscontainer){
        productscontainer.innerHTML='';
        Object.values(cartitems).map(item=>{
            productscontainer.innerHTML += `
            <div class="product">
              <ion-icon name="close-circle-outline" id='remove-btn'></ion-icon>
              <img src="./images/${item.tag}.jpg">
              <span>${item.name}</span>
            </div>
            
           <div class='price'>${item.price},00</div>
           <div class='quantity'>
              <ion-icon class='decrease'
              name="arrow-back-circle-outline"></ion-icon>
              <span>${item.incart}</span>
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </div>
          <div class="total">
              $${item.incart * item.price},00
          </div>
            `
        });
        productscontainer.innerHTML +=`
        <div class='baskettotalcontainer'>
          <h4 class='baskettotaltitle'>
               BasketTotal
         </h4>
       <h4 class='basketTotal'>
                $${cartcost},00
          </h4>
        </div>
         `
         ;
}

}
onLaodCartsNumber(); 
displaycard();

var heart=document.getElementById('heart')
heart.addEventListener('click',function favourite(){
  if(this.click) {heart.style.color= 'red'}
   else {heart.style.color= 'black'} 
})

var btnremove=document.getElementById('remove-btn')

function remove(event){
    var button=event.target
    

}