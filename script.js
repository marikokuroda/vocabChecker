const vocabularyLists = {
    1: [
        {sentence: "The baby ____ the ball.", word: "threw", 
         options: ["threw", "eat", "sleep", "catch", "I don't know"], 
         correct: "threw"},
        {sentence: "She ____ her homework every night.", word: "does", 
         options: ["does", "eat", "sleep", "play", "I don't know"], 
         correct: "does"},
        {sentence: "The sun ____ in the morning.", word: "rises", 
         options: ["rises", "falls", "jumps", "walks", "I don't know"], 
         correct: "rises"},
        {sentence: "They ____ to the park yesterday.", word: "went", 
         options: ["went", "go", "going", "run", "I don't know"], 
         correct: "went"},
        {sentence: "The cat ____ on the soft pillow.", word: "sleeps", 
         options: ["sleeps", "eat", "run", "play", "I don't know"], 
         correct: "sleeps"},
        {sentence: "He ____ his teeth twice a day.", word: "brushes", 
         options: ["brushes", "wash", "clean", "scrub", "I don't know"], 
         correct: "brushes"},
        {sentence: "The birds ____ in the trees.", word: "sing", 
         options: ["sing", "fly", "sleep", "dance", "I don't know"], 
         correct: "sing"},
        {sentence: "We ____ dinner at 7 PM.", word: "eat", 
         options: ["eat", "cook", "buy", "prepare", "I don't know"], 
         correct: "eat"},
        {sentence: "The children ____ in the playground.", word: "play", 
         options: ["play", "study", "sleep", "read", "I don't know"], 
         correct: "play"},
        {sentence: "She ____ a beautiful dress.", word: "wears", 
         options: ["wears", "hold", "throw", "carry", "I don't know"], 
         correct: "wears"}
    ],
    2: [
        {sentence: "The scientist ____ a new theory.", word: "developed", 
         options: ["developed", "invented", "discovered", "created", "I don't know"], 
         correct: "developed"},
        {sentence: "The mountain climbers ____ the peak after a long journey.", word: "reached", 
         options: ["reached", "touched", "arrived", "climbed", "I don't know"], 
         correct: "reached"},
        {sentence: "The chef ____ the ingredients before cooking.", word: "prepared", 
         options: ["prepared", "mixed", "chopped", "arranged", "I don't know"], 
         correct: "prepared"},
        {sentence: "The flowers in the garden ____ a sweet fragrance.", word: "emit", 
         options: ["emit", "release", "spread", "create", "I don't know"], 
         correct: "emit"},
        {sentence: "The old bridge ____ under the weight of the trucks.", word: "collapsed", 
         options: ["collapsed", "fell", "broke", "crumbled", "I don't know"], 
         correct: "collapsed"},
        {sentence: "The company ____ its profits by reducing expenses.", word: "increased", 
         options: ["increased", "raised", "improved", "boosted", "I don't know"], 
         correct: "increased"},
        {sentence: "The detective ____ the clues to solve the mystery.", word: "analyzed", 
         options: ["analyzed", "studied", "examined", "investigated", "I don't know"], 
         correct: "analyzed"},
        {sentence: "The artist ____ a beautiful landscape on the canvas.", word: "painted", 
         options: ["painted", "drew", "sketched", "created", "I don't know"], 
         correct: "painted"},
        {sentence: "The students ____ their projects to the class.", word: "presented", 
         options: ["presented", "showed", "displayed", "shared", "I don't know"], 
         correct: "presented"},
        {sentence: "The firefighters ____ the flames before they spread further.", word: "extinguished", 
         options: ["extinguished", "put out", "stopped", "controlled", "I don't know"], 
         correct: "extinguished"}
    ],
    3: [
        {sentence: "The politician's speech ____ the audience with its powerful message.", word: "captivated", 
         options: ["captivated", "interested", "entertained", "impressed", "I don't know"], 
         correct: "captivated"},
        {sentence: "The new technology ____ traditional methods of communication.", word: "revolutionized", 
         options: ["revolutionized", "changed", "improved", "transformed", "I don't know"], 
         correct: "revolutionized"},
        {sentence: "The philosopher's ideas ____ conventional wisdom on the subject.", word: "challenged", 
         options: ["challenged", "questioned", "opposed", "disputed", "I don't know"], 
         correct: "challenged"},
        {sentence: "The company's innovative products ____ it from its competitors.", word: "distinguished", 
         options: ["distinguished", "separated", "differentiated", "set apart", "I don't know"], 
         correct: "distinguished"},
        {sentence: "The journalist's report ____ widespread public interest in the issue.", word: "generated", 
         options: ["generated", "created", "produced", "sparked", "I don't know"], 
         correct: "generated"},
        {sentence: "The experiment results ____ the scientist's initial hypothesis.", word: "corroborated", 
         options: ["corroborated", "confirmed", "supported", "validated", "I don't know"], 
         correct: "corroborated"},
        {sentence: "The actor's performance ____ critical acclaim from reviewers.", word: "garnered", 
         options: ["garnered", "received", "earned", "achieved", "I don't know"], 
         correct: "garnered"},
        {sentence: "The new law ____ stricter penalties for environmental violations.", word: "implemented", 
         options: ["implemented", "introduced", "enforced", "established", "I don't know"], 
         correct: "implemented"},
        {sentence: "The company's unethical practices ____ its reputation in the industry.", word: "tarnished", 
         options: ["tarnished", "damaged", "ruined", "destroyed", "I don't know"], 
         correct: "tarnished"},
        {sentence: "The diplomat's skillful negotiation ____ a peaceful resolution to the conflict.", word: "facilitated", 
         options: ["facilitated", "enabled", "helped", "assisted", "I don't know"], 
         correct: "facilitated"}
    ]
};



