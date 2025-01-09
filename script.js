const vocabularyLists = {
    1: [
        {sentence: "There is enough ____ for skiing.", word: "snow", 
         options: ["some", "snow", "sun", "winter", "I don't know"], 
         correct: "snow", image: "images/snow.png"},
         
        {sentence: "Let’s ____ outside because it’s sunny!", word: "play", 
         options: ["sleep", "ride", "dance", "play", "I don't know"], 
         correct: "play", image: "images/play.png"},
         
        {sentence: "He wore brown ____ and a white shirt!", word: "pants", 
         options: ["pants", "hat", "shoe", "cloud", "I don't know"], 
         correct: "pants", image: "images/pants.png"},
         
        {sentence: "The flowers ____ nice!", word: "smell", 
         options: ["fly", "feel", "smell", "shut", "I don't know"], 
         correct: "smell", image: "images/smell.png"},
         
        {sentence: "An elephant is a ____ animal.", word: "big", 
         options: ["small", "big", "hot", "thin", "I don't know"], 
         correct: "big", image: "images/big.png"},
         
        {sentence: "I have to go home and ____ dinner.", word: "cook", 
         options: ["jump", "think", "run", "cook", "I don't know"], 
         correct: "cook", image: "images/cook.png"},
         
        {sentence: "Planes ____ up in the clouds.", word: "fly", 
        options: ["dance", "think", "fly", "grow", "I don't know"], 
        correct: "fly", image: "images/fly.png"},


        {sentence: "We live on planet ____.", word: "Earth", 
         options: ["Mars", "Earth", "clouds", "pencil", "I don't know"], 
         correct: "Earth", image: "images/Earth.png"},
         
        {sentence: "I rode a ____ train to Yokohama.", word: "fast",
         options: ["tall", "fast", "green", "chair",  "I don't know"], 
         correct: "fast", image: "images/fast.png"},
         
        {sentence: "The king lives in a beautiful ____.", word: "castle", 
         options: ["house", "car", "boat", "castle", "I don't know"], 
         correct: "castle", image: "images/castle.png"}
    ],

    2: [
        {sentence: "I sleep with a very soft ____ everyday.", word: "pillow", 
         options: ["stone", "pencil", "pillow", "banana", "I don't know"], 
         correct: "pillow", image: "images/pillow.png"},
         
        {sentence: "I only have a few ____ in my wallet.", word: "pennies", 
         options: ["apples", "shoes", "pennies", "flowers", "I don't know"], 
         correct: "pennies", image: "images/pennies.png"},
         
        {sentence: "I am ____ of ghosts.", word: "scared", 
         options: ["hungry", "scared", "asleep", "strong", "I don't know"], 
         correct: "scared", image: "images/scared.png"},
         
        {sentence: "An airplane flew over the ____.", word: "clouds", 
         options: ["trees", "clouds", "cars", "chairs", "I don't know"], 
         correct: "clouds", image: "clouds/pillow.png"},
         
        {sentence: "There was a terrible ____ at night.", word: "storm", 
         options: ["storm", "joke", "cake", "game", "I don't know"], 
         correct: "storm", image: "images/storm.png"},
         
        {sentence: "Strong ____ blew from the north.", word: "winds", 
         options: ["winds", "paint", "dogs", "books", "I don't know"], 
         correct: "winds", image: "images/winds.png"},
         
        {sentence: "“Help!” she ____.", word: "screamed", 
         options: ["screamed", "ate", "sat", "painted", "I don't know"], 
         correct: "screamed", image: "images/screamed.png"},
         
        {sentence: "I always take a ____ in the morning.", word: "bath", 
         options: ["bath", "hat", "pencil", "cake", "I don't know"], 
         correct: "bath", image: "images/bath.png"},
         
        {sentence: "My hair was ____ after taking a shower.", word: "wet", 
         options: ["wet", "loud", "hard", "bright", "I don't know"], 
         correct: "wet", image: "images/wet.png"},
         
        {sentence: "We live in a small ____ in Tokyo.", word: "town", 
         options: ["town", "shoe", "window", "lake", "I don't know"], 
         correct: "town", image: "images/town.png"}
    ],

    3: [
        {sentence: "We heard a ____ noise outside our house.", word: "strange", 
         options: ["surprised", "strange", "real", "clean", "I don't know"], 
         correct: "strange", 
         definition: "unusual or surprising, in a way that is difficult to understand or explain"},
         
        {sentence: "I do not ____ this word!", word: "understand", 
         options: ["work", "understand", "create", "connect", "I don't know"], 
         correct: "understand", 
         definition: "to know the meaning of what someone is telling you, or the language that they speak"},
         
        {sentence: "Joe ____ an apple on the table.", word: "found", 
         options: ["broke", "lost", "found", "took", "I don't know"], 
         correct: "found", 
         definition: "to discover something by chance"},

          {sentence: "I ____ when my father told me a funny story.", word: "laughed", 
         options: ["walked", "cried", "slept", "laughed", "I don't know"], 
         correct: "laughed", 
         definition: "to make sounds with your voice because you think something is funny"},
         
        {sentence: "My English lesson ____ at 9 o'clock every morning.", word: "begins", 
         options: ["ends", "begins", "stops", "waits", "I don't know"], 
         correct: "begins", 
         definition: "to start doing something, or to start to happen or exist"},
         
        {sentence: "The lion ____ a zebra and ate it.", word: "killed", 
         options: ["found", "played", "killed", "chased", "I don't know"], 
         correct: "killed", 
         definition: "to make a person or animal die"},
         
        {sentence: "The concert starts at 7:30pm, so please ____ by 7 o'clock.", word: "arrive", 
         options: ["arrive", "leave", "run", "sleep", "I don't know"], 
         correct: "arrive", 
         definition: "to get to a place"},
         
        {sentence: "I got the ____ answer on my test.", word: "wrong", 
         options: ["short", "true", "bright", "wrong", "I don't know"], 
         correct: "wrong", 
         definition: "not true; incorrect"},
         
        {sentence: "You should ____ lots of water every day.", word: "drink", 
         options: ["eat", "jump", "drink", "sing", "I don't know"], 
         correct: "drink", 
         definition: "to take liquid into your mouth and swallow it"},
         
        {sentence: "Please ____ this book to Catal in one week.", word: "return", 
         options: ["lose", "return", "hide", "sell", "I don't know"], 
         correct: "return", 
         definition: "to come back or send something back where it came from"}
    ],

    4: [
        {sentence: "The sun went ____ the clouds.", word: "behind", 
         options: ["behind", "above", "next to", "in front of", "I don't know"], 
         correct: "behind", 
         definition: "at the back of something"},
         
        {sentence: "The students took the test in ____.", word: "silence", 
         options: ["noise", "music", "silence", "talking", "I don't know"], 
         correct: "silence", 
         definition: "when there is no sound or nobody is talking"},
         
        {sentence: "My sister ____ me what she had bought today.", word: "showed", 
         options: ["hid", "broke", "showed", "threw", "I don't know"], 
         correct: "showed", 
         definition: "to let someone see something"},
         
        {sentence: "I got all the questions ____ in the test!", word: "right", 
         options: ["right", "wrong", "short", "hard", "I don't know"], 
         correct: "right", 
         definition: "correct or true"},
         
        {sentence: "The team went on an adventure to ____ the Amazon River.", word: "explore", 
         options: ["explore", "ignore", "destroy", "hide", "I don't know"], 
         correct: "explore", 
         definition: "to travel around an area to find out what it is like"},
         
        {sentence: "The doctor's job is to ____ people's lives.", word: "save", 
         options: ["take", "hurt", "save", "hide", "I don't know"], 
         correct: "save", 
         definition: "to make someone or something safe from danger or harm."},
         
        {sentence: "Be careful when you pick up the ____ glass.", word: "broken", 
         options: ["broken", "shiny", "clean", "big", "I don't know"], 
         correct: "broken", 
         definition: "damaged or in small pieces because of being hit, dropped etc."},
         
        {sentence: "The dog ____ her around wherever she went.", word: "followed", 
         options: ["stopped", "ignored", "chased", "followed", "I don't know"], 
         correct: "followed", 
         definition: "to walk or drive behind someone."},
         
        {sentence: "He screamed but ____ came to help him.", word: "nobody", 
         options: ["everybody", "nobody", "somebody", "anybody", "I don't know"], 
         correct: "nobody", 
         definition: "no one"},
         
        {sentence: "Everyone was ____ at the magic tricks.", word: "amazed", 
         options: ["confused", "bored", "amazed", "angry", "I don't know"], 
         correct: "amazed", 
         definition: "very surprised."}
    ],

    5: [
        {sentence: "I felt ____ after I had a fight with my mother.", word: "miserable", 
         options: ["happy", "excited", "miserable", "bored", "I don't know"], 
         correct: "miserable", 
         definition: "very unhappy"},
         
        {sentence: "Oil and water ____ when mixed together.", word: "separate", 
         options: ["separate", "combine", "mix", "freeze", "I don't know"], 
         correct: "separate", 
         definition: "to divide or split something into different parts"},
         
        {sentence: "This book is ____ better than the last one.", word: "certainly", 
         options: ["probably", "certainly", "possibly", "maybe", "I don't know"], 
         correct: "certainly", 
         definition: "without any doubt."},
         
        {sentence: "My mother was ____ when I got a terrible score on the test.", word: "furious", 
         options: ["happy", "calm", "furious", "tired", "I don't know"], 
         correct: "furious", 
         definition: "very angry"},
         
        {sentence: "J.K. Rowling is the ____ of the Harry Potter series.", word: "author", 
         options: ["reader", "character", "author", "director", "I don't know"], 
         correct: "author", 
         definition: "someone who has written a book"},
         
        {sentence: "We were ____ to go out in the storm at night.", word: "terrified", 
         options: ["excited", "terrified", "bored", "brave", "I don't know"], 
         correct: "terrified", 
         definition: "very frightened"},
         
        {sentence: "No one was seriously ____ in the accident.", word: "hurt", 
         options: ["hurt", "happy", "angry", "healthy", "I don't know"], 
         correct: "hurt", 
         definition: "suffering pain or injury"},
         
        {sentence: "The dog followed its ____.", word: "master", 
         options: ["friend", "master", "doctor", "enemy", "I don't know"], 
         correct: "master", 
         definition: "the man who has control over servants, animals, or workers"},
         
        {sentence: "I was ____ happy to pass the exam for the new school.", word: "extremely", 
         options: ["extremely", "barely", "slightly", "somewhat", "I don't know"], 
         correct: "extremely", 
         definition: "more than very"},
         
        {sentence: "Compared to the US, Japan has very little ____.", word: "crime", 
         options: ["traffic", "rain", "crime", "noise", "I don't know"], 
         correct: "crime", 
         definition: "illegal activities in general."}
    ],

    6: [
        {sentence: "The family is too poor to ____ a car.", word: "afford", 
         options: ["drive", "afford", "steal", "use", "I don't know"], 
         correct: "afford", 
         definition: "to have enough money to pay for something"},
         
        {sentence: "He felt ____ about telling Mary's secret to everybody.", word: "guilty", 
         options: ["guilty", "happy", "angry", "proud", "I don't know"], 
         correct: "guilty", 
         definition: "unhappy and ashamed because you have done something wrong"},
         
        {sentence: "I feel that nothing could ____ this perfect moment.", word: "spoil", 
         options: ["fix", "improve", "spoil", "change", "I don't know"], 
         correct: "spoil", 
         definition: "to make something less good or enjoyable."},
         
        {sentence: "She never ____ him for losing her ring.", word: "forgave", 
         options: ["ignored", "blamed", "helped", "forgave", "I don't know"], 
         correct: "forgave", 
         definition: "to decide not to be angry or punish someone who has done something wrong"},
         
        {sentence: "Smoking is not ____ in the airport.", word: "allowed", 
         options: ["hated", "liked", "allowed", "safe", "I don't know"], 
         correct: "allowed", 
         definition: "to say that someone can do or have something"},
         
        {sentence: "She scored three goals and he was so ____ of her.", word: "proud", 
         options: ["jealous", "proud", "nervous", "tired", "I don't know"], 
         correct: "proud", 
         definition: "feeling pleased with something you, your family or your country has achieved"},
         
        {sentence: "As we get closer to our ____, the train gets very full.", word: "destination", 
         options: ["situation", "destination", "entrance", "property", "I don't know"], 
         correct: "destination", 
         definition: "the place that you are traveling to"},
         
        {sentence: "He disappears into the ____.", word: "crowd", 
         options: ["room", "crowd", "party", "family", "I don't know"], 
         correct: "crowd", 
         definition: "a large group of people in one place"},
         
        {sentence: "I'm trying to get my daughter to behave ____.", word: "properly", 
         options: ["badly", "quickly", "properly", "happily", "I don't know"], 
         correct: "properly", 
         definition: "correctly or in a way that is considered right"},
         
        {sentence: "She showed a ____ for garden design.", word: "talent", 
         options: ["style", "plan", "habit", "talent", "I don't know"], 
         correct: "talent", 
         definition: "a natural ability to do something well"}
    ],

    7: [
        {sentence: "Do you really think that ghosts ____?", word: "exist", 
         options: ["exist", "hide", "play", "run", "I don't know"], 
         correct: "exist", 
         definition: "to happen or to be real or alive"},
         
        {sentence: "The jury found her ____ of murder.", word: "guilty", 
         options: ["innocent", "guilty", "kind", "careless", "I don't know"], 
         correct: "guilty", 
         definition: "having done something that is a crime"},
         
        {sentence: "Are you ____ sure? I don't believe you.", word: "absolutely", 
         options: ["uncertainly", "partially", "barely", "absolutely", "I don't know"], 
         correct: "absolutely", 
         definition: "completely or totally"},
         
        {sentence: "Tom seemed sad, which was ____ for him.", word: "unusual", 
         options: ["boring", "common", "unusual", "normal", "I don't know"], 
         correct: "unusual", 
         definition: "different from what is usual or normal"},
         
        {sentence: "Doctors ____ to save the girl's life.", word: "failed", 
         options: ["tried", "succeeded", "failed", "helped", "I don't know"], 
         correct: "failed", 
         definition: "to not succeed in doing something that you try to do"},
         
        {sentence: "A lot of people suffer from ____ before going on stage.", word: "nerves", 
         options: ["excitement", "happiness", "anger", "nerves", "I don't know"], 
         correct: "nerves", 
         definition: "the feeling of being worried or a little frightened"},
         
        {sentence: "That night, the young prince slept ____ in his bed.", word: "peacefully", 
         options: ["noisily", "peacefully", "quickly", "angrily", "I don't know"], 
         correct: "peacefully", 
         definition: "quiet and calm"},
         
        {sentence: "Fire ____ quickly through the building.", word: "spread", 
         options: ["spread", "stopped", "shrunk", "calmed", "I don't know"], 
         correct: "spread", 
         definition: "to move and affect a larger area or more people"},
         
        {sentence: "My family photos are examples of my prized ____.", word: "possession", 
         options: ["style", "habit", "possession", "dream", "I don't know"], 
         correct: "possession", 
         definition: "something that you own"},
         
        {sentence: "We went to visit our family ____.", word: "grave", 
         options: ["grave", "garden", "house", "park", "I don't know"], 
         correct: "grave", 
         definition: "the place where a dead body is buried"}
    ],

    8: [
        {sentence: "I'm absolutely ____ that I left the keys here.", word: "certain", 
         options: ["certain", "unsure", "curious", "happy", "I don't know"], 
         correct: "certain", 
         definition: "completely sure"},
         
        {sentence: "Elena could see everything inside the ____ bag.", word: "transparent", 
         options: ["opaque", "transparent", "colored", "frozen", "I don't know"], 
         correct: "transparent", 
         definition: "clear and able to be seen through"},
         
        {sentence: "The students have ____ respect for Mrs. Baker.", word: "tremendous", 
         options: ["super", "small", "little", "tremendous", "I don't know"], 
         correct: "tremendous", 
         definition: "very great"},
         
        {sentence: "Do you have any more ____ to bring to the trip?", word: "luggage", 
         options: ["luggage", "passengers", "money", "papers", "I don't know"], 
         correct: "luggage", 
         definition: "the bags and cases that you carry when you are traveling"},
         
        {sentence: "The man spent a ____ on buying expensive cars.", word: "fortune", 
         options: ["salary", "penny", "fortune", "tip", "I don't know"], 
         correct: "fortune", 
         definition: "a very large amount of money"},
         
        {sentence: "The waiter at the restaurant ____ us quickly.", word: "served", 
         options: ["greeted", "welcomed", "ignored", "served", "I don't know"], 
         correct: "served", 
         definition: "to give someone food or drinks as part of a meal"},
         
        {sentence: "The dirty dog on the street looked ____ in the rain.", word: "miserable", 
         options: ["comfortable", "happy", "miserable", "careful", "I don't know"], 
         correct: "miserable", 
         definition: "very unhappy"},
         
        {sentence: "She screamed in ____ as she saw a stranger in her house.", word: "terror", 
         options: ["curiosity", "happiness", "terror", "surprise", "I don't know"], 
         correct: "terror", 
         definition: "a feeling of extreme fear"},
         
        {sentence: "You can see the ____ views of the city from the helicopter.", word: "glorious", 
         options: ["glorious", "hidden", "small", "dull", "I don't know"], 
         correct: "glorious", 
         definition: "very beautiful or impressive"},
         
        {sentence: "It cost an ____ amount of money to make that movie.", word: "enormous", 
         options: ["terrible", "small", "enormous", "quick", "I don't know"], 
         correct: "enormous", 
         definition: "very big in size, amount, or degree"}
    ],

    9: [
        {sentence: "The house was guarded by ____ dogs.", word: "fierce", 
         options: ["fierce", "gentle", "lazy", "calm", "I don't know"], 
         correct: "fierce", 
         definition: "angry, aggressive, and frightening"},
         
        {sentence: "She was always very ____.", word: "appreciative", 
         options: ["thankful", "bored", "unusual", "prideful", "I don't know"], 
         correct: "appreciative", 
         definition: "grateful for something"},
         
        {sentence: "The story had the most ____ ending.", word: "bizarre", 
         options: ["incredible", "boring", "bizarre", "simple", "I don't know"], 
         correct: "bizarre", 
         definition: "very strange"},
         
        {sentence: "There are many students here who ____ to become a doctor.", word: "aspire", 
         options: ["run", "aspire", "bribe", "attempt", "I don't know"], 
         correct: "aspire", 
         definition: "to have a strong desire to have or do something"},
         
        {sentence: "I ____ quite a lot of money from my mother.", word: "inherited", 
         options: ["stole", "found", "inherited", "earned", "I don't know"], 
         correct: "inherited", 
         definition: "to receive property, money, etc. from somebody who has died"},
         
        {sentence: "Mr. Pocket taught us how to dress on different ____.", word: "occasions", 
         options: ["incidents", "occasions", "elements", "anecdotes", "I don't know"], 
         correct: "occasions", 
         definition: "a particular time when something happens"},
         
        {sentence: "We were ____ about his decision.", word: "uneasy", 
         options: ["unconcerned", "happy", "uneasy", "excited", "I don't know"], 
         correct: "uneasy", 
         definition: "worried; not feeling relaxed or comfortable"},
         
        {sentence: "We wrote ____ cheques gloss and stole banknotes.", word: "false", 
         options: ["real", "false", "true", "valid", "I don't know"], 
         correct: "false", 
         definition: "not true; not correct"},
         
        {sentence: "I was completely ____ by his change of mood.", word: "bewildered", 
         options: ["calm", "sure", "excited", "bewildered", "I don't know"], 
         correct: "bewildered", 
         definition: "confused"},
         
        {sentence: "She did not ____ a word in the meeting.", word: "utter", 
         options: ["suggest", "shout", "utter", "ask", "I don't know"], 
         correct: "utter", 
         definition: "to say something or make a sound with your voice"}
    ]

};



