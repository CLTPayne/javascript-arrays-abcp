var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(element, array) {
  const thisArray = [1]
  thisArray.unshift('foo')
  return thisArray
}

function destructivelyAddElementToBeginningOfArray(element, array) {
  var thisArray = [array]
  thisArray.unshift('element')
  return thisArray
}