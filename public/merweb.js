let DICT_API_TOKEN = "";
let THES_API_TOKEN = "";
let dictionaryUrl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
let thesaurusUrl = "";

function fetchDefinition() {
    console.log('fetc');
    let word = document.getElementById("wordInput").value;
    $.ajax({
        url: dictionaryUrl + word + "?key=" + DICT_API_TOKEN,
        success: function(result) {
            console.log(result);
        }
    });
}
