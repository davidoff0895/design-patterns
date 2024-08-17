abstract class Editor {
    protected content: string = '';
    protected isEditMode: boolean = false;
    public updateFile (): void {
        this.open();
        this.edit();
        this.close();
    }
    public open(): void {
        this.isEditMode = true;
    };
    abstract edit(): void;
    public close(): void {
        this.isEditMode = false;
        console.log(this.content);
    }
}
class EditDate extends Editor {
    public edit() {
        if (!this.isEditMode) {
            console.error('File is not opened');
            return;
        }
        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        this.content = `${day}.${month}.${year}`;
    }
}
class EditTime extends Editor {
    public edit() {
        if (!this.isEditMode) {
            console.error('File is not opened');
            return;
        }
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        this.content = `${hours}:${minutes}`;
    }
}
const editDate = new EditDate();
const editTime = new EditTime();
editDate.updateFile();
editTime.updateFile();
