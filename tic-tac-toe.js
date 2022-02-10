//Author: Tobin deKorne
//Date: 2/10/18
import { getQuestions, getAnswers } from './round1/questions.js';
const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let currentPlayer;

const setupGame = () => {
    const game = document.createElement('div');
    $('.container').append(game); // Add the game board to the container
    $(game).addClass('game');
    addGameStatus();
    // addGameButtons();
    addRoundButtons(1);
    addResetButton();

    $('.choice').click((e) => {
        console.log(e);
        choiceHandler(e.currentTarget);
    });
};

const addGameStatus = () => {
    const gameStatus = document.createElement('div'); // Create a div to hold status text
    $(gameStatus).addClass('game-status');
    const playerTurn = document.createElement('h1');
    playerTurn.append(
        document.createTextNode(`It's player ${currentPlayer}'s turn!`)
    );
    $(playerTurn).addClass('game-status-text text-center');
    gameStatus.append(playerTurn);
    $('.game').append(gameStatus); // add to the container on the html page
};

const addGameButtons = () => {
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');
    $(row1).addClass('row row1');
    $(row2).addClass('row row2');
    $(row3).addClass('row row3');
    $('.game').append(row1, row2, row3); // add to the container on the html page

    //this next block of code generates the 12 buttons from the buttons array
    buttons.forEach(function (btn) {
        const newDiv = document.createElement('div'); //create a div to hold the button
        const newBtn = document.createElement('button'); //create the button itself
        $(newBtn).attr('id', btn); //add a numbered id for reference when we need to refer to a particular button
        $(newBtn).addClass('btn btn-primary btn-lg col-11 choice'); //add Bootstrap classes to the buttons for style
        $(newDiv).addClass('col-4'); //add some Bootstrap classes to the container for layout purposes
        newBtn.append(document.createTextNode(btn)); //add the button text to the button
        newDiv.append(newBtn); //add the button to the div container
        const row = Math.ceil(btn / 3); // Find the appropriate row for this button

        // Add the button to the appropriate row
        if (row === 1) {
            row1.append(newDiv);
        } else if (row === 2) {
            row2.append(newDiv);
        } else if (row === 3) {
            row3.append(newDiv);
        }
    });
};

const addRoundButtons = (roundNumber) => {
    const questions = getQuestions(roundNumber);
    const answers = getAnswers(roundNumber);
    // console.log(questions);
    // console.log(answers);
    // questions.forEach((question) => {
    //     const p = document.createElement('p');
    //     p.innerHTML = question;
    //     $('.container').append(p);
    // });
    // answers.forEach((answer) => {
    //     const p = document.createElement('p');
    //     p.innerHTML = answer;
    //     $('.container').append(p);
    // });
    const row1 = document.createElement('div');
    const row2 = document.createElement('div');
    const row3 = document.createElement('div');
    $(row1).addClass('row row1');
    $(row2).addClass('row row2');
    $(row3).addClass('row row3');
    $('.game').append(row1, row2, row3); // add to the container on the html page

    //this next block of code generates the 12 buttons from the buttons array
    buttons.forEach(function (btn) {
        const newDiv = document.createElement('div'); //create a div to hold the button
        const newBtn = document.createElement('button'); //create the button itself
        $(newBtn).attr('id', btn); //add a numbered id for reference when we need to refer to a particular button
        $(newBtn).addClass('btn btn-primary btn-lg col-11 choice'); //add Bootstrap classes to the buttons for style
        $(newDiv).addClass('col-4'); //add some Bootstrap classes to the container for layout purposes
        newBtn.append(document.createTextNode(btn)); //add the button text to the button
        newDiv.append(newBtn); //add the button to the div container
        const row = Math.ceil(btn / 3); // Find the appropriate row for this button

        // Add the button to the appropriate row
        if (row === 1) {
            row1.append(newDiv);
        } else if (row === 2) {
            row2.append(newDiv);
        } else if (row === 3) {
            row3.append(newDiv);
        }
    });
};

const addResetButton = () => {
    const restartDiv = document.createElement('div');
    const restartButton = document.createElement('button');
    $(restartButton)
        .append(document.createTextNode('Replay'))
        .addClass('btn btn-primary btn-lg col-11');
    $(restartDiv).append(restartButton).addClass('restart').hide();
    $('.game').append(restartDiv).hide(); // Hide the game until a start player has been chosen
    $('.restart').click(() => location.reload());
};

