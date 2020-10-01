import { Loja } from './loja'; 

export function dados_loja_objeto(loja: Loja) {
  
  if (!loja.nome_loja){
    throw new Error (`O campo nome da loja é obrigatório`)
  }

  if (!loja.logradouro){
    throw new Error (`O campo logradouro do endereço é obrigatório`)
  }

  let _numero : string = loja.numero ? `${loja.numero}` : "s/n"  

  if (!loja.municipio){
    throw new Error (`O campo município do endereço é obrigatório`)
  }

  if (!loja.estado){
    throw new Error (`O campo estado do endereço é obrigatório`)
  }

  if (!loja.cnpj){
    throw new Error (`O campo CNPJ da loja é obrigatório`)
  }

  if (!loja.inscricao_estadual){
    throw new Error (`O campo inscrição estadual da loja é obrigatório`)
  }  

  let _complemento : String = loja.complemento ? ` ${loja.complemento}` : ""

  let _bairro : String = loja.bairro ? `${loja.bairro} - ` :  ""

  let _cep : String = ""
  
  let _telefone : String = ""

  if (loja.cep){
    _cep = `CEP:${loja.cep}`

    if (loja.telefone){
      _telefone = ` Tel ${loja.telefone}`
    } 
  }else{
    _telefone = `Tel ${loja.telefone}`
  }

  let _observacao : String = loja.observacao ? `${loja.observacao}` : ""


    return `${loja.nome_loja}
${loja.logradouro}, ${_numero}${_complemento}
${_bairro}${loja.municipio} - ${loja.estado}
${_cep}${_telefone}
${_observacao}
CNPJ: ${loja.cnpj}
IE: ${loja.inscricao_estadual}
`
  return "";
} 