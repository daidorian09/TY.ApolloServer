class GraphqlQuery {
  constructor (name, inputParams, outputParams, type) {
    this.name = name
    this.inputParams = inputParams
    this.outputParams = outputParams
    this.type = type
  }
}

module.exports = GraphqlQuery
