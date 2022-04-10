import BaseService from "./base.service";

class CategoryService extends BaseService {
  constructor() {
    super();
  }

  getAllCategories(params) {
    if (params) {
      return this.get("/categories?search=" + params.search);
    }
    else return this.get("/categories");
  }

  addCategory(category) {
    return this.post("/categories", category);
  }

  deleteCategory(id) {
    return this.delete("/categories/" + id);
  }

  updateCategory(id, category) {
    return this.put("/categories/" + id, category);
  }
}

export default new CategoryService();