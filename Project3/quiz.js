const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: true },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];


// btn.onclick() = function (){
//     btn.addeventlistener()
// }


// function clickbtn(){
//     btn.addeventlistener('onclick', function (){
//         let quiz = document.getElementById('quiz-container');
//         quiz
//     })
// }



const question = document.getElementById('question');
const btn = document.querySelectorAll('.btn');

// btn.onclick() = function () {

//     questions.forEach(question => (){
//         questions.innerHTML +=
//             `<div id="question">${question}</div>
//                 <button class="btn" id="true-btn">Vrai</button>
//                 <button class="btn" id="false-btn">Faux</button> `
//     })

// }




// btn.onclick() = function () {
    //     questions.forEach(question => {
        //         const quiz = document.querySelectorAll('#quiz-container');
        //         quiz.innerHTML += ` <div id="question">${question}</div>
        //             <button class="btn" id="true-btn">Vrai</button>
        //             <button class="btn" id="false-btn">Faux</button>`
        
        //     })
// }


btn.onclick() = function (){
    
    questions.forEach(question => {
        const quiz = document.querySelectorAll('quiz-container')
        
        quiz.innerHTML = div.innerHTML + ` <div id="question">${question}</div>
        <button class="btn" id="true-btn">Vrai</button>
        <button class="btn" id="false-btn">Faux</button>`
    })
    score() ;
}

function score() {
    let count = 0 ; 
    const score = document.getElementById('score');
    for (questions of question){
        if (btn.onclick() === answer){
            count ++ ; 
        }
        score = count ;
        
        score.innerHTML = ` <div id="question"></div>`

    }


}




