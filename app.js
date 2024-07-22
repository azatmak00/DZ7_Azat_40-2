

function generateRandom(maxLimit = 10) {
    let rand = Math.random() * maxLimit + 1;
    rand = Math.floor(rand);
    return rand;
}


function generateQuestion() {
    let num1 = generateRandom();
    let num2 = generateRandom();
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    correctAnswer = num1 * num2; // Запоминаем правильный ответ
}


function checkAnswer() {
    let userAnswer = document.getElementById('answer').value;
    if (userAnswer.trim() === '') {
        alert('Пожалуйста, введите ответ!');
        return;
    }
    userAnswer = parseInt(userAnswer);
    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = 'Правильно!';
    } else {
        document.getElementById('result').textContent = 'Неправильно. Правильный ответ: ' + correctAnswer;
    }

    generateQuestion();

    document.getElementById('answer').value = '';
}


generateQuestion();