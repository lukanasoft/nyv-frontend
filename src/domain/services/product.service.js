import BaseService from '@/domain/services/base.service';

class ProductService extends BaseService {
    constructor() {
        super();
    }

    getAllProducts({page, perPage, categoryId, search}) {
        let props = "?page=" + page + "&perPage=" + perPage;
        if (categoryId) {
            props += "&categoryId=" + categoryId;
        }
        if (search) {
            props += "&search=" + search;
        }
        return this.get('/products' + props);
    }

    uploadProduct(formData) {
        console.log(formData, 'formData');
        return this.post('/products/with-photos', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    deleteProduct(productId) {
        return this.delete('/products/' + productId);
    }

    deletePhoto(productId, photoId) {
        return this.delete('/products/' + productId + '/photos/' + photoId);
    }

    updateProduct(productId, formData) {
        return this.post('/products/' + productId, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export default new ProductService();