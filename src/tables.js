/* eslint-disable no-undef */
import UserManager from "./models/UserManager";

const managers = [
    UserManager,
];

const tables = {};

managers.forEach((ManagerClass) => {
    const manager = new ManagerClass();

    tables[manager.table] = manager
});

export default new Proxy(tables,{
    get(obj, prop) {

        if (prop in obj) return obj[prop];

        throw new ReferenceError(
            `tables.${prop} is not defined. Did you register it in ${__filename}?`
        );
    },
});