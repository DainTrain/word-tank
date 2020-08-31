function addToAnki() {
    
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