// class Store_Category {
//   constructor(page) {
//     this.page = page;

//     this.addStoreCategoryBtn = '[data-testid="EC-STORE-btn-add"]';
//   }

//   async openStoreCategory() {
//     await this.page.waitForLoadState('networkidle');

//     await this.page
//       .locator(this.addStoreCategoryBtn)
//       .waitFor({ state: 'visible' });

//     await this.page.click(this.addStoreCategoryBtn);
//   }
// }

// module.exports = Store_Category;
