import {domCreate} from "./domCreate.js";
(()=>{
    
    document.querySelector("button").addEventListener("click",async (e)=>{
        let searchbox=document.querySelector("#search").value;
        e.preventDefault();
        console.log(searchbox)
       try{ 
           let url=`http://api.openweathermap.org/data/2.5/weather?q=${searchbox}&APPID=87be5755cae28583e636c3c18dbe23b6&units=metric`
        let fetchApi=await fetch(url,{mode:"cors"});
        console.log(fetchApi);
        document.querySelector(".mid").textContent="";
        let response=await fetchApi.json();
        let main=document.createElement("div")
        main.classList.add("weatherCont");
        document.querySelector(".mid").appendChild(main);
        domCreate("h1",main,response.name);
        domCreate("h2",main,`${response.main.temp}°c`);
        domCreate("h3",main,`Feels like: ${response.main.feels_like}°c`);
        domCreate("h3",main,`Humidity: ${response.main.humidity}%`);
        domCreate("h3",main,`Wind Speed: ${response.wind.speed}m/sec`);
        
    }
    catch(error){
        document.querySelector(".mid").textContent="";
        alert("Invalid Input");
    }
    document.querySelector("#search").value="";
    })
    
})();