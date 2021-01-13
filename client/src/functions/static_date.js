export const getNomeTipo = (valor) => {
    let nome_tipo = ''

    if(valor === 1){
        nome_tipo = 'Administrador'
    }else if(valor === 2){
        nome_tipo = 'Gerente'
    }else if(valor === 3){
        nome_tipo = 'Funcionário'
    }

    return nome_tipo;
}