// add scripts
var code = {


  getStudentName: function(array, num){
    return array[num].name;
  },

  getTotalLetters: function(array){
    var num = 0;
    for (var i = 0; i < array.length; i++) {
      num += array[i].length;
    } return num;
  },

  createObject: function(key, pair){
    var newObject = {};
    newObject[key] = pair;
    return newObject;
  },

  getNegativeIndex: function(array, negativeIndex){
    var lastIndex = array.length;
    return array[lastIndex + negativeIndex];
  },

  removeCharacter: function(string, character){
    var newString = '';
    var stringArray = string.split(character).join('');
    return stringArray;
  }


};

module.exports = code;

