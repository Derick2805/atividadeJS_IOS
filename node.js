function main() {
    const clientes = []; 

    
    while (true) {
        let resposta = prompt('Insira o nome de um cliente:');
        clientes.push(resposta); 

        resposta = prompt('Deseja inserir mais nomes? (sim/não)');
        if (resposta.toLowerCase() !== 'sim') {
            break; 
        }
    }

    let nomesClientes = 'Nomes dos clientes:\n';
    for (let cliente of clientes) {
        nomesClientes += cliente + '\n';
    }
    alert(nomesClientes);
}

main();
