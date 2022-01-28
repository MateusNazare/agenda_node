import { Request, Response } from "express";
import { DeleteTaskService } from "../services/DeleteTaskService";

class DeleteTaskController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteTaskService = new DeleteTaskService();
        
        await deleteTaskService.execute(id);

        return response.send();
    }
}

export { DeleteTaskController };
