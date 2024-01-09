// Base de Dados
const facts = [
  {
    id: 1,
    statement: 'O pai de Percy Jackson é o deus grego Zeus.',
    answer: "false",
    explanation: 'Falso. O pai de Percy Jackson é Poseidon, o deus do mar. Este é um aspecto crucial da identidade de Percy como semideus.'
  },
  {
    id: 2,
    statement: 'A série principal de Percy Jackson é composta por cinco livros.',
    answer: "true",
    explanation: 'Verdadeiro. A série original Percy Jackson & os Olimpianos, escrita por Rick Riordan, é composta por cinco livros: O Ladrão de Raios, O Mar de Monstros, A Maldição do Titã, A Batalha do Labirinto e O Último Olimpiano.'
  },
  {
    id: 3,
    statement: 'Annabeth Chase é filha de Atena.',
    answer: "true",
    explanation: 'Verdadeiro. Annabeth Chase, uma das amigas mais próximas de Percy, é uma semideusa e filha da deusa grega Atena. Sua inteligência e mente estratégica refletem sua ascendência divina.'
  },
  {
    id: 4,
    statement: 'O Ladrão de Raios começa com Percy Jackson frequentando uma escola secundária normal.',
    answer: "true",
    explanation: 'Verdadeiro. No início de O Ladrão de Raios, Percy acredita ser um adolescente comum frequentando uma escola secundária normal. Somente mais tarde ele descobre sua verdadeira identidade como semideus.'
  },
  {
    id: 5,
    statement: 'O Acampamento Meio-Sangue é um refúgio seguro para semideuses e está escondido dos olhos dos mortais.',
    answer: "true",
    explanation: 'Verdadeiro. O Acampamento Meio-Sangue é um campo de treinamento secreto para semideuses, escondido da visão dos mortais. Ele oferece um ambiente seguro para os semideuses desenvolverem suas habilidades e aprenderem sobre sua herança.'
  },
  {
    id: 6,
    statement: 'O antagonista em O Mar de Monstros é o Titã Cronos.',
    answer: "false",
    explanation: 'Falso. Em O Mar de Monstros, o antagonista é Polifemo, um ciclope e criatura mitológica que guarda o Velocino de Ouro. Cronos torna-se uma ameaça mais proeminente em livros posteriores.'
  },
  {
    id: 7,
    statement: 'Percy Jackson tem um irmão mais novo chamado Tyson.',
    answer: "true",
    explanation: 'Verdadeiro. Tyson é um ciclope e meio-irmão de Percy. Ele desempenha um papel significativo em O Mar de Monstros e em livros posteriores.'
  },
  {
    id: 8,
    statement: 'Grover é um sátiro e o melhor amigo de Percy Jackson.',
    answer: "true",
    explanation: 'Verdadeiro. Grover Underwood é um sátiro, uma criatura com corpo superior humano e corpo inferior de bode. Ele é um amigo leal e protetor de Percy ao longo da série.'
  },
  {
    id: 9,
    statement: 'O Hotel e Cassino Lotus é um lugar onde o tempo passa normalmente.',
    answer: "false",
    explanation: 'Falso. O Hotel e Cassino Lotus é um local mágico onde o tempo é distorcido, e os visitantes podem perder a noção dele. Percy e seus amigos experimentam isso em O Ladrão de Raios.'
  },
  {
    id: 10,
    statement: 'Percy Jackson e Annabeth Chase acabam juntos romanticamente no final da série.',
    answer: "true",
    explanation: 'Verdadeiro. Ao longo da série, o relacionamento de Percy e Annabeth evolui, e no final de O Último Olimpiano, eles se tornam um casal.'
  },
  {
    id: 11,
    statement: 'O Acampamento Júpiter é o equivalente romano do Acampamento Meio-Sangue.',
    answer: "true",
    explanation: 'Verdadeiro. O Acampamento Júpiter é a versão romana do Acampamento Meio-Sangue, focado em semideuses romanos.'
  },
  {
    id: 12,
    statement: 'A mãe de Percy Jackson se chama Sally Jackson.',
    answer: "true",
    explanation: 'Veradadeiro. A mãe de Percy se chama Sally Jackson, e ela desempenha um papel importante na vida dele.'
  },
  {
    id: 13,
    statement: 'Os Três Grandes deuses no Olimpo são Zeus, Hércules e Poseidon.',
    answer: "false",
    explanation: 'Falso. Zeus, Hades e Poseidon são conhecidos como os Três Grandes deuses do Olimpo na mitologia grega.'
  },
  {
    id: 14,
    statement: 'Percy Jackson possui um animal de estimação chamado Bellfast.',
    answer: "false",
    explanation: 'Falso. Blackjack é o nome do pégaso negro que se torna o fiel companheiro de Percy em algumas situações.'
  },
  {
    id: 15,
    statement: 'A maldição do Titã referida no terceiro livro da série envolve a profecia de um semideus.',
    answer: "true",
    explanation: 'Verdadeiro. A maldição do Titã envolve uma profecia que impacta diretamente Percy Jackson e seus amigos.'
  },
  {
    id: 16,
    statement: 'Nico di Angelo é inicialmente introduzido como um semideus aliado de Percy Jackson.',
    answer: "false",
    explanation: 'False. Nico di Angelo inicialmente aparece como um personagem misterioso e sua lealdade é ambígua.'
  },
  {
    id: 17,
    statement: 'A Grande Profecia desempenha um papel importante na série Percy Jackson & os Olimpianos.',
    answer: "true",
    explanation: 'Verdadeiro. A Grande Profecia é uma narrativa central que molda o destino dos personagens na série.'
  },
  {
    id: 18,
    statement: 'Ares é o deus grego da guerra e frequentemente é um aliado de Percy Jackson.',
    answer: "false",
    explanation: 'Falso. Ares é o deus grego da guerra, mas geralmente é um personagem antagonista na série.'
  },
  {
    id: 19,
    statement: 'Clarisse La Rue é uma semideusa filha de Hades.',
    answer: "false",
    explanation: 'Falso. Clarisse La Rue é uma semideusa filha de Ares, o deus da guerra.'
  },
  {
    id: 20,
    statement: 'O vilão principal na série Os Heróis do Olimpo, sequência de Percy Jackson, é Gaea.',
    answer: "true",
    explanation: 'Verdadeiro. Gaea é a principal antagonista na série Os Heróis do Olimpo, que segue a saga de Percy Jackson.'
  }
]

