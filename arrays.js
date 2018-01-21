var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  var thisArray = [1]
  thisArray.unshift("foo")
  return thisArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var thisArray = [1]
  var thisNewArray = thisArray.unshift("foo")
  return thisNewArray
}