import { chromium, expect, test } from "@playwright/test"

 test.only("Create a Lead", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.click(".decorativeSubmit");
    await page.getByText('CRM/SFA').click();
    await page.click("text=Leads", { timeout: 20000 });
    await page.click("text=Create Lead");
    const companyName = page.locator("[id='createLeadForm_companyName']");
    await companyName.fill("Testleaf");
    const firstName = page.locator("#createLeadForm_firstName");
    await firstName.fill("Vivega");
    const lastName = page.locator("input[id='createLeadForm_lastName']");
    await lastName.fill("Vivega");
    await page.fill("input[id='createLeadForm_personalTitle']", "Hello");
    await page.fill("input[id='createLeadForm_generalProfTitle']", "Day4_Assignment");
    await page.fill("input[name='annualRevenue']", "10000");
    await page.fill("input[name='annualRevenue']", "10000");
    await page.fill("input[id='createLeadForm_departmentName']", "engineering");
    await page.fill("input[id='createLeadForm_primaryPhoneNumber']", "12345");
    await page.click("[class='smallSubmit']");
    await page.waitForTimeout(5000);
    
    let viewCompanyName = page.locator("#viewLead_companyName_sp");
    expect(viewCompanyName).toContainText('Testleaf', { timeout: 3000 });
    let viewFirstName = page.locator("#viewLead_firstName_sp");
    expect(viewFirstName).toHaveText('Vivega', { timeout: 3000 });
    let viewLastName = page.locator("#viewLead_lastName_sp");
    expect(viewLastName).toHaveText('Vivega', { timeout: 3000 });
})

 test("Edit a Lead", async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.click(".decorativeSubmit");
    await page.getByText('CRM/SFA').click();
    await page.click("text=Leads", { timeout: 20000 });
    await page.click("[href='/crmsfa/control/findLeads']");

    await page.locator(".x-tab-panel-bwrap .x-form-item [name='firstName']").fill("Vivega");
    await page.click("[id='findLeads'] .x-panel-footer .x-panel-btn-td");
    await page.click(".x-grid3-col-partyId>a:first-child");
    await page.waitForTimeout(5000);
    await page.click(".frameSectionExtra .subMenuButton:nth-child(3)");

    const updatedCompanyName = page.locator("[id='updateLeadForm_companyName']")
    await updatedCompanyName.clear({ timeout: 2000 });
    await updatedCompanyName.fill("Veeva");

    const updatedAnnualRevnune = page.locator("input[id='updateLeadForm_annualRevenue']")
    await updatedAnnualRevnune.clear({ timeout: 2000 });
    await updatedAnnualRevnune.fill("5000");

    const updatedDepartName = page.locator("[id='updateLeadForm_departmentName']")
    await updatedDepartName.clear({ timeout: 2000 });
    await updatedDepartName.fill("IT");

    await page.fill("#updateLeadForm_description", "Updated");
    await page.click("[value='Update']");

    let viewCompanyName = page.locator("#viewLead_companyName_sp");
    expect(viewCompanyName).toContainText('Veeva', { timeout: 3000 });
    let viewFAnnualRevnune = page.locator("#viewLead_annualRevenue_sp");
    expect(viewFAnnualRevnune).toHaveText('$5,000.00', { timeout: 3000 });
    let viewDeptName = page.locator("#viewLead_departmentName_sp");
    expect(viewDeptName).toHaveText('IT', { timeout: 3000 });
})

test("Create a New Account", async ({ page }) => {

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("username").clear();
    await page.getByLabel("username").fill("vive@testleaf.com");
    await page.getByLabel("password").fill("test@123");
    await page.locator("#Login").click();

    await page.waitForTimeout(10000);

    const title = await page.title();
    expect(title).toMatch('Home | Salesforce');
    // Or else
    await expect(page).toHaveTitle('Home | Salesforce');   

    const url = page.url();
    console.log(`url ${url}`);
    const expectedURL = "https://testleaf-b0-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home";
    expect(url).toMatch(expectedURL);

    await page.click(".slds-icon-waffle");
    await page.getByText("View All").click({timeout:5000});

    await page.waitForTimeout(10000);

    await page.getByPlaceholder("Search apps or items...").fill("Service");

    await page.locator("//div[@class='slds-truncate']").first().click();   

    await page.click("[title~='Accounts']", {timeout:5000});

    await page.getByRole('button', { name: 'New' }).click();

    await page.locator("input[name='Name']").fill("AccountNew");

    await page.locator("//records-form-footer//ul/li[last()]").click();
})