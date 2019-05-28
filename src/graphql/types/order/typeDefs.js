const typeDefs = `
#Enum  OrderTransactionEnumType
enum OrderTransactionEnumType{
  Cancel
  Cargo
  Deliver
  PlaceOrder
  Refund
}

#Order Output Type
type Order{
  #Order Id
  id : ID!
  #Order Grand Total
  total : Float!
  #Order Creation Datetime
  createdAt : Date!
  #Order Modification Datetime
  modifiedAt : Date
  #Order Address
  address : String!
  #Order City
  city : String!
  #Order Country
  country : String!
  #Order Email
  email : String!
  #Order PhoneNumber
  phoneNumber : String!
  #Order Tracking Number 
  trackingNumber : String!
  #Order Transaction Id 
  transactionId : String!
  #Order Zip Code
  zipCode : String!
  #Order Transactipn Type
  transactionType : OrderTransactionEnumType!
  #Product Deletion Status
  isDeleted : Boolean!
  #Order Product(s)
  products : [Product]
}
`

module.exports = {
  typeDefs,
  query: [
    'getOrderById(id : String!) : Order'
  ]
}
