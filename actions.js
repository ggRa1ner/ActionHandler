let action_lists = []

export class Action {

    constructor(_name, _action) {
        this.name = _name
        this.action = _action
    }

    // --- [ GETTERS ] ---
    get_name() { return this.name; }
    get_action_object() { return this.action; }

    // --- [ SETTERS ] ---
    set_name(_name) { this.name = _name; return; }
    add_action() {
        action_lists.push(this)
    }

    // --- [ Functions ] ---
    select() {
        this.action()
        return;
    }
}

export function get_action_list() {
    return action_lists
}