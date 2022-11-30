const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '"Your Key"',
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
};

fetch('https://dark-sky.p.rapidapi.com/48.207585,16.370097?lang=de&units=auto', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));