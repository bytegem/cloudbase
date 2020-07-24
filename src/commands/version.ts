import { Command } from "../command";
import { Application } from "..";

export class VersionCommand extends Command {
    name: string = "version";

    async handle(app: Application) {
        return {
            name: app.name,
            version: app.version,
            commands: app.commands.keys(),
        };
    }
}