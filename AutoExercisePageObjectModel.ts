class AutoEx {
get Signup() { return $('//i[@class="fa fa-lock"]')};
get NewUser() { return $('//h2[text()="New User Signup!"]')};
get name() {return $('//input[@type="text"]')};
get email() {return $('//input[@data-qa="signup-email"]')};
get signup() {return $('//button[@data-qa="signup-button"]')};
get EnterAccountIinfomation() {return $('//b[text() ="Enter Account Information"]')};
get Title() {return $('//div[@id="uniform-id_gender1"]')};
get myname() {return $('//input[@name="name"]')};
get password() {return $('//input[@type="password"]')};
get DOBd() {return $('//option[@value="30"]')};
get DOBm() {return $('//option[text()="January"]')};
get DOBy() {return $('//option[@value="1991"]')};
get newsL() {return $('//input[@id="newsletter"]')};
get specialO() {return $('//input[@id="optin"]')};
get Firstname() {return $('//input[@data-qa="first_name"]')};
get Lastname() {return $('//input[@data-qa="last_name"]')};
get Company() {return $('//input[@data-qa="company"]')};
get Address() {return $('//input[@data-qa="address"]')};
get Address2() {return $ ('//input[@data-qa="address2"]')};
get Country() {return $ ('//option[@value="United States"]')};
get state() {return $ ('//input[@data-qa="state"]')};
get city() {return $('//input[@data-qa="city"]')};
get zipcode() {return $('//input[@data-qa="zipcode"]')};
get mobile () {return $('//input[@data-qa="mobile_number"]')};
get creataccount() {return $ ('//button[@data-qa="create-account"]')};
get Acctcrted() {return $('//b[text()="Account Created!"]')};
get continue2() {return $('//a[@data-qa="continue-button"]')};
get loggedinas() {return $('//a[text()=" Logged in as "]')};
get deleteacct () {return $('//a[@href="/delete_account"]')};
get account_deleted() {return $('//b[text()="Account Deleted!"]')};
get continue3() {return $('//a[@data-qa="continue-button"]')};
get logout() {return $('//a[@href="/logout"]')}
get login() {return $('//a[@href="/login"]')}
get verlogin() {return $('//h2[text()="Login to your account"]')}
get loginbtn() {return $('//button[@data-qa="login-button"]')}
get LAS() {return $('//a[text()= " Logged in as "]')}
get email2() {return $('//input[@data-qa="login-email"]')};
get password2() {return $('//input[@data-qa="login-password"]')}


async open() {return browser.url('http://automationexercise.com')}


async registration(email:string, password:string){
    await this.Signup.click()
    await expect(this.NewUser).toHaveText('New User Signup!')
    await this.name.setValue("Ejike")
    await this.email.setValue(email)
    await this.signup.click()
    await browser.pause(100)
    await expect (this.EnterAccountIinfomation).toBeDisplayed()
    await this.Title.click()
    await this.myname.setValue('Ejike')
    await this.password.setValue(password)
    await this.DOBd.click()
    await this.DOBm.click()
    await this.DOBy.click()
    await this.newsL.click()
    await this.specialO.click()
    await this.specialO.scrollIntoView()
    await this.Firstname.setValue("Ejike")
    await this.Lastname.setValue("Eji")
    await this.Company.setValue("Ejyk")
    await this.Address.setValue('Imo Housing Owerri')
    await this.Address2.setValue('Imo State')
    await this.Country.click()
    await this.state.setValue("Arizona")
    await this.city.setValue("Phoenix")
    await this.zipcode.setValue("2WL4")
    await this.mobile.setValue('0567889334')
    await this.creataccount.click()
    await expect (this.Acctcrted).toBeDisplayed
    await expect (this.Acctcrted).toHaveText ('ACCOUNT CREATED!')
    await this.continue2.click()
    await expect (this.loggedinas).toBeDisplayed
    await this.logout.click()
    // await this.deleteacct.click()
    // await expect(this.account_deleted).toHaveText("ACCOUNT DELETED!")
    //await this.continue3.click()



}








async Login(email: string, password:string){
    await this.login.click();
    await expect(this.verlogin).toBeDisplayed();
    await this.email2.setValue(email);
    await this.email2.scrollIntoView();
    await this.password2.setValue(password);
    await this.loginbtn.click();
    await expect(this.LAS).toHaveText("Logged in as Ejike");
    
}








}
export default new AutoEx()