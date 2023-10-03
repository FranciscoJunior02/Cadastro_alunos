function selectionSort(vetor, fnComp){
    for(let posSel = 0; posSel < vetor.length - 1; posSel ++){
        let posMenor = posSel + 1

        for(let i = posMenor + 1; i < vetor.length; i ++){
            if(fnComp(vetor[posMenor], vetor[i])) posMenor = i

        }
        if(fnComp(vetor[posSel], vetor[posMenor])){
            [vetor[posSel], vetor[posMenor] ] = [vetor[posMenor], vetor[posSel]]
        }
    }
}

function dados(){
    let op
    const vetor_info = []
    let result = " "

    
do {
op = Number(prompt(`Entre com uma das opções abaixo: \n 
        1.Cadastrar Alunos.\n
        2.Relatório de Alunos em ordem crescente por Nome.\n
        3.Relatório de Alunos em ordem decrescente por RA.\n
        4.Relatório de Alunos em ordem crescente por Nome,apenas dos Aprovados.\n
        5.Encerre a execução do programa, para ser apresentado a opção escolhida.`))
        
   
    if(op == 1){
            
        let informacao = new Object()

        informacao.nome = prompt(`Infome o nome do aluno`)
        informacao.ra = Number(prompt(`Informe o numero do RA`))
        informacao.idade = Number(prompt(`Informe a idade`))
        informacao.sexo = (prompt(`Informe o sexo, sendo M para masculino, e F para feminino`)).toUpperCase()
        informacao.media = Number(prompt(`Informe a Media`))
        informacao.aprovacao = (prompt(`Informe se foi aprovado, sendo A para aprovado, e R para reprovado `)).toUpperCase()

        vetor_info.push(informacao)
    }
        
        
    else if (op == 2){
    
    selectionSort(vetor_info, (elem1, elem2) => elem1.nome > elem2.nome)
        for(let i=0; i<vetor_info.length;i ++){
           result += prompt(`Seguindo em ordem crescente pelo nome, segue os dados dos alunos:\nNome: ${vetor_info[i].nome}\n RA: ${vetor_info[i].ra}\n idade: ${vetor_info[i].idade},
           sexo: ${vetor_info[i].sexo}\n media: ${vetor_info[i].media}\n e foi: ${vetor_info[i].aprovacao}. APERTE ENTER PARA MOSTRAR A LISTA.`)
           
        }
    }

    else if (op == 3){

    selectionSort(vetor_info, (elem1, elem2) => elem1.ra < elem2.ra)
        for(let i=0; i<vetor_info.length;i ++){
           result += prompt(`Seguindo em ordem decrescente pelo RA, segue os dados dos alunos:\nNome: ${vetor_info[i].nome}\n RA: ${vetor_info[i].ra}\n idade: ${vetor_info[i].idade},
           sexo: ${vetor_info[i].sexo}\n media: ${vetor_info[i].media}\n e foi: ${vetor_info[i].aprovacao}. APERTE ENTER PARA MOSTRAR A LISTA.`)
        }
    }

    else if (op == 4){
        for(let i=0; i<vetor_info.length;i ++){
            if(vetor_info[i].aprovacao == "A"){
        selectionSort(vetor_info, (elem1, elem2) => elem1.nome > elem2.nome)
        result += prompt(`Os alunos que foram aprovados em ordem crescente pelo nome:\nNome: ${vetor_info[i].nome}\n RA: ${vetor_info[i].ra}\n idade: ${vetor_info[i].idade},
            sexo: ${vetor_info[i].sexo}\n media: ${vetor_info[i].media}\n e foi: ${vetor_info[i].aprovacao}. APERTE ENTER PARA MOSTRAR A LISTA.`)
            }
        }

    }
       

    }while (op != 5 )
}