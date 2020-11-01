import moment from 'moment-timezone'

const formatDate = (value, format = 'DD/MM/YYYY') => moment(value).format(format)

const formatHours = (hours) => moment.tz(hours, 'America/Sao_Paulo').format('HH:mm:ss')


export {
  formatDate,
  formatHours
}
