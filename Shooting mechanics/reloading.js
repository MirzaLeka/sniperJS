var array = [1,2,3,4,5];
var completeArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

console.log("Initial bullets: " + completeArray);
console.log("Initial magazine: " + array);

function remove() {

    if (array.length == 0) {
      console.log("reloading");
      
      if (completeArray.length != 0) { 
      for (var i = 0; i < 5; i++) {
  array.push(completeArray[i]);
  completeArray.pop();
}
      }
      
          else {
     console.log("Empty pocket!");     
        }
      
   console.log("Magazine: " + array);   
   console.log("All bullets: " + completeArray);
  }
  
  else {  
  array.pop();
   console.log("Bullet fired!");
    
    if (array.length == 0) {
      console.log("Magazine empty");
    }
    else {
      console.log("Magazine: " + array);
    }
    
  }
  
  
}


