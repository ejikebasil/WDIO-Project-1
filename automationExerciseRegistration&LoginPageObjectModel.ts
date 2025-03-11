import AutoEx from "../../pageobjects/AutoExercisePageObjectModel.ts"
describe('Automation Exercice using Page Object Model',()=>{
    it('New user should be able to register on the website sucessfully', async()=>{
        await AutoEx.open();
        await expect(browser).toHaveTitle('Automation Exercise');
        await browser.maximizeWindow();
        await AutoEx.registration('ejike162@yahoo.com', '123456789w');
    })


    it('Registered user should be able to login successfully', async()=>{
        await AutoEx.open();
        await browser.maximizeWindow();  
        await expect(browser).toHaveTitle('Automation Exercise');
        await AutoEx.Login('ejike12@yahoo.com', '123456789w');
    })
    
})