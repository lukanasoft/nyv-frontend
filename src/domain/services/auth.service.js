import BaseService from '@/domain/services/base.service';

class AuthService extends BaseService {
    constructor() {
        super();
    }

    login({ email, password, device }) {
        return this.post('/login', { email, password, device });
    }

    register({ email, password, name }) {
        return this.post('/register', { email, password, name });
    }
}

export default new AuthService();