const askToStart = () => {
    const startDiv = document.createElement('div');
    const row = document.createElement('div');
    $(row).addClass('row');
    const xDiv = document.createElement('div');
    const oDiv = document.createElement('div');
    const startTitle = document.createElement('h1');
    startTitle.append(document.createTextNode('Who will start the game?'));
    startDiv.append(startTitle);
    $(startDiv).addClass('text-center who-starts');
    const xStarts = document.createElement('button');
    const oStarts = document.createElement('button');
    xStarts.append(document.createTextNode('X'));
    oStarts.append(document.createTextNode('O'));
    $(xStarts).addClass('btn btn-primary btn-lg col-11 start'); //add Bootstrap classes to the buttons for style
    $(oStarts).addClass('btn btn-primary btn-lg col-11 start'); //add Bootstrap classes to the buttons for style
    $(xDiv).addClass('col-6'); //add some Bootstrap classes to the container for layout purposes
    $(oDiv).addClass('col-6'); //add some Bootstrap classes to the container for layout purposes
    xDiv.append(xStarts);
    oDiv.append(oStarts);
    $(row).append(xDiv);
    $(row).append(oDiv);
    $(startDiv).append(row);
    $('.container').append(startDiv); // add to the container on the html page

    $(xStarts).click(() => {
        currentPlayer = 'X';
        startGame();
    });
    $(oStarts).click(() => {
        currentPlayer = 'O';
        startGame();
    });
};

const startGame = () => {
    $('.who-starts').hide();
    $('.game').show();
    $('.game-status-text').text(`It's team ${currentPlayer}'s turn!`);
};

const choiceHandler = (button) => {
    console.log('running choice handler');
    const id = $(button).attr('id');
    buttons.forEach((btn) => {
        if ($(`#${btn}`).attr('id') !== id) {
            $(`#${btn}`).hide();
        }
    });
    $(button).parent().removeClass('col-4');
    $(button).parent().addClass('w-100');
    $(button).parent().addClass('fill');
    $(button).parent().parent().addClass('fill');

    $(button)
        .removeClass('btn-primary')
        .addClass('question')
        .removeClass('choice'); //change color
    const question = document.createElement('img');
    $(question).attr(
        'src',
        `./images/question${Number($(button).attr('id'))}.PNG`
    );
    $(question).addClass('question-image');
    $(button).html(question);

    $('.question').click((e) => {
        console.log(e.target);
        questionHandler(e.currentTarget);
    });
};

const questionHandler = (button) => {
    console.log(button);
    console.log($(button).attr('id'));
    $(button)
        .removeClass('btn-danger')
        .addClass('answer')
        .removeClass('question'); //change color
    const answer = document.createElement('img');
    $(answer).attr('src', `./images/answer${Number($(button).attr('id'))}.PNG`);
    $(answer).addClass('answer-image');
    $(button).html(answer);

    $('.answer').click((e) => {
        console.log(e.target);
        answerHandler(e.currentTarget);
    });
};

const answerHandler = (button) => {
    $(button)
        .addClass('btn-warning')
        .addClass('givePoints')
        .removeClass('answer'); //change color
    $(button).text(currentPlayer); //set to blank by default
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    $('.game-status-text').text(`It's team ${currentPlayer}'s turn!`);
    $(button).prop('disabled', true);
    buttons.forEach((btn) => {
        $(`#${btn}`).show();
    });
    $(button).parent().removeClass('w-100');
    $(button).parent().addClass('col-4');
    $(button).parent().removeClass('fill');
    $(button).parent().parent().removeClass('fill');
    checkWin();
};

const checkWin = () => {
    const one = $('#1');
    const two = $('#2');
    const three = $('#3');
    const four = $('#4');
    const five = $('#5');
    const six = $('#6');
    const seven = $('#7');
    const eight = $('#8');
    const nine = $('#9');

    winningCombos = [
        [one, two, three],
        [one, four, seven],
        [one, five, nine],
        [three, six, nine],
        [three, five, seven],
        [four, five, six],
        [seven, eight, nine],
        [two, five, eight],
    ];

    winningCombos.forEach((combo) => {
        const first = combo[0].text();
        const second = combo[1].text();
        const third = combo[2].text();
        if (first === second && second === third) setGameWon(combo);
    });

    checkTie();
};

const checkTie = () => {
    const choices = $('.choice');
    if (choices.length === 0) {
        setGameTie();
    }
};

const setGameWon = (winner) => {
    winner.forEach((cell) => {
        $(cell).removeClass('btn-warning');
        $(cell).addClass('btn-success');
    });
    $('button').prop('disabled', true);
    $('.game-status-text').text(`Team ${winner[0].text()} won this round!`);
    $('.game-status-text').addClass(`badge badge-success even-larger-badge`);
    $('.restart .btn').prop('disabled', false);
    $('.restart').show();
};

const setGameTie = () => {
    $('button').prop('disabled', true);
    $('.game-status-text').text(`Tie game! You're equally matched!`);
    $('.game-status-text').addClass(`badge badge-success even-larger-badge`);
    $('.restart .btn').prop('disabled', false);
    $('.restart').show();
};

$(document).ready(() => {
    askToStart();
    setupGame();
});

(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    document.getElementsByTagName('head')[0].appendChild(script);
})();
