import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.Id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

