// const Store_Category = require('./Store_Category');

// class Product_Tags {
//   constructor(page) {
//     this.page = page;

//     this.productTagMenu = '[data-testid="EC-CFG-btn-tab-tags"]';
//     this.addNewTagBtn = '[data-testid="EC-TAG-btn-add"]';

//     // 🔗 init Store Category
//     this.storeCategory = new Store_Category(page);
//   }

//   async openAddTag() {
//     await this.page.waitForLoadState('networkidle');

//     await this.page.locator(this.addNewTagBtn).waitFor({ state: 'visible' });
//     await this.page.click(this.addNewTagBtn);

//     // 👉 Call Store Category
//     await this.storeCategory.openStoreCategory();
//   }
// }

// module.exports = Product_Tags;
