var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  const thisArray = [1]
  const thisNewArray = [...thisArray, 'foo']
  return thisNewArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  var thisArray = [1]
  thisArray.push('foo')
  return thisArray
}

function accessElementInArray(array, index) {
  const accessElementInArray = [1, 2, 3];
  console.log(accessElementInArray[2]);
}