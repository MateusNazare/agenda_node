import { getCustomRepository } from "typeorm";
import { TasksRepository } from "../repositories/TasksRepository";

class DeleteTaskService {
    async execute(id: string): Promise<void> {
        const taskRepository = getCustomRepository(TasksRepository);

        await taskRepository.delete(id);
    }
}

export { DeleteTaskService };
