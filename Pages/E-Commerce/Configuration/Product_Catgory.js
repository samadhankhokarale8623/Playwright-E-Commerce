// const Product_SubCategory = require('./Product_SubCatgory.js');
const Product_Tags = require('./Product_Tags.js');

class ProductCategory {
  constructor(page) {
    this.page = page;

    this.addNewCategoryBtn = '[data-testid="EC-CAT-btn-add"]';

    // 🔗 init next pages
    // this.productSubCategory = new Product_SubCategory(page);
    // this.productTags = new Product_Tags(page);
  }

  async openAddCategory() {
    await this.page.waitForLoadState('networkidle');

    await this.page.locator(this.addNewCategoryBtn).waitFor({ state: 'visible' });
    await this.page.click(this.addNewCategoryBtn);

    // 👉 Call Product SubCategory
    // await this.productSubCategory.openAddSubCategory();
  }
}

module.exports = ProductCategory;