let studentName, currentLevel, currentQuestion, score, timer, studentResponses;

const nameInputField = document.getElementById('student-name');
const levelSelect = document.getElementById('level-select');
const startButton = document.getElementById('start-test');
const testContainer = document.getElementById('test-container');
const questionElement = document.getElementById('question');
const imageElement = document.getElementById('question-image'); 
const optionsElement = document.getElementById('options');
const timerElement = document.getElementById('time');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const retryButton = document.getElementById('retry');

startButton.addEventListener('click', startTest);
retryButton.addEventListener('click', resetTest);

function startTest() {
    //studentName = nameInputField.value.trim();
    currentLevel = levelSelect.value;

    /*if (!studentName) {
        alert('Please enter your name');
        return;
    }*/

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

    if (question.image) {
        imageElement.src = question.image; // Set the image source
        imageElement.style.display = 'block'; // Show the image
    } else {
        imageElement.style.display = 'none'; // Hide the image if not present
    }

    const definitionElement = document.getElementById('definition');
    if (question.definition) {
        definitionElement.textContent = question.definition;
        definitionElement.className = "is-size-5";
        definitionElement.style.display = 'block';
    } else {
        definitionElement.style.display = 'none';
    }

    optionsElement.innerHTML = '';
    question.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.className = 'button is-link is-medium mr-3 mt-3';
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
