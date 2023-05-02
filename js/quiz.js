(function () {
    let padding = "22px",
        p1 = "30px",
        p2 = "22px";
    const questions = [
        {
            question: "2 * 5 = ?",
            choices: [2, 5, 10, 15, 20],
            correctAnswer: 2,
        },
        {
            question: "3 + 6 = ?",
            choices: [3, 6, 9, 12, 18],
            correctAnswer: 2,
        },
        {
            question: "8 * 9 = ?",
            choices: [72, 99, 108, 134, 156],
            correctAnswer: 0,
        },
        {
            question: "7 * 2 = ?",
            choices: [7, 25, 6, 14, 8],
            correctAnswer: 3,
        },
        {
            question: "9 + 7 = ?",
            choices: [21, 13, 92, 15, 16],
            correctAnswer: 4,
        },
        {
            question: "8 * 8 = ?",
            choices: [20, 30, 40, 50, 64],
            correctAnswer: 4,
        },
    ];

    let questionCounter = 0;
    let selections = [];
    const quiz = $("#quiz");

    displayNext();

    $("#next").on("click", function (e) {
        e.preventDefault();

        if (quiz.is(":animated")) {
            return false;
        }
        choose();

        if (isNaN(selections[questionCounter])) {
            alert("Please make a selection!");
        } else {
            questionCounter++;
            displayNext();
        }
    });

    $("#prev").on("click", function (e) {
        e.preventDefault();

        if (quiz.is(":animated")) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    $("#start").on("click", function (e) {
        e.preventDefault();

        if (quiz.is(":animated")) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $("#start").hide();
    });

    function createQuestionElement(index) {
        const qElement = $("<div>", {
            id: "question",
        });

        const header = $("<h2>Question " + (index + 1) + ":</h2>");
        qElement.append(header);
        header.css({ margin: `${padding} 0`, "font-size": p1 });

        const question = $("<p>").append(questions[index].question);
        qElement.append(question);
        question.css({ "font-size": p2 });

        const radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    function createRadios(index) {
        const radioList = $("<ul>");
        let item;
        let input = "";
        for (i = 0; i < questions[index].choices.length; i++) {
            item = $("<li>");
            itemp = $("<label>");
            item.css({
                "padding-top": padding,
                fontSize: p2,
                display: "flex",
                alignItems: "center",
            });
            input =
                '<input type="radio" name="answer" style="accent-color: #1d1d1f; transform: scale(1.5); margin-right: 16px" value=' +
                i +
                " />";
            itemp.append(questions[index].choices[i]);
            item.append(input, itemp);
            radioList.append(item);
        }
        return radioList;
    }

    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    function displayNext() {
        quiz.fadeOut(function () {
            $("#question").remove();

            if (questionCounter < questions.length) {
                const nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!isNaN(selections[questionCounter])) {
                    $("input[value=" + selections[questionCounter] + "]").prop("checked", true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $("#prev").show();
                } else if (questionCounter === 0) {
                    $("#prev").hide();
                    $("#next").show();
                }
            } else {
                const scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $("#next").hide();
                $("#prev").hide();
                $("#start").show();
            }
        });
    }

    function displayScore() {
        let score = $("<p>", { id: "question" });
        let numCorrect = 0;
        for (i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        score.append(`Final score: ${numCorrect} / ${questions.length}`);
        score.css({ fontSize: p1, textAlign: "center", paddingTop: padding });
        return score;
    }
})();
