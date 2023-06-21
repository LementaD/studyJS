//Arrow to Functions

//****************** Исходник 1 ********************************
{
    (temprCel) => { (temprCel * 9 / 5) + 32
        return temprFar
    }
}
//**************************************************************

{
    function f (temprCel) { 
        return (temprCel * 9 / 5) + 32
    }
}

//****************** Исходник 2 ***********************************************

{
    () => {
        let str = prompt ("Введіть прізвище").trim ()
        let str2 = prompt ("Введіть ім'я").trim ()
        let str3 = prompt ("Введіть по батькові").trim ()
        SurName = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        Name = str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase()
        FatherName = str3.charAt(0).toUpperCase() + str3.slice(1).toLowerCase()
        FullName = SurName + " " + Name + " " + FatherName   
    return {Name, SurName, FatherName, FullName}
    }
}

//*****************************************************************************

{
    function f () {
        let str = prompt ("Введіть прізвище").trim ()
        let str2 = prompt ("Введіть ім'я").trim ()
        let str3 = prompt ("Введіть по батькові").trim ()
        SurName = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
        Name = str2.charAt(0).toUpperCase() + str2.slice(1).toLowerCase()
        FatherName = str3.charAt(0).toUpperCase() + str3.slice(1).toLowerCase()
        FullName = SurName + " " + Name + " " + FatherName   
    return {Name, SurName, FatherName, FullName}
    }
}

//****************** Исходник 3 *************

{
    const getInputValue = (promptText, defaultValue) => prompt(promptText) || defaultValue;
    let age = getInputValue("Ваш вік?", "");
    let year = getInputValue("Який наразі рік?", "");
    let year_of_birth = year - age || alert("Помилка");
    alert(year_of_birth);
    }

//*******************************************

{
    const getInputValue = function f (promptText, defaultValue) {prompt(promptText)} || defaultValue;
    let age = getInputValue("Ваш вік?", "");
    let year = getInputValue("Який наразі рік?", "");
    let year_of_birth = year - age || alert("Помилка");
    alert(year_of_birth);
}