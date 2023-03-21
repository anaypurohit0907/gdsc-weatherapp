const temperature=document.getElementById('temp');
const city=document.getElementById('city');
const btn=document.getElementById('btn')
const currenttemp= document.getElementById('currentweather')
const apikey='8ac05dc0b61c52d84a808aefdd0bacba'


getweatherdata()
function getweatherdata(){

        btn.addEventListener('click', ()=>{
            fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city.value+"&units=metric&appid="+apikey).then(res =>res.json()).then(data => {
                console.log(data)
                printdata(data)
            })
        })
   
    
    
    
}
function printdata(data){
    
    const  temp  = data.list[4].main.temp;
    const  day1temp =Math.round( (data.list[1].main.temp*10))/10
    const  day2temp = Math.round(data.list[8].main.temp*10)/10
    const  day3temp = Math.round(data.list[17].main.temp*10)/10
    const  day4temp = Math.round(data.list[25].main.temp*10)/10
    const  day5temp = Math.round(data.list[36].main.temp*10)/10
   
  
   document.querySelector(".currrentwtr").innerText = temp+ "°C";
   document.querySelector(".tempday1").innerText = day1temp+ "°C";
   document.querySelector(".tempday2").innerText = day2temp+ "°C";
   document.querySelector(".tempday3").innerText = day3temp+ "°C";
   document.querySelector(".tempday4").innerText = day4temp+ "°C";
   document.querySelector(".tempday5").innerText = day5temp+ "°C";
  



}
