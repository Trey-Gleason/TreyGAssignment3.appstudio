let product = ["Crocheted Dog Toy", "Slow Feeder Bowl", "Pawz Grey Treat Jar", "Blue Sweet Dreams Thermal Pajamas", "Checker Chewy Vuiton Bowl", "Red Heart Sweater Dress", "Velvet Hair Bow - Sun Kissed", "Into the Wild Leash"]
let price = [10, 14, 20, 30, 32, 27, 12, 27]

let wishList = []
let unit = []

btnDisplay.onclick=function() {
  for (i = 0; i <= price.length -1; i++) {
    inptItems.push(`${product[i]} : ${price[i]}`)
}
    lblwishListItem.value = `${unit}`
}

btnAddToWishList.onclick=function() {
  let itemProduct = inptItems.value
  lblwishList.push(product)
  lblwishList.value = `${lblwishList}`
}