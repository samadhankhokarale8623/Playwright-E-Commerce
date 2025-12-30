const Product_Tags = require('./Product_Tags');

class Product_SubCategory {
  constructor(page) {
    this.page = page;

    this.subCategoryMenu = '[data-testid="EC-CFG-btn-tab-subcategory"]';
    this.addNewSubCategoryBtn = '[data-testid="EC-SUB-btn-add"]';

    // 🔗 init Product Tags
    this.productTags = new Product_Tags(page);
  }

  async openAddSubCategory() {
    await this.page.waitForLoadState('networkidle');

    await this.page
      .locator(this.addNewSubCategoryBtn)
      .waitFor({ state: 'visible' });

    await this.page.click(this.addNewSubCategoryBtn);

    // 👉 Call Product Tags
    await this.productTags.openAddTag();
  }
}

module.exports = Product_SubCategory;
