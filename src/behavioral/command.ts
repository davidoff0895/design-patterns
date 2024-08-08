interface Command {
    execute(): void;
}
class DrawCommand implements Command {
    execute() {
        console.log('draw command');
    };
}
class FillCommand implements Command {
    execute() {
        console.log('fill command');
    };
}
class Invoker {
    private listRedo: Command[] = [];
    private listUndo: Command[] = [];

    public execute(command: Command) {
        console.log('execute');
        command.execute();
        this.listUndo.push(command);
    }
    public undo() {
        const undoCommand = this.listUndo.pop();
        if (undoCommand) {
            console.log('undo');
            undoCommand.execute();
            this.listRedo.push(undoCommand);
        }
    };
    public redo() {
        const redoCommand = this.listRedo.pop();
        if (redoCommand) {
            console.log('redo');
            redoCommand.execute();
            this.listUndo.push(redoCommand);
        }
    };
}
const invoker = new Invoker();
const drawCommand = new DrawCommand();
const fillCommand = new FillCommand();
invoker.execute(drawCommand);
invoker.execute(fillCommand);
invoker.execute(drawCommand);
invoker.undo();
invoker.undo();
invoker.redo();