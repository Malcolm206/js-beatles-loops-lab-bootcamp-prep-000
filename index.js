function theBeatlesPlay(array1, array2) {
  var newarray = []
  for(var i = 0, i < array1.length, i++) {
    newarray.push(array1[i] + array2[i])
  }
  return newarray
}