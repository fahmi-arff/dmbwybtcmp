function hitungKembalian(cost,cash){
  let kemb = cash -cost

  if(kemb>=50000){
    let a = parseInt(kemb/50000)
    console.log(a + ' x 50000' )
    kemb -=  (a*50000)
  }

  if(kemb>=20000){
    let a = parseInt(kemb/20000)
    console.log(a + ' x 20000' )
    kemb -=  (a*20000)
  }

  if(kemb>=10000){
    let a = parseInt(kemb/10000)
    console.log(a + ' x 10000' )
    kemb -=  (a*10000)
  }

  if(kemb>=5000){
    let a = parseInt(kemb/5000)
    console.log(a + ' x 5000' )
    kemb -=  (a*5000)
  }

  if(kemb>=2000){
    let a = parseInt(kemb/2000)
    console.log(a + ' x 2000' )
    kemb -=  (a*2000)
  }

  if(kemb>=1000){
    let a = parseInt(kemb/1000)
    console.log(a + ' x 1000' )
    kemb -=  (a*1000)
  }

  if(kemb>=500){
    let a = parseInt(kemb/500)
    console.log(a + ' x 500' )
    kemb -=  (a*500)
  }
}
hitungKembalian(110500, 200000);
