var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  var thisArray = [1]
  ["foo", ...thisArray]
  return thisArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var thisArray = [1]
  thisArray.unshift("foo")
  return thisArray
}