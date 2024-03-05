## 5. Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

```
let originalString = "Hyago Bitencourt"; // String do exercício

function reverseString(str) {
  let reversedString = ''; 
  for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
  }
  
  return reversedString;
}

let reversedString = reverseString(originalString); 

console.log(reversedString);
```
