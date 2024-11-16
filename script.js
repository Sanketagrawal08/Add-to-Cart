var cards = document.querySelectorAll(".card")
var cuticon = document.querySelector(".cuticon");
var cuticon2 = document.querySelector(".cuticon2");


var card1 = document.querySelector("#card1");

var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var card4 = document.querySelector("#card4");
var card5 = document.querySelector("#card5");
var card6 = document.querySelector("#card6");
var card7 = document.querySelector("#card7");
var card8 = document.querySelector("#card8");
var card9 = document.querySelector("#card9");

cards.forEach(function(card){
  
  card.addEventListener("click",function(dets){
    cards.forEach(function(dets){
         dets.setAttribute('data-state','normal');
         dets.classList.remove('blurred');
    });
    card.setAttribute('data-state','big');
    cuticon.style.display = 'block';
    
    cards.forEach(function (c) {
        if (c !== card) {
          c.classList.add('blurred'); 
        }
    });
  });
  
   
});

cuticon.addEventListener('click', function () {
   
    cards.forEach(function (c) {
      c.setAttribute('data-state', 'normal');
      c.classList.remove('blurred');
    });

    cuticon.style.display = 'none'; 
  });



  var yourcartbtn = document.getElementById("yourcartbtn");
  
  var cartarr = [];
  let buttons = document.querySelectorAll('.btndiv button:first-child');
   
  buttons.forEach(function(button){
    button.addEventListener('click',function(){
      
      let card = button.closest('.card');
      let name = card.querySelector("#description").innerText;
      let price = parseFloat(card.querySelector("#price").innerText.replace('$', ''));
      let image = card.querySelector("img").src;
      
    
      let item = cartarr.find(function(s){
          return s.name === name;
      })

      if(item){
        item.quantity++;
      }
      else{
        cartarr.push({ image: image,name : name, price: price,quantity : 1});
      }

      display();
      
    });  
  });

  function display(){
    let cartdiv = document.querySelector(".cartsection");
    cartdiv.innerHTML = " ";
 
   cartarr.forEach(function(item){
    let itemdiv = document.createElement("div");
    let img = document.createElement("img");
    
    img.src = item.image;
    img.style.width= '150px'
    img.style.height = '150px'   
  
    itemdiv.innerText = `Description : ${item.name}
     Price : ${item.price}
     Quantity : ${item.quantity} pcs`
    
     
    itemdiv.appendChild(img);
    cartdiv.appendChild(itemdiv);
    itemdiv.classList.add("item-div");
   });
};

var cartsection = document.getElementsByClassName("cartsection")[0];
var flag=0;

yourcartbtn.addEventListener("click",function(){
  if(flag==0){
    cartsection.style.position = 'absolute';
    cartsection.style.top = '20%';
    cartsection.style.left = '25%';
    flag=1;
    cards.forEach(function(des){
      des.classList.add('blurred2')
     })
  }
  else{
    cartsection.style.position = 'absolute';
   cartsection.style.top = '-70%';
   flag=0;
   cards.forEach(function(des){
    des.classList.remove('blurred2')
   })
  }
});


var addtoccart = document.querySelectorAll(".adc");

addtoccart.forEach(function(button){
  button.addEventListener("click",function(){
    
      button.innerHTML = "Adding 😊";
    setTimeout(() => {
       button.innerHTML = "Added ✅ ";
       setTimeout(() => {
        button.innerHTML = 'Add to cart';
       }, 1000);
       
    },1000);
   
  })
})
