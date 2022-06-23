/* const exemplo = {
    "2022-01-01": [
        {
            idTeste: 001,
            nome: "aaa"
        },
        {
            idTeste: 002,
            nome: "eee"
        }
    ],
    "2022-01-02": [
        {
            idTeste: 003,
            nome: "aba"
        },
        {
            idTeste: 004,
            nome: "ebe"
        }
    ]
}

function percorredor(obj,callback) {

    const chaves = Object.keys(obj);

    chaves.forEach(function(chave) {

        const arrayAtual = obj[chave]

        arrayAtual.forEach(function(itemAtual,index) {

            callback(itemAtual,index)
            
        })

    })
}

console.log(exemplo);

percorredor(exemplo,function(itemAtual,index) {
    console.log(index);
    console.log(itemAtual);
}); */