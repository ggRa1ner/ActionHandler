// Test's here.

import { Action, get_action_list } from './actions.js'

function test1() { console.log("test1 text") }
function test2() { console.log("test2 text") }
function test3() { console.log("test3 text") }


const action1 = new Action("test1", test1).add_action()
const action2 = new Action("test2", test2).add_action()
const action3 = new Action("test3", test3).add_action()

const action_list = get_action_list()
console.log("Action list: " + action_list) // Output: Action list: [object Object],[object Object],[object Object]. It's correct

const user_input = 2 // Let’s assume that the user entered number 3

action_list[user_input].select()