import { expect } from '@playwright/test';

export class DashPage {
    constructor(page) {
        this.page = page;
    }

    async validarSaldo(saldo) {
        await expect(this.page.locator('#account-balance')).toHaveText(saldo);
    }
}