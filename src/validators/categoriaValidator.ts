export function validarCategoria(categoria: string){
    const regExNumbers = /[0-9]/
    if (categoria.trim().length === 0 || !categoria || regExNumbers.test(categoria) || categoria === undefined || categoria === null){
        return false
    }
    return true
}