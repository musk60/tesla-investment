import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');
const investmentsFilePath = path.join(dataDirectory, 'investments.json');

export function getInvestments() {
    const fileContents = fs.readFileSync(investmentsFilePath, 'utf8');
    return JSON.parse(fileContents);
}

export function saveInvestments(investments) {
    fs.writeFileSync(investmentsFilePath, JSON.stringify(investments, null, 2));
}

const usersFilePath = path.join(dataDirectory, 'users.json');

export function getUsers() {
    if (!fs.existsSync(usersFilePath)) {
        return [];
    }
    const fileContents = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(fileContents);
}

export function saveUsers(users) {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}
