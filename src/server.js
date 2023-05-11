import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {id: 'UxxajLWwzqY'},
  headers: {
    'X-RapidAPI-Key': '923797823emshc77e60559b996efp17f78ajsn867b7f950a3a',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}