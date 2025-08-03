// array.concat - Join the array with other array(s) or value(s).
// array.join - Join all elements of the array into a string.

// concat:
function arrayConcatBoth(array1, array2) {
  console.log(array1, array2);
  const array3 = array1.concat(array2);
  console.log(array3);
}

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

arrayConcatBoth(array1, array2);

function arrayConcatThree(num1, num2, num3) {
  const brandNewArray = num1.concat(num2, num3);
  console.log(brandNewArray);
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
arrayConcatThree(num1, num2, num3);

// join:

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// output: "Fire,Air,Water"
console.log(elements.join(""));
// output: "FireAirWater"
console.log(elements.join("-"));
// output: "Fire-Air-Water"

const infomation = {
  id: "10894",
  name: "Pizza Hut",
  cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  locality: "2nd Stage",
  areaName: "BTM Layout",
  costForTwo: "₹350 for two",
  cuisines: ["Pizzas", "Pizza", "Hotel"],
  avgRating: 4.1,
  parentId: "721",
  avgRatingString: "4.1",
  totalRatingsString: "10K+",
  deliveryTime: 31,
  priceDependTime: {
    Jan: "₹350",
    Feb: "₹450",
    Dec: "₹550",
  },
};

const cuisinesAccess = infomation["cuisines"];
console.log("original", cuisinesAccess);
const newCuisines1 = cuisinesAccess.join("+");
console.log(newCuisines1);
const newCuisines2 = cuisinesAccess.join(", ");
console.log(newCuisines2);
