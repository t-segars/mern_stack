/* 
    Given an array of objects, a searchFor string, and searchBy key that exists in the object
    return a new array of only those objects whose value for the given key starts with the given search string
    You can assume the key will exist on the object and the value of that key will be a string
    Bonus: make the search case insensitive
    Bonus: re-write it with functional programming in mind, using built in methods
    Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
        - you can assume the searchMethod will be valid
*/
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
// my solution:
function filterByKey(items, searchFor, searchBy){
    let returnArr = [];
    for (let i = 0; i < items.length; i++){
            if (items[i][searchBy] == searchBy && items[i][key].includes(searchFor)){
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.             
                returnArr.push(items[i])
            }
        }
    }
    return returnArr;
}
const people = [
    {
        firstName: "John",
        lastName: "Doe",
    },
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "Eddy",
        lastName: "Lee",
    },
    {
        firstName: "John",
        lastName: "Fawn",
    },
    {
        firstName: "Edward",
        lastName: "Kim",
    },
    {
        firstName: "Gene",
        lastName: "Simmons"
    }
];
    
const searchFor1 = "Jo";
const searchBy1 = "firstName";
const expected1 = [ { firstName: "John", lastName: "Doe" }, { firstName: "John", lastName: "Fawn" } ];
console.log(filterByKey(people, searchFor1, searchBy1))

const searchForBonus = "e";
const searchByBonus = "firstName";
const searchMethodBonus = "endsWith";
const expectedBonus = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "Gene",
        lastName: "Simmons"
    }
]
function filterByKeyBonus3(items, searchFor, searchBy, searchMethod){

}



// //  functional
// function filterByKey(items, searchFor, searchBy) {
//     return items.filter((obj) => obj[searchBy].includes(searchFor));
// }
// console.log(filterByKey(people, searchFor1, searchBy1));
// /**
//  * Filters the given items based on the search criteria using a startsWith
//  * search method.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<Object>} items The items to be filtered.
//  * @param {string} searchBy The key to search by.
//  * @param {string} searchFor The value of the given key to search for.
//  * @returns {Array<Objects>} The matched items.
//  */
// function functionalFilterByKey(items, searchFor, searchBy) {}
 function filterByKey (items, searchFor, searchBy)