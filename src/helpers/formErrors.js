import validatorsMessages from './validators/messages'

export default ($v = {}) => Object
  .keys($v)
  .filter(key => !$v[key] && $v.$dirty && !!validatorsMessages[key])
  .map(key => validatorsMessages[key]($v))[0]
