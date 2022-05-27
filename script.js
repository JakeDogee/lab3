
function func1(){

    
    let divs = []; 
    let width = 0;

    $('div').each(function(){
        divs.push(parseInt($(this).width()))
        width += parseInt($(this).width());
    })

    alert("Сумарна ширина div: " + width)

    $('div').each(function(){
        $(this).width($(this).width() * 2);
    })

}

function func2(){

    let name = prompt('Ім\'я','');
    let middlename = prompt('По батькові','');
    let surname = prompt('Прізвище','');

    $('div.student > #name').text(name);
    $('div.student > #middlename').text(middlename);
    $('div.student > #surname').text(surname);

}

function func3(){

    let adress = prompt("Enter adress", '');
    if(adress.length > 0){

        let width = 0;
        let height = 0;
        
        width = window.document.documentElement.scrollWidth;
        height = window.document.documentElement.scrollHeight;
        
        if(confirm('бажаєте взнати розмір робочого вікно веб-сторінки?')){
            alert(width + '   ' + height);
        }
        else{
            let text = 'Width: ' + width + 'Height: ' + height;

            $('#hw').text(text);
            let hw = document.getElementById('hw');
            hw.innerHTML = text;
        }
    }

}

function all(){
    func1();
    func2();
}

let windowNULP;
let isOpen;
function func4_1(){
    windowNULP = window.open("https://lpnu.ua/", "_blank", "height=400, width=400", ', location=0, toolbar=1, scrollbars=1');
    isOpen = true;
}

function func4_2(){
    if(isOpen == true){
        windowNULP.close();
        isOpen = false;
    }

}

window.onload = all;
