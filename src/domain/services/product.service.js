import BaseService from '@/domain/services/base.service';

class ProductService extends BaseService {
    constructor() {
        super();
    }

    getAllProducts({page, perPage, categoryId}) {
        return this.get('/products?page=' + page + '&perPage=' + perPage + '&categoryId=' + categoryId);
    }
}

export default new ProductService();