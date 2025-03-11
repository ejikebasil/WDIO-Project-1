import AutoEx from "../../pageobjects/AutoExercisePageObjectModel.ts"
describe('Automation Exercice if statement practice',()=>{
    it('User should be able to either successfully register OR sign-in on the website ', async()=>{
        await browser.url('https://automationexercise.com')
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('Automation Exercise')
        await AutoEx.Signup.click()
        await expect(AutoEx.NewUser).toHaveText('New User Signup!')
        await AutoEx.name.setValue("AYU")
        await AutoEx.email.setValue('chair43899@yahoo.com')
        await AutoEx.signup.click()
        //await browser.pause(100)
        let singupError = await $('//p[text()="Email Address already exist!"]').isExisting();
        if (singupError) {
            await AutoEx.Login('ejike12@yahoo.com', '123456789w');

        } 
        else {
  
        await expect (AutoEx.EnterAccountIinfomation).toBeDisplayed()
        await AutoEx.Title.click()
        await browser.pause(100)
        await AutoEx.myname.setValue('Ejike')
        await AutoEx.password.setValue('123456789w')
        await AutoEx.DOBd.click()
        await AutoEx.DOBm.click()
        await AutoEx.DOBy.click()
        await AutoEx.newsL.click()
        await AutoEx.specialO.click()
        await AutoEx.Firstname.setValue("Ejike")
        await AutoEx.Lastname.setValue("Eji")
        await AutoEx.Company.setValue("Ejyk")
        await AutoEx.Address.setValue('Imo Housing Owerri')
        await AutoEx.Address2.setValue('Imo State')
        await AutoEx.Country.click()
        await AutoEx.state.setValue("Arizona")
        await AutoEx.city.setValue("Phoenix")
        await AutoEx.zipcode.setValue("2WL4")
        await AutoEx.mobile.setValue('0567889334')
        await AutoEx.creataccount.click()
        await expect (AutoEx.Acctcrted).toBeDisplayed
        await expect (AutoEx.Acctcrted).toHaveText ('ACCOUNT CREATED!')
        await AutoEx.continue2.click()
        await expect (AutoEx.loggedinas).toBeDisplayed
        }

    
    })



})


