//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [0];

function question(q, a1, a2, aMax) {
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(q + a1 + a2 + '-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(aMax, event);
        }
    } while (!ok);
    var arr = [a1, a2, event];
    return arr;
}


//Выводим первый вопрос

answers[0] = question(works.a00, works.a1, works.a2, works.a0);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers[1] = question(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answers[2] = question(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answers[2] = question(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers[1] = question(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
                answers[2] = question(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2: // Второе действие
                answers[2] = question(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
var step = prompt('Спасибо за игру' + '\n' + 'Введите хода шага, чьи варианты и ваш ответ вы хотите просмотреть');
alert('Первый вариант: ' + answers[step - 1][0] +
    'Второй вариант: ' + answers[step - 1][1] +
    'Ваш выбор: ' + answers[step - 1][2]);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

