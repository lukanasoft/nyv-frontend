import BaseService from '@/domain/services/base.service';

class UserService extends BaseService {
    constructor() {
        super();
    }

    getUser(id) {
        return this.get(`/users/${id}`);
    }

    getUsers() {
        return this.get('/users');
    }

    deleteUser(id) {
        return this.delete(`/users/${id}`);
    }
}

export default new UserService();