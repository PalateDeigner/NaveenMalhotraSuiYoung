// 🧠🧠 LOGIC:
    // Set a variable to store the input of the search box on the header.
    // on click, search API with the string value.
    // return the ID.
    // console log to test.

// 📝DECLARE VARIABLES (GLOBAL SCOPE)
const myApp={
    apiKey: "baa233e2a8bc401a83b89ba0f32ef23c",
};

let userInput;
let searchValue;



// 📧 Ajax request for ingredients search
myApp.getInfo = function(userInput){
    console.log('get information:', userInput);

    // ajax search:
    $.ajax({
        url: 'https://api.spoonacular.com/recipes/search?apiKey=baa233e2a8bc401a83b89ba0f32ef23c',
        method: 'GET',
        dataType: 'json',
        data: {
            key: myApp.apiKey,
            format: 'json',
            ingredients: userInput
        }
    }).then(function(searchResult){
        console.log('information returned: ', searchResult);
        console.log('information for id only: ', searchResult.results.id);
        // myApp.getInfo(results.id);


    })
};

// ✨✨ FUNCTIONALITY INITIATION! ENGAGE!
myApp.init = function(){
    console.log('app started');
    myApp.getInfo();


    // retrieve user input through the search box and pass as parameter
    $('.searchBoxButton').on('submit', function (e) {
        e.preventDefault();
        userInput = $('#searchBox').val();
        console.log('userInput: ', userInput);

        myApp.getInfo(userInput);
        
        console.log(getInfo);

        // empty out the input for search once the string is collected. ✔
        // $('#searchBox').empty();

        // move from header to results section.
        // $('html, body').animate({
        //     scrollTop: $("section").offSet().top},
        //     'slow');
    });
};

$(function(){
    myApp.init();

    
});

$(document).ready(function(){
    console.log('document is ready');
})



