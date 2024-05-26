
export class HomePage {

    static get url() {
        return "/#/";
    }

    static visit() {
        cy.visit(this.url);
    }

    static get makeAppointment() {
        return cy.get('[id="btn-make-appointment"]');
    }

    static get selectTextBox() {
        return cy.get('[class="form-horizontal"]');
    }

    static get selectLogin() {
        return cy.get('[id="btn-login"]');
    }

    static get selectField() {
        return cy.get('[class="form-horizontal"]');
    }

    static get selectFacility() {
        return cy.get('[id="combo_facility"]');
    }

    static get selectDate() {
        return cy.get('[class="table-condensed"]');
    }

    static get validate() {
        return cy.get('[class="row"]');
    }

    static get selectMenu() {
        return cy.get('[class="fa fa-bars"]');
    }

    static get sideBar() {
        return cy.get('[id="sidebar-wrapper"]');
    }

    static get validateAppointment() {
        return cy.get('[class="col-sm-12 text-center"]');
    }
}
