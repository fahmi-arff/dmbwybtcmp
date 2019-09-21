function isIncludes(arr,str){
  for(let char of arr){
    console.log(char + ' => ' +str.includes(char))
  }
}
isIncludes(['dumb','ways','the','best'],'dumbways')