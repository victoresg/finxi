const currencyFormat = (value, toFixed = 0) => Number(value).toFixed(toFixed).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')

const formatNumber = num => {
  try {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  } catch (error) {
    return num
  }
}

export {
  currencyFormat,
  formatNumber
}
