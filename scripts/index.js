// Add the coffee to local storage with key "coffee"

var url = 'https://masai-mock-api.herokuapp.com/coffee/menu'

async function cofee(){

    // try{
        let res = await fetch(url)
        let data = await res.json()
        console.log(data.menu.data)
        let x = data.menu.data
    // }catch(err){
    //     console.log(err)
    // }
    myfunction(x)
}


var arr = JSON.parse(localStorage.getItem('coffee')) || []

function myfunction(data){
 let menu = document.querySelector('#menu')
data.forEach(function(elem){

    let div = document.createElement('div')
    let img = document.createElement('img')
    img.src=elem.image
    let p1 = document.createElement('p')
    p1.innerText=elem.title
    let p2 = document.createElement('p')
    p2.innerText=elem.price
    let btn = document.createElement('button')
    btn.innerText='add to bucket';
    btn.setAttribute('id','add_to_bucket')
    btn.addEventListener('click',function(){

        hello(elem)
    })
    div.append(img,p1,p2,btn)
    menu.append(div)

})

}

function hello(elem){
    arr.push(elem)
    localStorage.setItem('coffee',JSON.stringify(arr))

    var coffee_count = document.querySelector('#coffee_count')
    coffee_count.innerHTML = ''
    coffee_count.innerText = arr.length

}

cofee()
