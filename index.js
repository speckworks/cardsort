arraySuits = ["Hearts", "Diamonds", "Spades", "Clubs"]
arrayValues = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

var deck = [];
for(let y = 0; y < arraySuits.length; y++){
for(let i = 0; i < arrayValues.length; i++){
   let card = {Value: arrayValues[i], Suit: arraySuits[y]};
   deck.push(card);
}
}

// console.log(deck)

function suitSort(suit){
let suitSorted = [];
for(let i = 0; i < 52; i++){
if(deck[i].Suit === suit){
suitSorted.push(deck[i]);
}
}
return suitSorted;
}

let result = suitSort('Hearts');
console.log(result);

function valueSort(value){
  let valueSorted = [];
for(let i = 0; i < 52; i++){
if(deck[i].Value === value){
valueSorted.push(deck[i]);
}
}
return valueSorted;
}

let resValSort = valueSort('J');
console.log(resValSort);

let suitVal = suitSort('Hearts')
console.log(suitVal);