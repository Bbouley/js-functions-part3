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



};

module.exports = code;

