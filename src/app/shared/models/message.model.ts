export class Message {
    constructor(
        public text: string,
        public type: string,
        public ms: number = 1000
    ) {}
}
