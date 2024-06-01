// 1.

 const listApply=function(list,f){
for(let i=0;i<list.length;i++){
    list[i]=f(list[i]);
}
return list
} 
// 2.
//one way to do it
// async function  currency(){
// const res=await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/cad.json");
// const data=await res.json();
//  return data.cad.usd;

// }

// const cadToUsd=async function (cad){   
// const exchangeRate=await currency();
// return await exchangeRate*cad;

// }
// //calling would also be diffrent
// cadToUsd(44).then(result => {
//     console.log(result);});

const cadToUsd=function (cad){
    const exchangeRate=0.8;
    return Math.round(exchangeRate*cad * 100) / 100;
}
console.log(cadToUsd(33))
// 3.
const cadToUsds=function (cad){
  return  cad.map((x)=>
        cadToUsd(x)
)

}

console.log(cadToUsds([22,3,66]))

// 4. 
const isOdd = (x) => x % 2 === 1;

const every= function (x,f){
let ans=x.reduce((acc,i)=>
acc&&f(i))
return ans;
}

function assert(value, message) {
    if (!value) {
      throw new Error(message || "Assertion failed");
    }
  }
  
  function assertEquals(actual, expected, message) {
    if (actual != expected) {
      throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
  }
  
  function assertListEquals(actual, expected, message) {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
      throw new Error(message || `Expected both arguments to be arrays`);
    }
    if (actual.length !== expected.length) {
      throw new Error(
        message ||
          `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
      );
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        throw new Error(
          message ||
            `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
        );
      }
    }
  }
  //for function 1
  assert(listApply([1, 2, 3], (x) => x + 1));

  assertListEquals(
    listApply([1, 2, 3], (x) => x + 1),
    [2, 3,4]
  );
//   2.
assert(cadToUsd(22))
assertEquals(cadToUsd(33),26.4)
// 3.
assert(cadToUsds([22,3,66]))
assertListEquals(cadToUsds([22,3,66]),[ 17.6, 2.4, 52.8 ])

//   4.
  assert(every([1, 3, 5], isOdd));
  assertEquals(every([1, 3,5, 6], isOdd),false)
  assertEquals(every([1, 3,5], isOdd),true)

  
