try {
    let nome = "Lucas";

    funcaoQueNaoExiste();

} catch (error) {
    
    console.log("oi");
    
    console.log(`O erro que aconteceu foi: ${error.message}`);
    
}

console.log("oi");

