alert("Здравствуйте, вас приветствует онлайн калькулятор.");

const firstNum = parseInt(prompt("Введите первое число"));
const secondNum = parseInt(prompt("Введите второе число"));
const Char = prompt("Введите действие, которое вы хотите выполнить, с выше упомянутыми числами");

function plus(num1, num2)
{
    result(num1 + num2);
}
function minus(num1, num2)
{
    result(num1 - num2);
}
function multiplication(num1, num2)
{
    result(num1 * num2);
}
function division(num1, num2)
{
    result(num1 / num2);
}
function result(res)
{
    alert(`Результат ваших числовых махинаций равен ${res}`);
}

function manager(first, second, char)
{
    if(Char == "+")
    {
        plus(first, second);
    }
    else if(Char =="-")
    {
        minus(first, second);
    }
    else if(Char == "*")
    {
        multiplication(first, second);
    }
    else if(Char == "/")
    {
        division(first, second);
    }
    else
    {
        alert("перезагрузите страницу и попробуйте ещё раз");
    }
}
document.querySelector("#h1").textContent = "Hello";
manager(firstNum, secondNum);

