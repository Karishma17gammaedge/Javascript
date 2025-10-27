import { test } from "@playwright/test";
import { Loginpage } from "../Pages/loginpage";
import { home } from "../Pages/home";

test.describe("checking test describe", () => {

  test("checking homepage", async ({ page }) => {
    const homeobject = new home(page);
    await homeobject.goto();
    await homeobject.getstarted();
    await homeobject.verifyhome();
  });

  test("verify login page", async ({ page }) => {
    const Loginobj = new Loginpage(page);
    await Loginobj.goto();
    await Loginobj.loginuser("karishma", "12345678");
    await Loginobj.verifyuser();
  });

});

