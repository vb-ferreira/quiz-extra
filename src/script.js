// Elementos
const statement = document.querySelector('#statement p');
const optionButtons = document.querySelectorAll('#options button');
const explanation = document.querySelector('#explanation p');

// Dados

const facts = [
  {
    id: 1,
    fact: 'O pai de Percy Jackson é o deus grego Zeus.',
    answer: false,
    explanation: 'Falso. O pai de Percy Jackson é Poseidon, o deus do mar. Este é um aspecto crucial da identidade de Percy como semideus.'
  },
  {
    id: 2,
    fact: 'A série principal de Percy Jackson é composta por cinco livros.',
    answer: true,
    explanation: 'Verdadeiro. A série original Percy Jackson & os Olimpianos, escrita por Rick Riordan, é composta por cinco livros: O Ladrão de Raios, O Mar de Monstros, A Maldição do Titã, A Batalha do Labirinto e O Último Olimpiano.'
  },
  {
    id: 3,
    fact: 'Annabeth Chase é filha de Atena.',
    answer: true,
    explanation: 'Verdadeiro. Annabeth Chase, uma das amigas mais próximas de Percy, é uma semideusa e filha da deusa grega Atena. Sua inteligência e mente estratégica refletem sua ascendência divina.'
  }
]

// Cria array de índices para seleção aleatória de fatos
const factsIndexes = [...Array(facts.length).keys()]  // cria um array com os índices de facts
const shuffledFactsIndexes = shuffle(factsIndexes);   // embaralha os índices
 
// Dados atualizados pela função getFact()
let actualFact;
let actualAnswer;
let actualExplanation;

// Pega um fato aleatório do array
fact = getFact();

// Insere o fato no DOM
statement.textContent = actualFact;

// Event Handlers

for (let btn of optionButtons) {
  btn.addEventListener('click', (event) => {
    // Ao clicar em qualquer botão, a explicação é inserida no DOM
    explanation.textContent = actualExplanation;
    // Desabilita os botões
    for (let btn of optionButtons) {
      disableButton(btn);
    }
    // Verifica a resposta e atualiza o estilo do botão
    if (isCorrect(btn.value, fact)) {
      btn.classList.add('correct');      
    } else {
      btn.classList.add('incorrect');  
    }
  });
}

// Funções Auxiliares

function shuffle(array) {
  // Embaralha os itens de um array
  return array.sort(() => Math.random() - 0.5);
}

function getFact () {
  // Pega um fato aleatoriamente na base
  if (shuffledFactsIndexes.length > 0) {
    const actualIndex = shuffledFactsIndexes.pop();  // retira o último índice  
    actualFact = facts[actualIndex].fact;
    actualAnswer = facts[actualIndex].answer;
    actualExplanation = facts[actualIndex].explanation;
    return facts[actualIndex];                  
  }  
}

function disableButton(btn) {
  // Desabilita um botão
  btn.setAttribute('disabled', '');
}

function enableButton(btn) {
  // Habilita um botão
  btn.removeAttribute('disabled');
}

function isCorrect (guess, fact) {
  // Verifica se a resposta está correta
  return guess === fact.answer.toString();
}
