//Permite que os itens do menú mudem de cor ao serem selecionados
var menuItem = document.querySelectorAll('.item-menu')

function selectItem(){
    menuItem.forEach((item)=>
        item.classList.remove('item-ativo')
    )
    this.classList.add('item-ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectItem)
)


//Configuração de expandir menú ao clicar no primeiro icone dele
var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir-menu')
})