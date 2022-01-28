import { Request, Response } from "express";
import { ReadTasksService } from "../services/ReadTasksService";

class ReadTasksController {
    async handle(request: Request, response: Response) {
        const readTasksService = new ReadTasksService();

        const tasks = await readTasksService.execute();

        return response.json(tasks);
    }
}

export { ReadTasksController };
