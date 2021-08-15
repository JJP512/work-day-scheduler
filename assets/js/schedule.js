var tasks = {};
var newTasks = {
    nine: [],
    ten: [],
    eleven: [],
    twelve: [],
    one: [],
    two: [],
    three: [],
    four: [],
    five: []
  };

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
      tasks = {
        nine: ["test"],
        ten: [],
        eleven: [],
        twelve: [],
        one: [],
        two: [],
        three: [],
        four: [],
        five: []
      };
    }
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
        displayTasks(arr, list);
      });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.reload();
};

var displayTasks = function(task, list) {
    console.log(task);
    console.log(list);

    document.getElementById("currentDay")
    .innerHTML = moment().format("dddd, MMMM Do YYYY");

    time = parseInt(moment().format("H"));
    

    switch (list) {
        case "nine":
            $("#nine").append(task);

            if (time < 9) {
                document.getElementById("nine")
                .classList.add("future");
            } else if (time === 9) {
                document.getElementById("nine")
                .classList.remove("future");

                document.getElementById("nine")
                .classList.add("present");
            } else {
       
                document.getElementById("nine")
                .classList.remove("present");

                document.getElementById("nine")
                .classList.add("past");
            }

            break;
        case "ten":
            $("#ten").append(task);

            if (time < 10) {
                document.getElementById("ten")
                .classList.add("future");
            } else if (time === 10) {
                document.getElementById("ten")
                .classList.remove("future");

                document.getElementById("ten")
                .classList.add("present");
            } else {
                document.getElementById("ten")
                .classList.remove("present");

                document.getElementById("ten")
                .classList.add("past");
            }

            break;
        case "eleven":
            $("#eleven").append(task);

            if (time < 11) {
                document.getElementById("eleven")
                .classList.add("future");
            } else if (time === 11) {
                document.getElementById("eleven")
                .classList.remove("future");

                document.getElementById("eleven")
                .classList.add("present");
            } else {
                document.getElementById("eleven")
                .classList.remove("present");

                document.getElementById("eleven")
                .classList.add("past");
            }

            break;
        case "twelve":
            $("#twelve").append(task);

            if (time < 12) {
                document.getElementById("twelve")
                .classList.add("future");
            } else if (time === 12) {
                document.getElementById("twelve")
                .classList.remove("future");

                document.getElementById("twelve")
                .classList.add("present");
            } else {
                document.getElementById("twelve")
                .classList.remove("present");

                document.getElementById("twelve")
                .classList.add("past");
            }

            break;
        case "one":
            $("#one").append(task);

            if (time < 13) {
                document.getElementById("one")
                .classList.add("future");
            } else if (time === 13) {
                document.getElementById("one")
                .classList.remove("future");

                document.getElementById("one")
                .classList.add("present");
            } else {
                document.getElementById("one")
                .classList.remove("present");

                document.getElementById("one")
                .classList.add("past");
            }

            break;
        case "two":
            $("#two").append(task);

            if (time < 14) {
                document.getElementById("two")
                .classList.add("future");
            } else if (time === 14) {
                document.getElementById("two")
                .classList.remove("future");

                document.getElementById("two")
                .classList.add("present");
            } else {
                document.getElementById("two")
                .classList.remove("present");

                document.getElementById("two")
                .classList.add("past");
            }

            break;
        case "three":
            $("#three").append(task);

            if (time < 15) {
                document.getElementById("three")
                .classList.add("future");
            } else if (time === 15) {
                document.getElementById("three")
                .classList.remove("future");

                document.getElementById("three")
                .classList.add("present");
            } else {
                document.getElementById("three")
                .classList.remove("present");

                document.getElementById("three")
                .classList.add("past");
            }

            break;
        case "four":
            $("#four").append(task);

            if (time < 16) {
                document.getElementById("four")
                .classList.add("future");
            } else if (time === 16) {
                document.getElementById("four")
                .classList.remove("future");

                document.getElementById("four")
                .classList.add("present");
            } else {
                document.getElementById("four")
                .classList.remove("present");

                document.getElementById("four")
                .classList.add("past");
            }

            break;
        case "five":
            $("#five").append(task);

            if (time < 17) {
                document.getElementById("five")
                .classList.add("future");
            } else if (time === 17) {
                document.getElementById("five")
                .classList.remove("future");

                document.getElementById("five")
                .classList.add("present");
            } else {
                document.getElementById("five")
                .classList.remove("present");

                document.getElementById("five")
                .classList.add("past");
            }

            break;
    }
};


var updateTasks = function (task, timeSlot) {
    switch (timeSlot) {
        case "nine":
            var newTask = $("#nine").val();
            if (newTask !== task[0]) {
                newTasks.nine.push(newTask);
            } else {
                newTasks.nine.push(task[0]);
            }
            break;
        case "ten":
            var newTask = $("#ten").val();
            if (newTask !== task[0]) {
                newTasks.ten.push(newTask);
            } else {
                newTasks.ten.push(task[0]);
            }
            break;
        case "eleven":
            var newTask = $("#eleven").val();
            if (newTask !== task[0]) {
                newTasks.eleven.push(newTask);
            } else {
                newTasks.eleven.push(task[0]);
            }
            break;
        case "twelve":
            var newTask = $("#twelve").val();
            if (newTask !== task[0]) {
                newTasks.twelve.push(newTask);
            } else {
                newTasks.twelve.push(task[0]);
            }
            break;
        case "one":
            var newTask = $("#one").val();
            if (newTask !== task[0]) {
                newTasks.one.push(newTask);
            } else {
                newTasks.one.push(task[0]);
            }
            break;
        case "two":
            var newTask = $("#two").val();
            if (newTask !== task[0]) {
                newTasks.two.push(newTask);
            } else {
                newTasks.two.push(task[0]);
            }
            break;
        case "three":
            var newTask = $("#three").val();
            if (newTask !== task[0]) {
                newTasks.three.push(newTask);
            } else {
                newTasks.three.push(task[0]);
            }
            break;
        case "four":
            var newTask = $("#four").val();
            if (newTask !== task[0]) {
                newTasks.four.push(newTask);
            } else {
                newTasks.four.push(task[0]);
            }
            break;
        case "five":
            var newTask = $("#five").val();
            if (newTask !== task[0]) {
                newTasks.five.push(newTask);
            } else {
                newTasks.five.push(task[0]);
            }
            break;
    }

    tasks = newTasks;
    saveTasks();
}

$("#save").on("click", function () {
    console.log("click");
    $.each(tasks, function(list, arr) {
        updateTasks(arr, list);
  });
});

loadTasks();