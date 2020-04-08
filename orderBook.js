function reconcileOrder(existingBook, incomingOrder) {
  let updatedBook = []
  let sameType = existingBook.map((order) => { return order.type })
  let sameQuantity = existingBook.map((order) => { return order.quantity })
  let samePrice = existingBook.map((order) => { return order.price })

  if (existingBook.length === 0) {

    return updatedBook = existingBook.concat(incomingOrder)
  }
  else if (sameType[0] === incomingOrder.type) {

    return updatedBook = existingBook.concat(incomingOrder)
  }
  else if (sameType != incomingOrder.type && existingBook.length < 2) {

    return updatedBook = existingBook.concat(incomingOrder)
  }
  else if (samePrice === incomingOrder.price && sameType[0] != incomingOrder.type) {

    return updatedBook = existingBook.concat(incomingOrder)
  }
  else if (sameQuantity[0] === incomingOrder.quantity && samePrice[0] === incomingOrder.price) {

    return updatedBook = existingBook.slice(1)
  }
  else if (sameQuantity[0] > incomingOrder.quantity && sameType[0] != incomingOrder.type) {
    existingBook[0].quantity = sameQuantity[0] - incomingOrder.quantity
    updatedBook = existingBook.reverse()

    return updatedBook
  }
  else if (sameQuantity[0] < incomingOrder.quantity && existingBook.length <= 2) {
    incomingOrder.quantity = incomingOrder.quantity - sameQuantity[0]
    updatedBook = updatedBook.concat(incomingOrder, existingBook[1])

    return updatedBook.reverse()
  }
  else if (incomingOrder.quantity === sameQuantity[0] + sameQuantity[1]) {

    return updatedBook = existingBook.slice(2)
  }
  else if (sameType[0] === sameType[1] && sameQuantity[0] + sameQuantity[1] >= incomingOrder.quantity && samePrice[0, 1] === incomingOrder.price) {
    existingBook[0].quantity = ((sameQuantity[0] + sameQuantity[1]) - incomingOrder.quantity)
    existingBook.concat(existingBook[0].quantity)
    updatedBook = existingBook.filter((items => items.quantity != sameQuantity[0])).reverse()

    return updatedBook
  }
  else if (sameQuantity[0] + sameQuantity[1] <= incomingOrder.quantity && samePrice[0, 1] === incomingOrder.price) {
    incomingOrder.quantity = incomingOrder.quantity - (sameQuantity[0] + sameQuantity[1])
    updatedBook = existingBook.concat(incomingOrder)
    updatedBook = updatedBook.slice(2)

    return updatedBook
  }
  else if (sameQuantity[0] === incomingOrder.quantity && sameType[0] != incomingOrder.type && samePrice[0] > incomingOrder.price) {
    updatedBook = existingBook.slice(1)
    return updatedBook
  }
  else if (sameQuantity[0] === incomingOrder.quantity && sameType[0] != incomingOrder.type && samePrice[0] < incomingOrder.price) {
    updatedBook = existingBook
    updatedBook.push(incomingOrder)
    return updatedBook
  }
}





module.exports = reconcileOrder