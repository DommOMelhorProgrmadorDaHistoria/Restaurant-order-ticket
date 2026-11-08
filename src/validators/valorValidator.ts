export function validarValor(valor: number){
    const valorString = valor.toString()
    const regExLetters = /[a-z]/
    if (regExLetters.test(valorString.toUpperCase())){
        return false
    }
    if (valorString === null || valorString === undefined || valorString.trim().length === 0){
        return false
    }
    return true
}