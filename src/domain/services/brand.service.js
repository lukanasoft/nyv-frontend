import BaseService from '@/domain/services/base.service';

class BrandService extends BaseService {
    constructor() {
        super();
    }

    getAll() {
        return this.get('/brands');
    }

    getAllBrands() {
        return this.get('/brands/all');
    }

    addBrand(brand) {
        return this.post('/brands', brand, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    deleteBrand(id) {
        return this.delete(`/brands/${id}`);
    }

    removePhoto(id) {
        return this.delete(`/brands/${id}/image`);
    }

    editBrand(id, formData) {
        return this.post(`/brands/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export default new BrandService();