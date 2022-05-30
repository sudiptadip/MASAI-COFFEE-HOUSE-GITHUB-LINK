// On clicking remove button the item should be removed from DOM as well as localstorage.

var arr  = JSON.parse(localStorage.getItem('coffee'))
var ta = document.querySelector('total_amount')

log(arr)

function log(data){
    let menu = document.querySelector('#bucket')
    var sum = 0;
   data.forEach(function(elem,ind){
       let div = document.createElement('div')
       let img = document.createElement('img')
       img.src=elem.image
       let p1 = document.createElement('p')
       p1.innerText=elem.title
       let p2 = document.createElement('p')
       p2.innerText=elem.price
       let btn = document.createElement('button')
       btn.innerText='remove';
       btn.setAttribute('id','remove_coffee')
       btn.addEventListener('click',function(){
   
           hello(elem,ind)
       })
       div.append(img,p1,p2,btn)
       menu.append(div)

       sum = sum + Number(elem.price)  
   })
     
     
}



   function hello(elem,ind){
    arr.splice(ind,1)
    localStorage.setItem('coffee',JSON.stringify(arr))
    window.location.reload()
   }

   
   

