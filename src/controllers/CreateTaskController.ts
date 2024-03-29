import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

class CreateTaskController {
    async handle(request: Request, response: Response) {
        const { name, description, date } = request.body;

        const createTaskService = new CreateTaskService();

        const task = await createTaskService.execute({ name, description, date });

        return response.status(201).json(task);
    }
}

export { CreateTaskController }