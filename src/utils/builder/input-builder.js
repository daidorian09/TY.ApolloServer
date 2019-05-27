const inputParams = function resolveInputParams (input) {
  let selectedInputStrings = '('
  const keys = Object.keys(input)
  for (var item in keys) {
    selectedInputStrings += item + `: "${keys[item]}",`
  }

  return selectedInputStrings.slice(0, -1) + ')'
}

module.exports = inputParams
