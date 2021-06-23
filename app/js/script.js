fetch('product.json').
then(response => {
    return response.json()
}).
then(products => {
    const source = document.querySelector('#productTemplate').innerText
    const template = Handlebars.compile(source)
    const target = document.querySelector('#product')
    target.innerHTML = template(products)
    console.log(products)
})
