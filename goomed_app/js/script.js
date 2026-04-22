let questions = [];
let userAnswers = [];

// selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = document.querySelector("footer .next_btn");
const prev_btn = document.querySelector("footer .prev_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
const fileInput = document.getElementById("fileInput");

let timeValue = 120;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// wczytywanie pliku txt z pytaniami
if (fileInput) {
    fileInput.addEventListener("change", function () {
        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            parseQuestions(text);
        };

        reader.readAsText(file, "UTF-8");
    });
}

// start
start_btn.onclick = () => {
    if (questions.length === 0) {
        alert("Najpierw wybierz plik TXT z pytaniami.");
        return;
    }
    info_box.classList.add("activeInfo");
};

// exit
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
};

// continue
continue_btn.onclick = () => {
    if (questions.length === 0) {
        alert("Nie załadowano pytań.");
        return;
    }

    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");

    timeValue = 120;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;

    userAnswers = questions.map(() => ({
        selected: null,
        isCorrect: false,
        answered: false,
        timedOut: false
    }));

    showQuetions(que_count);
    queCounter(que_numb);
    updateNavButtons();

    clearInterval(counter);
    clearInterval(counterLine);

    startTimer(timeValue);
    startTimerLine(widthValue);

    timeText.textContent = "Czas";
    next_btn.classList.remove("show");
};

// parser pliku txt
function parseQuestions(text) {
    questions = [];

    const lines = text
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line.length > 0);

    let i = 0;
    let index = 1;

    while (i < lines.length) {
        const questionLine = lines[i++];
        const optionsLine = lines[i++];
        const answerLine = lines[i++];

        if (!questionLine || !optionsLine || !answerLine) {
            break;
        }

        const questionText = questionLine
            .replace(/^\d+\./, "")
            .replace(/;$/, "")
            .trim();

        const options = optionsLine
            .replace(/;$/, "")
            .split(",")
            .map(option => option.trim())
            .filter(option => option.length > 0);

        const answer = answerLine
            .replace(/;$/, "")
            .trim();

        if (questionText && options.length > 0 && answer) {
            questions.push({
                numb: index,
                question: questionText,
                answer: answer,
                options: options
            });
            index++;
        }
    }

    if (questions.length > 0) {
        alert("Załadowano " + questions.length + " pytań.");
        console.log("Załadowano pytania:", questions);
    } else {
        alert("Nie udało się wczytać pytań z pliku TXT.");
        console.log("Niepoprawny format pliku.");
    }
}

// restart
restart_quiz.onclick = () => {
    if (questions.length === 0) {
        alert("Najpierw wybierz plik TXT z pytaniami.");
        return;
    }

    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");

    timeValue = 120;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;

    userAnswers = questions.map(() => ({
        selected: null,
        isCorrect: false,
        answered: false,
        timedOut: false
    }));

    showQuetions(que_count);
    queCounter(que_numb);
    updateNavButtons();

    clearInterval(counter);
    clearInterval(counterLine);

    startTimer(timeValue);
    startTimerLine(widthValue);

    timeText.textContent = "Czas";
    next_btn.classList.remove("show");
};

// quit
quit_quiz.onclick = () => {
    window.location.reload();
};

// next
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;

        showQuetions(que_count);
        queCounter(que_numb);
        updateNavButtons();
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
};

// previous
if (prev_btn) {
    prev_btn.onclick = () => {
        if (que_count > 0) {
            que_count--;
            que_numb--;

            showQuetions(que_count);
            queCounter(que_numb);
            updateNavButtons();
        }
    };
}

function updateNavButtons() {
    if (prev_btn) {
        prev_btn.style.display = que_count === 0 ? "none" : "inline-block";
    }

    const currentState = userAnswers[que_count];

    if (currentState && currentState.answered) {
        next_btn.classList.add("show");
        clearInterval(counter);
        clearInterval(counterLine);
        timeText.textContent = "Podgląd";
    } else {
        next_btn.classList.remove("show");
        clearInterval(counter);
        clearInterval(counterLine);
        timeText.textContent = "Czas";
        startTimer(timeValue);
        startTimerLine(0);
    }
}

// render pytania
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    const currentQuestion = questions[index];
    const currentState = userAnswers[index];

    let que_tag = '<span>' + currentQuestion.numb + ". " + currentQuestion.question + "</span>";
    let option_tag = currentQuestion.options
        .map(option => '<div class="option"><span>' + option + "</span></div>")
        .join("");

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const optionElements = option_list.querySelectorAll(".option");

    // jeśli pytanie było już odpowiedziane, pokazujemy tylko podgląd
    if (currentState && currentState.answered) {
        renderAnsweredState(optionElements, currentQuestion, currentState);
    } else {
        for (let i = 0; i < optionElements.length; i++) {
            optionElements[i].setAttribute("onclick", "optionSelected(this)");
        }
    }
}

function renderAnsweredState(optionElements, currentQuestion, currentState) {
    const correctAnswer = currentQuestion.answer;

    optionElements.forEach(optionEl => {
        const optionText = optionEl.textContent.trim();

        if (optionText === correctAnswer) {
            optionEl.classList.add("correct");
            optionEl.insertAdjacentHTML("beforeend", tickIconTag);
        }

        if (currentState.selected && optionText === currentState.selected && optionText !== correctAnswer) {
            optionEl.classList.add("incorrect");
            optionEl.insertAdjacentHTML("beforeend", crossIconTag);
        }

        optionEl.classList.add("disabled");
    });
}

// wybór odpowiedzi
function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);

    let userAns = answer.textContent.trim();
    let correcAns = questions[que_count].answer.trim();
    const allOptions = option_list.children.length;

    // zabezpieczenie przed ponownym klikaniem
    if (userAnswers[que_count].answered) {
        return;
    }

    userAnswers[que_count].selected = userAns;
    userAnswers[que_count].answered = true;
    userAnswers[que_count].timedOut = false;

    if (userAns === correcAns) {
        userScore += 1;
        userAnswers[que_count].isCorrect = true;

        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
    } else {
        userAnswers[que_count].isCorrect = false;

        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent.trim() === correcAns) {
                option_list.children[i].classList.add("correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }

    next_btn.classList.add("show");
    timeText.textContent = "Podgląd";
}

// wynik
function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");

    const scoreText = result_box.querySelector(".score_text");

    if (userScore > 3) {
        let scoreTag = '<span>Gratulacje! 🎉, Dostałeś <p>' + userScore + '</p> z <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 1) {
        let scoreTag = '<span>Super 😎, Dostałeś <p>' + userScore + '</p> z <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<span>Niestety 😐, Dostałeś tylko <p>' + userScore + '</p> z <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

// timer
function startTimer(time) {
    clearInterval(counter);

    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;

        if (time < 9 && time >= 0) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }

        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Koniec czasu";

            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer.trim();

            userAnswers[que_count].selected = null;
            userAnswers[que_count].answered = true;
            userAnswers[que_count].isCorrect = false;
            userAnswers[que_count].timedOut = true;

            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent.trim() === correcAns) {
                    option_list.children[i].classList.add("correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                }
            }

            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }

            next_btn.classList.add("show");
        }
    }
}

// timer line
function startTimerLine(time) {
    clearInterval(counterLine);

    counterLine = setInterval(timer, 29);

    function timer() {
        time += 1;
        time_line.style.width = time + "px";

        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

// licznik pytan
function queCounter(index) {
    let totalQueCounTag = "<span><p>" + index + "</p> z <p>" + questions.length + "</p> pytań</span>";
    bottom_ques_counter.innerHTML = totalQueCounTag;
}