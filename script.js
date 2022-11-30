const options = {
	method: 'GET',
	headers: {
        //Add your Key below 
		'X-RapidAPI-Key': 'Your Key',
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
};

//Fetching data
fetch('https://dark-sky.p.rapidapi.com/48.207585,16.370097?lang=de&units=auto&exclude=hourly%2Cdaily%2Cflags', options)
    //Converting data to json format
	.then(data => data.json())
    //Getting the html Id and adding the data
	.then(data => {
        document.getElementById("timezone").innerHTML = data.timezone;
        document.getElementById("summary").innerHTML = data.currently.summary;
        //Adding some extra info via text
        document.getElementById("temperature").innerHTML = `Temp | ${data.currently.temperature} °C`;
        document.getElementById("windspeed").innerHTML = `Wind | ${data.currently.windGust} km/h`;
    })
	.catch(err => console.error(err));