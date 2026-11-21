//JSON - JavaScript Object Notation - Uma notação para objetos em JavaScript, que é muito utilizada para troca de dados entre sistemas
// composto. por chave e valor com o ojetivo de transferir dados entre sistemas de forma simples e rápida.

let invoice = {
    name: "Felipe",
    age: 28,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecanico", 190.99],
        2: ["Monitor", 899.99] 
    },
    taxes: "98,90"
}


generateInvoice(invoice)

function generateInvoice(invoiceProducts){
    console.log (`O comprador é ${invoiceProducts.name}`)
    console.log (`A idade é ${invoiceProducts.age}`)
    console.log ("------------------")

    for(const index in invoice.products){
        let[productsName, productPrice] = invoice.products[index]
        console.log(`- ${productsName}: R$ ${productPrice}`)

    }


   
    

}