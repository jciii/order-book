/*What are we doing?
  / cryptoCurrancy order sorter
  /--Reqs--
    /tracks all buys and all sale requests
    /checks orders agianst the book
      /if match it fulfills order instantly
    /if not it is added to the book for later fullfillment
  
    
  ////strategy////
    /put sell orders into updatedBook 
    /check buy orders agianst array
      /send matching orders to reconcileOrder
      /keep unmatched orders in existingBook
 
 
      //////switch///////
function orderSorter(existingBook) {
  if (existingBook) {
    existingBook.push([{}])
  } return reconcileOrder
   switch (incomingOrder) {

    case existingBook:

      break
    default: 'Empty Book'
  
   
} */

function orderMatching(existingBook, incomingOrder) {
  for (let i = 0; i < existingBook.length; i++) {
    if (existingBook[i][quantity] === incomingOrder.quantity) {
      existingBook.splice(existingBook[i])
    }
  }
}

function reconcileOrder(existingBook, incomingOrder) {
  if (existingBook.length < 2) {
    existingBook.push(incomingOrder)
    return existingBook
  } else {
    return orderMatching(existingBook)
  }
}


module.exports = reconcileOrder