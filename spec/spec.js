var code = require('../js/main.js');


  describe('Get Student Name', function() {
    var students = [ {name: 'Michael', age: 27 },
                     {name: 'Bradley', age: 25}
                    ];

    it('Gets the name value of an object', function() {
      expect(code.getStudentName(students, 0)).toEqual('Michael');
      expect(code.getStudentName(students, 1)).toEqual('Bradley');
    });
  });


  describe('Find Total Letters',function(){
    var stringArray = ['javascript', 'is', 'not', 'python'];
    var stringArray2 = ['This', 'Is', 'SPARTA'];

    it('Gets total letters from an array of strings', function(){
      expect(code.getTotalLetters(stringArray)).toEqual(21);
      expect(code.getTotalLetters(stringArray2)).toEqual(12);
    });
  });

  describe('Create an Object', function(){
    var object1 = {'city': 'Boulder'};
    var object2 = {'town' : 'Salcombe'};

    it('Takes two arguments and returns them as key value pairs', function(){
      expect(code.createObject('city', 'Boulder')).toEqual(object1);
      expect(code.createObject('town', 'Salcombe')).toEqual(object2);
    });
  });

  describe('Get the negative index', function(){
    var letterArray = ['a', 'b', 'c', 'd', 'e'];
    var letterArray2 = ['f', 'g', 'h', 'i', 'h'];

    it('takes a negative num as argument and returns value at negative index', function(){
      expect(code.getNegativeIndex(letterArray, -3)).toEqual('c');
      expect(code.getNegativeIndex(letterArray2, -1)).toEqual('h');
    });
  });




