# ActionHandler
**All test's in index.js!**

## Description

**ActionHandler** is a simple JavaScript library designed for managing actions in an application. It allows you to create actions with names and associated functions, add them to a list, and invoke them by index. This can be useful for implementing command systems, event handlers, or other scenarios where dynamic function execution is required.

## Features

- Create action objects with a name and function.
- Add actions to a global list.
- Select and execute an action by index.
- Retrieve a list of all added actions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ggRa1ner/ActionHandler.git
   ```

2. Navigate to the project directory:
  ```bash
  cd ActionHandler
```

3. Use it in your project by importing the Action class and the get_action_list function.

Example of usage:
```javascript
import { Action, get_action_list } from './actions.js';

function test1() { console.log("test1 text"); }
function test2() { console.log("test2 text"); }

const action1 = new Action("test1", test1).add_action();
const action2 = new Action("test2", test2).add_action();

const action_list = get_action_list();
const user_input = 1; // Example user input

action_list[user_input].select(); // Outputs "test2 text"
```
