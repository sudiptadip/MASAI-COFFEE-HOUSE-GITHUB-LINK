var form = document.querySelector('#confirm')
form.addEventListener("click",myfunction)
var id;
function myfunction(){
 var   i = 0;
arr = ['Your order is accepted','Your order is being Prepared','Your order is being packed','Your order is out for delivery','Order delivered']
id =   setTimeout (function(){
       alert(arr[i])
       i++
       if(i==5){
           clearTimeout(id)
       }
   },3000)
}
