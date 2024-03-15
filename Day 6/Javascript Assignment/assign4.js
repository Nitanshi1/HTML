function addTask(task, callback) {
    console.log(`Task added: ${task}`);
    setTimeout(function () {
        callback(null, task);
    }, 1000);
}

function setReminder(task, time, callback) {
    console.log(`Reminder set for '${task}' at ${time}`);
    setTimeout(function () {
        callback(null, task);
    }, 2000);
}

function completeTask(task, callback) {
    console.log(`Task completed: ${task}`);
    setTimeout(function () {
        callback(null, task);
    }, 1500);
}


addTask('Write report', function (error, addedTask) {
    if (error) {
        console.error("Error adding task:", error);
    } else {
        setReminder(addedTask, '12:00 PM', function (error, remindedTask) {
            if (error) {
                console.error("Error setting reminder:", error);
            } else {
                completeTask(remindedTask, function (error, completedTask) {
                    if (error) {
                        console.error("Error completing task:", error);
                    } else {
                        console.log(`To-do list item '${completedTask}' is now completed.`);
                    }
                });
            }
        });
    }
});
