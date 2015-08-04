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



