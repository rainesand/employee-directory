import employees from './employees'
export default {
    searchName: function (query) {
        var results = [];
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].first_name.toLowerCase().includes(query.toLowerCase()) ||
                employees[i].last_name.toLowerCase().includes(query.toLowerCase())) {
                results.push(employees[i]);
            }
        }
        return results;
    },
    getAll: function () {
        var all = [];
        for (let i=0; i<employees.length;i++) {
            all.push(employees[i]);
        }
        return all;
    },
    sortName: function (employees) {
        var sorted = employees.sort((a, b) => (a.first_name > b.first_name) ? 1 : -1)
        return sorted;
    }
};