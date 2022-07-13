function missingNumbers(arr, brr) {
    // Write your code here
   let hash = {}
   let hash2 = {}
   let result = []
   for(let i = 0; i < brr.length; i++) {
       let ov = brr[i]
       hash[ov] = (hash[ov] || 0) + 1
   }
  
   for(let j = 0; j < arr.length; j++) {
         hash2[arr[j]] = (hash2[arr[j]] || 0) + 1
    } 
   for(let key in hash2) {
     if(hash[key] !== hash2[key]) result.push(key)
   }
   result.sort((a,b) => a - b)
   return result;
 }