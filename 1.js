function generate() {
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for ( let i = 0; i < 4; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function toSerial(){
  return `${generate()}-${generate()}-${generate()}-${generate()}`
}
toSerial()