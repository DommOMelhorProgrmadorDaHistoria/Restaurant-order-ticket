export function validarItem(nome_item: string){
    const regExNumber =/[0-9]/
    if (!nome_item || nome_item.trim().length === 0 || regExNumber.test(nome_item) || nome_item === null || nome_item === undefined){
        return false
    }
    return true
}
