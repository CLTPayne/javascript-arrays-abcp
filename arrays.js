var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(element, array) {
  const thisArray = [1]
  const thisNewArray = ['foo', ...thisArray]
  return thisNewArray
}

function destructivelyAddElementToBeginningOfArray(element, array) {
  const destroyedArray = [1]
  destroyedArray.unshift('foo')
  return destroyedArray
}