import { HomePage } from "../pageObjects/HomePage";

describe("Katalon scenarios", () => {
    context("First Scenario", () => {
        beforeEach(() => {
            HomePage.visit();
        });

        it("Make an appointment", () => {
            HomePage.makeAppointment.click();
            HomePage.selectTextBox.contains("Username").type("John Doe");
            HomePage.selectTextBox.contains("Password").type("ThisIsNotAPassword");
            HomePage.selectLogin.click();
            HomePage.selectFacility.select("Seoul CURA Healthcare Center");
            HomePage.selectField.contains("Apply for hospital readmission").click();
            HomePage.selectField.contains("Medicaid").click();
            HomePage.selectField.contains("Visit Date").click();
            HomePage.selectDate.contains("30").click();
            HomePage.selectField.contains("Comment").type("CURA Healthcare Service");
            HomePage.selectField.contains("Book Appointment").click();
            

            // Validate
            HomePage.validate.contains("Seoul");
            HomePage.validate.contains("Yes");
            HomePage.validate.contains("Medicaid");
            HomePage.validate.contains("30/04/2024");
            HomePage.validate.contains("CURA Healthcare Service");
        });

        it.only("Appointment history empty", () => {
            HomePage.makeAppointment.click();
            HomePage.selectTextBox.contains("Username").type("John Doe");
            HomePage.selectTextBox.contains("Password").type("ThisIsNotAPassword");
            HomePage.selectLogin.click();
            HomePage.selectMenu.click();

            HomePage.sideBar.should("have.class", "active").then(() => {
                HomePage.sideBar.contains("History").click();
            });

            HomePage.validateAppointment.contains("No appointment").should("be.visible");
        });
    });
});
