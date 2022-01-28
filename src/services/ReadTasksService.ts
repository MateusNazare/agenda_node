import { getCustomRepository } from "typeorm";
import { Task } from "../entities/Task";
import { TasksRepository } from "../repositories/TasksRepository";

class ReadTasksService {
    async execute(): Promise<Task[]>{
        const taskRepository = getCustomRepository(TasksRepository);

        const tasks = await taskRepository.find();

        return tasks;
    }
}

export { ReadTasksService };
