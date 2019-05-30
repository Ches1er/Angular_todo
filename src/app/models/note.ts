export class Note {

    constructor(
        private pName: string,
        private pDescription: string,
        private pState = false
    ) {
    }


    get name(): string {
        return this.pName;
    }

    set name(value: string) {
        this.pName = value;
    }

    get description(): string {
        return this.pDescription;
    }

    set description(value: string) {
        this.pDescription = value;
    }

    get state(): boolean {
        return this.pState;
    }

    set state(value: boolean) {
        this.pState = value;
    }


    static fromJson(jsonObject: any): Note {
        return new Note(jsonObject.name, jsonObject.description, jsonObject.state);
    }

    toJson(): object {
        return {
            name: this.name,
            description: this.description,
            state: this.state
        };
    }
}
