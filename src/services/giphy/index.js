import http from '../http'

const apiKey = 'TtLIWxlcNtvlFm0s0ufFy2SpK0fWsWfg'

const getFooGiphys = async (parameter) => {
  try {
    const res = await http.get(`gifs/search?q=${parameter}&api_key=${apiKey}`)
    return res.data
  } catch (error) {
    throw error
  }
}

const getGiphysById = async (id) => {
  try {
    const res = await http.get(`gifs/${id}?api_key=${apiKey}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export {
  getFooGiphys,
  getGiphysById
}
