const typeDefs = `

scalar Date

#Enum  VariantEnumType
enum VariantEnumType{
  Color
  ShoeSize
  BodySize
}


#Product Input
input ProductInput{
  #Product Name
  name : String!
  #Product Unit Price
  unitPrice : Float!
  #Product Stock Count
  stockCount : Int!
  #Product Long Description
  longDescription : String
  #Product Short Description
  shortDescription : String!
  #Product Discountability Status
  isDiscountableProduct : Boolean!
  #Product Variant(s)
  variants : [String]
}

#Variant Output Type
type Variant{
  #Variant Id
  id : ID!
  #Variant Value
  value : String!
  #Variant Creation Datetime
  createdAt : Date!
  #Variant Modification Datetime
  modifiedAt : Date
  #Variant Deletion Status
  isDeleted : Boolean!
  #Variant Type
  variantType : VariantEnumType!
}

#Product Output Type
type Product{
  #Product Id
  id : ID!
  #Product Name
  name : String!
  #Product Unit Price
  unitPrice : Float!
  #Product Creation Datetime
  createdAt : Date!
  #Product Modification Datetime
  modifiedAt : Date
  #Product Discountability Status
  isDiscountableProduct : Boolean!
  #Product Long Description
  longDescription : String
  #Product Shorty Description
  shortDescription : String!
  #Product Stock Status
  isOutOfStock : Boolean!
  #Product Website Url
  productUrl : String
  #Product Content Id
  productContentId : String!
  #Product Stock Count
  stockCount : Int!
  #Product Deletion Status
  isDeleted : Boolean!
  #Product Variant(s)
  variants : [Variant]
}
`

module.exports = {
  typeDefs,
  query: [
    'getProductById(id : String!) : Product'
  ],
  mutation: [
    'createProduct(product : ProductInput!): Product'
  ]
}
