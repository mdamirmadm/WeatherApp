//selcting elements
const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const weatherContainer = document.getElementById('weather-info');
const container = document.querySelector('.container');


//Applying Events
btn.addEventListener('click',(e)=>{

    //Removing previous elements from DOM
    weatherContainer.innerHTML=" ";

    //creating elements
    const h1 = document.createElement('h1');
    const locationHeader = document.createElement('h3');
    const dateHeader = document.createElement('h3');
    const weatherHeader = document.createElement('h3');
    const minmaxPara = document.createElement('p');

    const key = "f1c6b16d599ab68559457ee8cab40082";
    const city = inp.value;
    //API Call
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
    .then(data => {
        console.log(data);

        return data.json()
    }).then(parsedData => {

        //Initializing and adding classes to the elements
        h1.innerHTML = `<strong>${parsedData.main.temp}&deg;C</strong>`;
        h1.classList.add('temp');
        locationHeader.innerText = parsedData.name;
        locationHeader.classList.add('location');

        var myDate = new Date();

        let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];

        let date = myDate.getDate();
        let month = monthsList[myDate.getMonth()];
        let year = myDate.getFullYear();
        let day = daysList[myDate.getDay()];

        let today = `${date} ${month} ${year}, ${day}`;
        
        dateHeader.innerText = today;
        dateHeader.classList.add('date');
        weatherHeader.innerText = parsedData.weather[0].main;
        weatherHeader.classList.add('weather-condition');
        minmaxPara.innerHTML = `${parsedData.main.temp_min}&deg;c / ${parsedData.main.temp_max}&deg;c`;
        minmaxPara.classList.add('minmax');

        //appending elements to the weatherContainer(sub-container)
        weatherContainer.append(locationHeader);
        weatherContainer.append(dateHeader);
        weatherContainer.append(h1);
        weatherContainer.append(weatherHeader);
        weatherContainer.append(minmaxPara);

        //appending the weatherContainer to the main container 
        container.append(weatherContainer);

        //clearing the input box
        inp.value="";

    }).catch(err => {
        console.log(err);
    })

})














