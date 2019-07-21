import { Employee } from './Employee';

export class Developer implements Employee {
    name: string;
    salary: number;
    role: string;

    constructor(name: string, salary?: number) {
        this.name = name;
        this.role = `Developer`;
        if (salary) {
            this.salary = salary;
        } else {
            this.salary = 1000;
        }
    }
    
    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }
    getRole(): string {
        return this.role;
    }
}