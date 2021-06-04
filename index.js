var button=document.querySelector('.submit')
var inputValue=document.querySelector('.inputValue')
var main = document.querySelector('#name');
var desc=document.querySelector('.desc')
var temp=document.querySelector('.temp')


button.addEventListener('click',()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f1c1413d152818b25668e872ba2e8996')
    .then(response=>response.json())
    .then(data=>{
        var nameValue=data['name']
        var tempValue=data['main']['temp']
        var descValue=data['weather'][0]['description']

        main.innerHTML=nameValue
        temp.innerHTML=tempValue;
        desc.innerHTML=descValue;
    })
    
    .catch(err=>alert("Wrong city name!"))
})
