let action_lists = [];

class Action {
    constructor(_name, _action) {
        this.name = _name;
        this.action = _action;
        action_lists.push(this)
    }

    // --- [ GETTERS ] ---
    get_name() { return this.name; }
    get_action_object() { return this.action; }

    // --- [ SETTERS ] ---
    set_name(_name) { this.name = _name; return; }

    // --- [ Functions ] ---
    select(args) { this.action(args); return; }
}

const ActionManager = {
    get_action_list() {
        return action_lists;
    },

    get_action_by_name(need_name) {
        for (let i = 0; i < action_lists.length; i++) {
            const element = action_lists[i];
            if (element.get_name() === need_name) {
                return element;
            }
        }
        return null; // return null if not found
    }
};

export { Action, ActionManager };