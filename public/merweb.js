let DICT_API_TOKEN = "";
let THES_API_TOKEN = "";
let dictionaryUrl = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
let thesaurusUrl = "";

let selectsArray = [];
let definitionsArray = [];

$.ajax({
    url: "http://localhost:8766/apikeys",
    method: "GET",
    success: function(result) {
        let apiKeys = JSON.parse(result);
        DICT_API_TOKEN = apiKeys.dictionaryApiToken;
    }
})

function fetchDefinition() {
    let word = document.getElementById("wordInput").value;
    $.ajax({
        url: dictionaryUrl + word + "?key=" + DICT_API_TOKEN,
        success: function(result) {
            console.log(result);

            let definitionsTable = document.getElementById("definitionsTable");
            for (i = 0; i < result.length; i++) {
                let tr = document.createElement("tr");
                let selectTd = document.createElement("td");
                let select = document.createElement("input");
                select.type = "checkbox";
                select.value = "off";
                select.onclick = function() {
                    this.value = "on";
                }
                select.setAttribute("id", "select" + i);
                select.setAttribute("style", "text-align: center; vertical-align: middle");
                selectTd.appendChild(select);

                selectsArray[i] = select;
                definitionsArray[i] = result[i].shortdef;

                let definition = document.createElement("td");
                definition.innerHTML = result[i].shortdef;
                definition.setAttribute("id", "definition" + i);
                tr.appendChild(select);
                tr.appendChild(definition);

                definitionsTable.appendChild(tr);
                
            }
        },
        error: function(result) {
            console.log(result);
        }
    });
}
