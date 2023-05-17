class Employee {
    constructor(name, salary, title, manager=null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if (this.manager) this.manager.addEmployee(this)
    }
}

module.exports = Employee;
