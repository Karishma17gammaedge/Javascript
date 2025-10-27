import test from "@playwright/test";
import { home } from "../Pages/home";


test("checking homepage", async({page})=>{
    let homeobject = new home(page)
    await homeobject.goto();
    //  test.setTimeout(400);
    //  test.slow();
          await homeobject.getstarted();
          await homeobject.verifyhome();
   
})