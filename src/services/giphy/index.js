import http from '../http'

const getFooGiphys = async (parameter, apiKey) => {
  try {
    const res = await http.get(`gifs/search?q=${parameter}&api_key=${apiKey}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export {
  getFooGiphys
}
