const outputParams = function resolveOutputParams (info) {
  const selections = info.fieldNodes[0].selectionSet.selections
  let selectedOutputString = ''

  selectedOutputString = outputRecursive(selections)

  return selectedOutputString.slice(0, -1)
}

function outputRecursive (selections) {
  let selectedOutputString = ''
  selections.forEach(function (item) {
    if (item.selectionSet !== undefined && item.selectionSet.selections.length > 0) {
      selectedOutputString += item.name.value + '{'
      selectedOutputString += outputRecursive(item.selectionSet.selections)
      selectedOutputString = selectedOutputString.slice(0, -1)
      selectedOutputString += '},'
    } else {
      selectedOutputString += item.name.value + ','
    }
  })
  return selectedOutputString
}

module.exports = outputParams
