const generateOutputParams = require('../builder/output-builder')
const stringifyObject = require('stringify-object')

const graphqlQuery = function buildGraphQLCommand (mutationModel) {
  let inputStrings = ''

  Object.keys(mutationModel.inputParams).forEach(function (item) {
    inputStrings += item + ':' + stringifyObject(mutationModel.inputParams[item], {
      indent: '  ',
      singleQuotes: false
    })
  })

  const outputStrings = generateOutputParams(mutationModel.outputParams)

  if (Object.keys(mutationModel.inputParams).length === 0) {
    return getAllQuery(mutationModel, outputStrings)
  }

  return `${mutationModel.type}
    {
      ${mutationModel.name}(
         ${inputStrings}
        )
        {
            ${outputStrings}
        }
    }`

  function getAllQuery (model, outputStrings) {
    return `${model.type}
        {
          ${mutationModel.name}
            {
                ${outputStrings}
            }
        }`
  }
}

module.exports = graphqlQuery
