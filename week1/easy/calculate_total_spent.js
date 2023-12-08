const transactionList=[   {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
},{
    id: 2,
    timestamp: 1003012310,
    price: 20,
    category: 'Water',
    itemName: 'Pizza',
},{
    id: 3,
    timestamp: 1656076800000,
    price: 30,
    category: 'Drink',
    itemName: 'Senevup',
},{
    id: 4,
    timestamp: 1656076800000,
    price: 40,
    category: 'Drug',
    itemName: 'Coffee',
}];

let ans=calcTransaction(transactionList);

console.log(ans);


function calcTransaction(transactionList){
 let calculatedList=[];
    for(let i=0;i<transactionList.length;i++){
        if(transactionList[i]!=null){
           calculatedList.push(
            {
                'category':transactionList[i]['category'],
                'totalSpent':transactionList[i]['price']
            }
           ); 
        }
    }
    return calculatedList;
}