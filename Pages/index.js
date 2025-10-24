import { expect } from "@playwright/test"

export class index{
    constructor(page){
        this.page=page
        this.textt= page.locator("#textt")
    }

    async goto(){
    await this.page.goto("http://localhost:5173/index")
    
}

async verifying(){
    await expect(this.textt).toHaveText("Index")
}
}

