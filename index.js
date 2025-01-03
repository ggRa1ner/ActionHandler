// Test's here.

import { Action, ActionManager } from './actions.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function test_1() {
    function function_test1() { console.log("test1 text"); }
    function function_test2() { console.log("test2 text"); }
    function function_test3() { console.log("test3 text"); }

    new Action("test1", function_test1).add_action();
    new Action("test2", function_test2).add_action();
    new Action("test3", function_test3).add_action();

    const action_list = ActionManager.get_action_list();
    const user_input = 2; // Let’s assume that the user entered number 2

    action_list[user_input].select();
}

function test_2() {
    function function_test4() { console.log("test4 text"); }
    function function_test5() { console.log("test5 text"); }
    function function_test6() { console.log("test6 text"); }
    function function_test7() { console.log("test7 text"); }

    new Action("test4", function_test4).add_action();
    new Action("test5", function_test5).add_action();
    new Action("test6", function_test6).add_action();
    new Action("test7", function_test7).add_action();

    const action_list = ActionManager.get_action_list();

    const user_input = Math.floor(Math.random() * action_list.length); // Random user input

    console.log(`User  selected action index: ${user_input}`);
    action_list[user_input].select();
}

function test_3() {
    function function_test8() { console.log("test8 text"); }
    function function_test9() { console.log("test9 text"); }
    function function_test10() { console.log("test10 text"); }
    function function_test11() { console.log("test11 text"); }
    function function_test12() { console.log("test12 text"); }

    new Action("test8", function_test8).add_action();
    new Action("test9", function_test9).add_action();
    new Action("test10", function_test10).add_action();
    new Action("test11", function_test11).add_action();
    new Action("test12", function_test12).add_action();

    const action_list = ActionManager.get_action_list();

    rl.question(`Enter a number between 0 and ${action_list.length - 1}: `, (user_input) => {
        const selected_index = parseInt(user_input);

        if (selected_index >= 0 && selected_index < action_list.length) {
            console.log(`User  selected action index: ${selected_index}`);
            action_list[selected_index].select();
        } else {
            console.log("Invalid input. Please enter a valid index.");
        }

        rl.close(); // Close interface
    });
}

function tests_with_arrow_functions() {
    const action1 = new Action("action1", () => {
        console.log("Action1 has been completed!")
        console.log("Another code there....")
    })

    const action2 = new Action("action2", () => {
        console.log("Action2 has been completed!")
        console.log("2+2=" + (2+2))
    })

    const action3 = new Action("action3", () => {
        console.log("Action3 has been completed!")
        console.log("Maybe it's work?")
    })

    action1.select() // Passed.
    action2.select() // Passed. Output: "2+2=4"
    action3.select() // Passed
}

// Calling tests
test_1(); // Output: test3 text
test_2(); // Output: User selected action index: X. Output: testY text
test_3(); // Output: Enter a number between 0 and Z: N. Output: testM text
tests_with_arrow_functions()