/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
    totalSpent = 0;
    const enteries = Object.entries(transactions)
    console.log(enteries)
    for(let i; i<enteries.length; i++){
        console.log(i)
        // if(key == "price"){
        //     console.log("inside price")
        //     totalSpent += transactions[key]
        // }
        // console.log(totalSpent)
    }

    // return [];
  }


  calculateTotalSpentByCategory([
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656076800000,
        price: 20,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 1,
        timestamp: 1656076800000,
        price: 30,
        category: 'Food',
        itemName: 'Pasta',
    },
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'dosa',
    },
])
  
//   module.exports = calculateTotalSpentByCategory;