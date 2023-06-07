const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((array) => {
    const word = array.split(' ');
    const capitalize = word.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    //combine
    const combine = capitalize.join(' ');
    return combine;
  });
}


/* idea 3
function titleCased(array) {
    array.map((word) => {
    const capitalizeFirst = word.charAt(0).toUpperCase();
    const lowerCasePart = word.slice(1).toLowerCase();
    return capitalizeFirst + lowerCasePart;
  });
}

titleCased(tutorials);
*/

/*idea 4
function titleCased(array) {
  //code here
  return array.split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  });

}

titleCased(tutorials);
*/