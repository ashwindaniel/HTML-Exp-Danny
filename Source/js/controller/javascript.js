function triangle(flag) {
    var output = "";
    var size = prompt("Enter size", "15");
    for (var i = 1; i < size; ++i) {
        for (var j = i; j > 0; --j) {
            output += "#";
        }
        output += "<br>";
    }
    if (flag)
        document.getElementById('jstriangle').innerHTML = output;
}

function fizz(flag) {
    output = "";
    var limit = prompt("Enter limit", "20");
    for (k = 1; k <= limit; ++k) {
        var answer = "";
        if (k % 3 === 0)
            answer += "Fizz";
        if (k % 5 === 0)
            answer += "Buzz";
        output += (answer || k);
        output += "<br>";
    }
    if (flag)
        document.getElementById('jsfizz').innerHTML = output;
}

function chess(flag) {
    output = "";
    var size = prompt("Enter size of board", "15");
    for (x = 0; x < size; ++x) {
        for (y = 0; y < size; ++y) {
            if ((x + y) % 2 === 0) {
                output += "&#9608;";
                // output += "&#9632;";

            } else {
                output += "&nbsp;&nbsp;&nbsp;";
                // output += "&#9634;";
            }
        }
        output += "<br>";
    }
    if (flag)
        document.getElementById('jschess').innerHTML = output;
}