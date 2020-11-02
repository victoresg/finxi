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

const saveGiphys = async (id) => {
  try {
    const res = await http.post(`gifs-create/${id}?api_key=${apiKey}`)
    return res.data
  } catch (error) {
    throw error
  }
}

const updateGiphys = async (id) => {
  try {
    const res = await http.put(`gifs-update/${id}?api_key=${apiKey}`)
    return res.data
  } catch (error) {
    throw error
  }
}

const deleteGiphys = async (id) => {
  try {
    const res = await http.delete(`gifs-delete/${id}?api_key=${apiKey}`)
    return res.data
  } catch (error) {
    throw error
  }
}


export {
  getFooGiphys,
  getGiphysById,
  updateGiphys,
  deleteGiphys,
  saveGiphys
}
