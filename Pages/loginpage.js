import { expect } from "@playwright/test";

export class Loginpage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.login= page.locator('#login-button');
    }
    async goto(){
        await this.page.goto("http://localhost:5173/login")
    }

    async loginuser(user, pass) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.login.click();
    }

    async verifyuser (){
        await expect(this.page).toHaveURL("http://localhost:5173/")
    }

   
}