var app = angular.module('DemoModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "../../pages/intro.html"
            })
            .when('/intro', {
                templateUrl: "../../pages/intro.html"
            })
            .when('/javascript', {
                templateUrl: '../../pages/javascript.html'
            })
            .when('/modal', {
                templateUrl: '../../pages/modal.html'
            })
            .when('/about', {
                templateUrl: '../../pages/about.html'
            })
            .when('/forms', {
                templateUrl: '../../pages/forms.html'
            })
            .when('/history', {
                templateUrl: '../../pages/history.html'
            })
            .when('/historyFwd', {
                templateUrl: '../../pages/historyFwd.html'
            })
            .when('/touch', {
                templateUrl: '../../pages/touch.html'
            })
            .when('/location', {
                templateUrl: '../../pages/location.html',
                controller: 'LocationCtrl'
            })
            .when('/video', {
                templateUrl: '../../pages/video.html'
            })
            .when('/audio', {
                templateUrl: '../../pages/audio.html'
            })
            .when('/dragdropedit', {
                templateUrl: '../../pages/dragdropedit.html'
            })
            .otherwise({
                templateUrl: '../../pages/default.html'
            });
    })
    .controller('DemoCtrl', function ($scope) {
        $scope.message = "Target scope";
    });
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
var x = 10;
function onsub() {
    var obj = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        passwordcopy: document.getElementById("passwordcopy").value,
        telephone: document.getElementById("tel").value,
        descripttion: document.getElementById("radioButton").value,
        satisfied: document.getElementById("check").value,
        recommend: document.getElementById("datalist").value,
        comments: document.getElementById("comment").value
    };
    console.log(obj);
}
app.controller('LocationCtrl', function ($scope) {
    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.zoom = 15;
    $scope.dataloaded = false;
    $scope.map = null;
    $scope.renderMap = function () {
        $scope.dataloaded = true;
        if (navigator.geolocation) {
            $scope.position = navigator.geolocation.getCurrentPosition(storeLocation);
            console.log("inside map");
            // document.getElementById("map");
        } else {
            alert("Your browser doesn't supports it!");
        }
    };

    function storeLocation(position) {
        $scope.latitude = position.coords.latitude;
        $scope.longitude = position.coords.longitude;
        $scope.reloadMap();
        // console.log("inside store location");
    }
    $scope.reloadMap = function () {
        $scope.map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng($scope.latitude, $scope.longitude),
            zoom: $scope.zoom,
            mapTypeId: google.maps.MapTypeId.HYBRID
        });
        console.log($scope.map.center);
    };
});
function historyBack() {
    window.history.back();
}

function historyFwd() {
    window.history.forward();
}

function historyGo(n) {
    window.history.go(-n);
}
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
// $(document).ready(function () {
//     $('[data-toggle="tooltip"]').tooltip();
// });
function touching() {
    var el = document.body;
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchleave", handleEnd, false);
    el.addEventListener("touchmove", handleMove, false);
    log("initialized.");
}
var ongoingTouches = [];

function handleStart(evt) {


    //  log("touchstart.");
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
    var offset = findPos(el);


    for (var i = 0; i < touches.length; i++) {
        if (touches[i].clientX - offset.x > 0 && touches[i].clientX - offset.x < parseFloat(el.width) && touches[i].clientY - offset.y > 0 && touches[i].clientY - offset.y < parseFloat(el.height)) {
            evt.preventDefault();
            log("touchstart:" + i + "...");
            ongoingTouches.push(copyTouch(touches[i]));
            var color = colorForTouch(touches[i]);
            ctx.beginPath();
            ctx.arc(touches[i].clientX - offset.x, touches[i].clientY - offset.y, 4, 0, 2 * Math.PI, false); // a circle at the start
            ctx.fillStyle = color;
            ctx.fill();
            log("touchstart:" + i + ".");
        }
    }
}

function handleMove(evt) {

    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
    var offset = findPos(el);

    for (var i = 0; i < touches.length; i++) {
        if (touches[i].clientX - offset.x > 0 && touches[i].clientX - offset.x < parseFloat(el.width) && touches[i].clientY - offset.y > 0 && touches[i].clientY - offset.y < parseFloat(el.height)) {
            evt.preventDefault();
            var color = colorForTouch(touches[i]);
            var idx = ongoingTouchIndexById(touches[i].identifier);

            if (idx >= 0) {
                log("continuing touch " + idx);
                ctx.beginPath();
                log("ctx.moveTo(" + ongoingTouches[idx].clientX + ", " + ongoingTouches[idx].clientY + ");");
                ctx.moveTo(ongoingTouches[idx].clientX - offset.x, ongoingTouches[idx].clientY - offset.y);
                log("ctx.lineTo(" + touches[i].clientX + ", " + touches[i].clientY + ");");
                ctx.lineTo(touches[i].clientX - offset.x, touches[i].clientY - offset.y);
                ctx.lineWidth = 4;
                ctx.strokeStyle = color;
                ctx.stroke();

                ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // swap in the new touch record
                log(".");
            } else {
                log("can't figure out which touch to continue");
            }
        }
    }
}

function handleEnd(evt) {

    //  log("touchend/touchleave.");
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
    var offset = findPos(el);

    for (var i = 0; i < touches.length; i++) {
        if (touches[i].clientX - offset.x > 0 && touches[i].clientX - offset.x < parseFloat(el.width) && touches[i].clientY - offset.y > 0 && touches[i].clientY - offset.y < parseFloat(el.height)) {
            evt.preventDefault();
            var color = colorForTouch(touches[i]);
            var idx = ongoingTouchIndexById(touches[i].identifier);

            if (idx >= 0) {
                ctx.lineWidth = 4;
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(ongoingTouches[idx].clientX - offset.x, ongoingTouches[idx].clientY - offset.y);
                ctx.lineTo(touches[i].clientX - offset.x, touches[i].clientY - offset.y);
                ctx.fillRect(touches[i].clientX - 4 - offset.x, touches[i].clientY - 4 - offset.y, 8, 8); // and a square at the end
                ongoingTouches.splice(i, 1); // remove it; we're done
            } else {
                log("can't figure out which touch to end");
            }
        }
    }
}

function handleCancel(evt) {
    evt.preventDefault();
    log("touchcancel.");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        ongoingTouches.splice(i, 1); // remove it; we're done
    }
}

function colorForTouch(touch) {
    var r = touch.identifier % 16;
    var g = Math.floor(touch.identifier / 3) % 16;
    var b = Math.floor(touch.identifier / 7) % 16;
    r = r.toString(16); // make it a hex digit
    g = g.toString(16); // make it a hex digit
    b = b.toString(16); // make it a hex digit
    var color = "#" + r + g + b;
    log("color for touch with identifier " + touch.identifier + " = " + color);
    return color;
}

function copyTouch(touch) {
    return {
        identifier: touch.identifier,
        clientX: touch.clientX,
        clientY: touch.clientY
    };
}

function ongoingTouchIndexById(idToFind) {
    for (var i = 0; i < ongoingTouches.length; i++) {
        var id = ongoingTouches[i].identifier;

        if (id == idToFind) {
            return i;
        }
    }
    return -1; // not found
}

function log(msg) {
    var p = document.getElementById('log');
    p.innerHTML = msg + "\n" + p.innerHTML;
}

function findPos(obj) {
    var curleft = 0,
        curtop = 0;

    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj == obj.offsetParent);

        return {
            x: curleft - document.body.scrollLeft,
            y: curtop - document.body.scrollTop
        };
    }
}