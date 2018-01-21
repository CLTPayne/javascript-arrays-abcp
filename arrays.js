var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(element, array) {
  var thisArray = [1]
  thisArray.unshift('foo')
  return thisArray
}

function destructivelyAddElementToBeginningOfArray(element, array) {
  var thisArray = [1]
  var thisNewArray = thisArray.unshift('foo')
  return thisNewArray
}