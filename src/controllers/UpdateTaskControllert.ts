import { Request, Response } from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

class UpdateTaskController {
    async handle(request: Request, response: Response) {
        const { name, description, date } = request.body;
        const { id } = request.params;

        const updateTaskService = new UpdateTaskService();

        try {
            await updateTaskService.execute({ id, name, description, date });

            return response.send();
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }
}

export { UpdateTaskController };