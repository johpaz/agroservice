const axios = require('axios');
require('dotenv').config();

async function getCoordinates(address) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  console.log(apiKey);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return{coordinates:[location.lat, location.lng]}
          
    } else {
      throw new Error(`Geocoding API error: ${response.data.status}`);
    }
  } catch (error) {
    console.error('Error geocoding address:', error);
    throw error;
  }
}

module.exports = getCoordinates;
