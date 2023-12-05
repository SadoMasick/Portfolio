let infByUser = prompt('Введите ФИО и год рождения, пожалуйста');

function manager(text)
{
    if(text.includes('.'))
    {
        text = text.replace('.', '');
    }

    let arrayStrings = text.split(' ');
    let result = '';

    let name = arrayStrings[0];
    let sName = ' ' + arrayStrings[1].slice(0, 1) + '.';
    let fName = arrayStrings[2].slice(0, 1) + '.' + ' ';
    let old = (2023 - parseInt(arrayStrings[3])).toString();
    let oldStr = '';


    for(let i = 0; i < arrayStrings.lenght - 1; i++)
    {
        result = result + arrayStrings[i];
    }

    if(old === '01' || old === '21' || old === '31' || old === '41' || old === '51' || old === '61' || old === '71' || old === '81' || old === '91')
    {
        oldStr = ' год'
    }
    else if(old === '02' || old === '22' || old === '32' || old === '42' || old === '52' || old === '62' || old === '72' || old === '82' || old === '92' || old === '03' || old === '23' || old === '33' || old === '43' || old === '53' || old === '63' || old === '73' || old === '83' || old === '93' || old === '04' || old === '24' || old === '34' || old === '44' || old === '54' || old === '64' || old === '74' || old === '84' || old === '94')
    {
        oldStr = ' года'
    }
    else 
    {
        oldStr = ' лет'
    }
    
    return name + sName + fName + old + oldStr;
}

alert(manager(infByUser));