var playerData = {
    d1: {
        name: "Hardik Pandya",
        role: "All-rounder",
        description: "Hardik Pandya is an Indian cricketer known for his explosive batting and medium-pace bowling."
    },
    d2: {
        name: "Rohit Sharma",
        role: "Opening batsman",
        description: "Rohit Sharma is an Indian cricketer and one of the best opening batsmen in the world."
    },
    d3: {
        name: "Virat Kohli",
        role: "Captain and top-order batsman",
        description: "Virat Kohli is an Indian cricketer and one of the finest batsmen in modern-day cricket."
    },
    // Add more player details as needed
};

function playerinfo() {
    var playerDiv = document.getElementById('playerdetails');
    var selectedPlayer;

    var playerRadios = document.getElementsByName('player');
    for (var i = 0; i < playerRadios.length; i++) {
        if (playerRadios[i].checked) {
            selectedPlayer = playerRadios[i].id;
            break;
        }
    }

    if (selectedPlayer) {
        var playerDetails = playerData[selectedPlayer];
        playerDiv.innerHTML = "<p>Name: " + playerDetails.name + "</p>" +
                              "<p>Role: " + playerDetails.role + "</p>" +
                              "<p>Description: " + playerDetails.description + "</p>";
    } else {
        playerDiv.innerHTML = "";
    }
}
