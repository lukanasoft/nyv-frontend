import BaseService from '@/domain/services/base.service';

class BrandService extends BaseService {
    constructor() {
        super();
    }

    getAll() {
        return this.get('/brands');
    }
}

export default new BrandService();