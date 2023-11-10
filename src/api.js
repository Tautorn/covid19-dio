const path = 'https://covid19-dio-api.vercel.app/api/country'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getCountry(country) {
  return fetch(`${path}?country=${country}`, headers)
    .then((response) => response.json())
}

export default {
  getCountry
}