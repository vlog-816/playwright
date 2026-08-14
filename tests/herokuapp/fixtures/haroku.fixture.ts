import { TablePage } from './../pages/TablePage.page';
import { CheckboxPage } from '../pages/CheckboxPage.page';
import { HorizoltalSliderPage } from './../pages/HorizoltalSliderPage';
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.page';

type HarokuPages = {
    loginPage: LoginPage,
    horizoltalSliderPage: HorizoltalSliderPage,
    checkboxPage: CheckboxPage,
    tablePage: TablePage
}

export const test = base.extend<HarokuPages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

    horizoltalSliderPage: async ({ page }, use) => {
        await use(new HorizoltalSliderPage(page));
    },

    checkboxPage: async ({ page }, use) => {
        await use(new CheckboxPage(page));
    },

    tablePage: async ({ page }, use) => {
        const tablePage = new TablePage(page);
        await tablePage.goto();
        await use(tablePage);
    }
})

export { expect } 