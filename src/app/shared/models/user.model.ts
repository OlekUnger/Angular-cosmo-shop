export class UserModel {
    constructor(
        public login: string,
        public password: string,
        public email?: string,
        public id?: string
    ) {}
}
