
import test from "@playwright/test";
import { index } from "../Pages";

test("verify index",async({page})=>{
let indexobj = new index(page)

await indexobj.goto()
await indexobj.verifying()
})