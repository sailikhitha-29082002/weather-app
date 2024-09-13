let cityName = document.getElementById("city-name")
let cityTemp = document.getElementById("city-temp")
let form = document.getElementById("form")
let apiKey = "3980635435cdf22c4a81d175d9562ae4"

form.addEventListener("submit", (e) => {
    e.preventDefault()
    // alert()
    // console.log(e)
    console.log("city name is", cityName.value)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`
    fetch(url)
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((res) => {
            console.log(res)
            if(res.cod=='404'){
                alert("")
            }
            
            const div = document.createElement("div")
            div.classList.add("city")
            const { main, sys, name } = res
            let result = `
                <div>
                <h1>${name}</h1>
                    <p>${main.temp}<sup>0</sup>c
                    ${sys.country}
                    </p>
                </div>
            `
            div.innerHTML=result
            cityTemp.appendChild(div)
        })
})