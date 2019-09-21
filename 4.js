function tangga(a) { 
  for(let row=0; row<a.length; row++){
    let stair=''
    
    console.log(stair+=(Array(row).fill(" ").join('')+a[row]))
  }
}

tangga('DUMBWAYS')