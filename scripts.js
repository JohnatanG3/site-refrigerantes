// Seleciona todos os itens (sabores)
let list = document.querySelectorAll('.item');
// Seleciona os botões "próximo" e "anterior"
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// Define o número total de itens e qual está ativo no momento
let count = list.length;
let active = 0;

// Função para avançar para o próximo sabor
next.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
}

// Função para voltar ao sabor anterior
prev.onclick = () => {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
}