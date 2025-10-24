import { expect } from "@playwright/test"

export class home{
    constructor(page){
        this.page=page,
        this.started= page.locator("#start")
    }

    async goto(){
        await this.page.goto("http://localhost:5173")
    }

    async getstarted (){
        await this.started.click()
    }

    async verifyhome(){
        await expect(this.page).toHaveURL("  http://localhost:5173/login")
    }
}