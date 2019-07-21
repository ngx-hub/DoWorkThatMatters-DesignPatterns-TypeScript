import { Employee } from './Employee';

export class Company {
    employees: Employee[];

    constructor() {
        this.employees = [];
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    removeEmployee(employee: Employee): void {
        const index: number = this.employees.indexOf(employee);
		if (index >= 0) this.employees.splice(index , 1);
    }

    getNetSalaty(): string {
        let result: string = ``;
        this.employees.forEach((employee: Employee) => {
            result += `\n<b>${employee.getRole()}</b> ${employee.getName()} salary: <i>${employee.getSalary()}</i>`;
        })
        return result.replace(/^\n/, ``);
    }
}
