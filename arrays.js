var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(element, array) {
  const array = [1]
  array.unshift('foo')
  return Array
}

function destructivelyAddElementToBeginningOfArray(element, array) {
  var thisArray = [array]
  thisArray.unshift('element')
  return thisArray
}