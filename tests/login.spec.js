import test from "@playwright/test";
import { Loginpage } from "../Pages/loginpage";


test("verify login page" , async({page})=>{
    let Loginobj = new Loginpage(page)

    await Loginobj.goto();
    await Loginobj.loginuser("karishma" , "12345678")
    await Loginobj.verifyuser()

})

// test.describe("checking test describe", ()=>{


// test("checking homepage", async({page})=>{
//     let homeobject = new home(page)
//     await homeobject.goto();
//     await homeobject.getstarted();
//     await homeobject.verifyhome()
    
//     test("verify login page" , async({page})=>{
//     let Loginobj = new Loginpage(page)

//     await Loginobj.goto();
//     await Loginobj.loginuser("karishma" , "12345678")
//     await Loginobj.verifyuser()

// }) 

// })



// })

