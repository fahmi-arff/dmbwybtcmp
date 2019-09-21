function isPrime(input) {
  let prime = true;
  for (let i = 2; i <= Math.sqrt(input); i++) {
      if (input % i == 0) {
          prime = false;
          break;
      }
  }
  return prime && (input > 1);
}
 
function shopEgg(date, cash){
  let base = cash / 2500;
  let lusin = parseInt(base /12);
  bonus = 0
  if(isPrime(date)){
    bonus = lusin * 2;
  }else if(date % 2 === 1){
    bonus = lusin * 3
  }

  if(date % 5 === 0){
    if(bonus % 2 === 0){
      bonus *= 10;
    }else if(bonus % 2 === 1){
      bonus *= 5;
    }
  }

  return base + bonus;

}

shopEgg(15,60000)