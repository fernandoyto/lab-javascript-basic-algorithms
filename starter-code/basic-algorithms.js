let hacker1 = 'Alan';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Alan';
console.log(`The navigator's name is ${hacker2}`);

function longestName (name1, name2) {
  if (hacker1.length > hacker2.length) {
    return `The driver got the longest name, it has ${hacker1.length} characters.`;
  } else if (hacker2.length > hacker1.length) {
    return `The navigator got the longest name, it has ${hacker2.length} characters.`;
  }
  return `You both got equally long names, ${hacker1.length} characters.`;
}

console.log(longestName (hacker1, hacker2))

function capitalName (name) {
  let result = name[0].toUpperCase()
  for (let i = 1; i < name.length; i++) {
    result = result + " " + name[i].toUpperCase();
  }
  return result
}

console.log (capitalName(hacker1));

function reverseName (name) {
  let reversed = '';
  for (let i = name.length - 1; i >= 0; i--){
    reversed = reversed + name[i];
  }
  return reversed;
}

console.log (reverseName(hacker2))

function lexicographicOrder (name1, name2) {
  switch (name1.localeCompare(name2)) {
    case -1:
      return `The driver's name goes first.`;
    case 1:
      return `Yo, the navigator goes first definetely`;
    default:
      return `What?! You both got the same name?`;
  }
}

console.log(lexicographicOrder(hacker1,hacker2))

function checkPalindrome (string) {
  let stringArray = [];
  stringArray.push(string);
  stringArray.splice(/,/g, '')
  return stringArray;
}

console.log(checkPalindrome('Amor, Roma?'))