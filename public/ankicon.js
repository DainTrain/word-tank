function addToAnki() {
    let wordContent = "";
    for (j = 0; j < selectsArray.length; j++) {
        if (selectsArray[j].value == "on") {
            wordContent += definitionsArray[j] + "; ";
        }
    }
    let word = $("#wordInput")[0].value;
    let wordObj = {
        "action": "addNote",
        "version": 6,
        "params" : {
            "note" : {
                "deckName" : "testdeck",
                "modelName" : "Basic (and reversed card)",
                "fields" : {
                    "Front": word,
                    "Back": wordContent
                },
                "options" : {
                    "allowDuplicate": false,
                    "duplicateScope": "deck"
                }
            }
        }
    };
    $.ajax({
        url: "http://127.0.0.1:8765",
        method: "POST",
        data: JSON.stringify(wordObj),
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }
    });
}

function getDecks() {
    let action = "deckNames";
    let version = 6;
    $.ajax({
        url: "http://127.0.0.1:8765",
        method: "POST",
        data: JSON.stringify({action, version}),
        success: function(result) {
            console.log(result);
        },
        error: function(response) {
            console.log(response);
        }
    });
}