// Funções auxiliares
function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function disable(button) {
  button.setAttribute("disabled", "");
} 

function enable(button) {
  button.removeAttribute("disabled");
}

function calcNote (cor, comp) {
  return ((correct / completed) * 10).toFixed(2);
}

//function shuffle(array) {
//  return array.sort(() => Math.random() - 0.5);
//}

// Variáveis globais de controle
let correct = 0;
let completed = 0;
let fact;

// Elementos do DOM
const statement = document.querySelector('#statement p');
const optionButtons = document.querySelectorAll('#options button');
const explanation = document.querySelector('#explanation p');
const nextButton = document.querySelector("#next-question");
const result = document.querySelector('#result');

// Função de exibição do resultado
// TODO: melhorar essa função
function showResult() {
  // Esconde elementos da tela de jogo
  hide(document.querySelector('header'));
  hide(document.querySelector('#statement'));
  hide(document.querySelector('#explanation'));
  hide(document.querySelector('#next-question'));
  hide(optionButtons[0]);
  hide(optionButtons[1]);
  
  // Calcula e insere a nota
  note = calcNote(correct, completed);
  document.querySelector('#result h2').textContent += note;
  
  // Mensagem do resultado
  let message;
  
  if (note > 9) {
    message = "Parabéns, amarela! Você provou ser uma viciadinha em Percy Jackson.";
  } else if (note > 7) {
    message = "Humm... Dá pra melhorar."
  } else {
    message = "Que vergonha, Mary Bright... O que você faz com aqueles livros abertos???";
  }
  
  document.querySelector('.message-result').textContent = message;
  
  // Exibe elemento de resultado
  result.removeAttribute('class');
  result.classList.add('show-result');
} 
  
// Função principal
function getNextFact() {
  fact = facts.shift(); // pega o primeiro fato da base (diminuindo o array)

  // adiciona o fato ao DOM
  statement.textContent = fact.statement;

  // esconde a explicação anterior
  hide(explanation);

  for (let option of optionButtons) {
      // limpa o CSS dos botões
      option.classList.remove("correct");
      option.classList.remove("incorrect");
      // habilita os botões de verdadeiro/falso
      enable(option);
  }

  // desabilita o botão da próxima pergunta
  disable(nextButton);  
}

// Chama a próxima pergunta ao clicar no botão
nextButton.addEventListener("click", getNextFact);

// Ações disparadas pelos botões de opção
for (let option of optionButtons) {
  option.addEventListener("click", e => {
    // Quando uma escolha é feita...
    // os dois botões de seleção são desabilitados
    for (let button of optionButtons) {
      disable(button); 
    }

    // Se ainda houver questões, o botão de próxima pergunta é habilitado
    if (facts.length > 0) {
      enable(nextButton);
    } else {
      nextButton.textContent = "Ver resultado"
      // TODO: chamar função de resultado
      nextButton.removeEventListener('click', getNextFact);
      nextButton.addEventListener("click", showResult);
      enable(nextButton);
      // 3. Constuir função showResult()
    }

    const guess = e.target.value;  // resposta do usuário
    
    if (guess === fact.answer) {
      // se resposta correta:
      e.target.classList.add("correct");
      correct += 1;
    } else {
      // se resposta errada:
      e.target.classList.add("incorrect");
    }

    // insere a explicação no DOM
    explanation.textContent = fact.explanation;
    show(explanation);

    // atualiza o placar
    completed += 1;
    document.querySelector("#correct").textContent = correct;
    document.querySelector("#completed").textContent = completed;
  })
}

getNextFact();
