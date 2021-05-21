const cepField = document.querySelector('#cep')
const streetField = document.querySelector('#street')
const neighborhoodField = document.querySelector('#neighborhood')
const cityField = document.querySelector('#city')

cepField.addEventListener('focus', () => {
  cleanCepError()
})

cepField.addEventListener('blur', () => {
  let cep = cepField.value

  if (/\d{5}-?\d{3}/.test(cep)) {
    loadCepInfo(cep)
  } else {
    showCepError()
  }
})

function loadCepInfo(cep) {
  let url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url)
    .then(res => res.json())
    .then(cepInfo => {
      if(cepInfo.erro) {
        cleanAddressFields()
      } else {
        streetField.value = cepInfo.logradouro
        neighborhoodField.value = cepInfo.bairro
        cityField.value = cepInfo.localidade

        numberField.focus()
        cleanCepError()
      }
    })
    .catch(error => {
      showCepError()
    })
}