let studentName, currentLevel, currentQuestion, score, timer, studentResponses;

const nameInputField = document.getElementById('student-name');
const levelSelect = document.getElementById('level-select');
const startButton = document.getElementById('start-test');
const testContainer = document.getElementById('test-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerElement = document.getElementById('time');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const retryButton = document.getElementById('retry');

startButton.addEventListener('click', startTest);
retryButton.addEventListener('click', resetTest);

function startTest() {
    studentName = nameInputField.value.trim();
    currentLevel = levelSelect.value;

    if (!studentName) {
        alert('Please enter your name');
        return;
    }

    if (!currentLevel) {
        alert('Please select a level');
        return;
    }
    
    currentQuestion = 0;
    score = 0;
    studentResponses = [];
    document.getElementById('setup').style.display = 'none';
    testContainer.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= 10) {
        showResults();
        return;
    }

    const question = vocabularyLists[currentLevel][currentQuestion];
    questionElement.textContent = question.sentence;
    questionElement.className = "is-size-3";
    optionsElement.innerHTML = '';
    
    question.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.className = 'button is-link mr-3 mt-3';
    button.addEventListener('click', () => selectAnswer(option, question.correct));
    optionsElement.appendChild(button);
});

    startTimer();
}

function selectAnswer(selected, correct) {
    clearTimeout(timer);
    if (selected === correct) score++;
    studentResponses.push({
        question: currentQuestion + 1,
        sentence: vocabularyLists[currentLevel][currentQuestion].sentence,
        selected: selected,
        correct: correct
    });
    currentQuestion++;
    showQuestion();
}

function startTimer() {
    let timeLeft = 15;
    timerElement.textContent = timeLeft;

    function countdown() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft > 0) {
            timer = setTimeout(countdown, 1000);
        } else {
            selectAnswer("Time's up", vocabularyLists[currentLevel][currentQuestion].correct);
        }
    }

    timer = setTimeout(countdown, 1000);
}

function showResults() {
    testContainer.style.display = 'none';
    resultsElement.style.display = 'block';
    scoreElement.textContent = score;

    const testResult = {
        name: studentName,
        level: currentLevel,
        score: score,
        responses: studentResponses,
        date: new Date().toISOString()
    };

    //sendDataToGoogleSheets(testResult);
}

/*function sendDataToGoogleSheets(data) {
    fetch('https://script.google.com/macros/s/AKfycbzdProbrPKB66nJcDiv-0EIwJsCtlm76I4OplNq7oZN9xjQbOsYwoL2hiZ4AiRTyA2s/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log('Success:', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
*/

function resetTest() {
    resultsElement.style.display = 'none';
    document.getElementById('setup').style.display = 'block';
    nameInputField.value = '';
    levelSelect.value = '';
}
