import { expect } from "@playwright/test"

export class home {
    constructor(page) {
        this.page = page,
        this.started = page.locator("#start")
        this.promoframe = page.frameLocator("#promo-frame")
    }

    async goto() {
        await this.page.goto("http://localhost:5173")
    }

    async getstarted() {
        await this.started.click()
    }

    async verifyhome() {
        await expect(this.page).toHaveURL("  http://localhost:5173/login")
    }

    //   async interactWithIframe() {
    //     // await this.page.frameLocator('#iframe').locator('button').waitFor();
    //     await expect(this.promoframe.locator('h1')).toHaveText('playwright');

    // }
}