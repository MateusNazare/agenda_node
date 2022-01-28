import { getCustomRepository } from "typeorm";
import { Task } from "../entities/Task";
import { TasksRepository } from "../repositories/TasksRepository";

interface IUpdateTaskDTO {
    id: string
    name: string,
    description: string,
    date: Date,
}

class UpdateTaskService {
    async execute({ id, name, description, date }: IUpdateTaskDTO): Promise<void> {
        const taskRepository = getCustomRepository(TasksRepository);

        const taskAlreadyExists = taskRepository.findOne(id);

        if (!taskAlreadyExists) {
            throw new Error("This task doesn't exists");
        }

        await taskRepository.update(id, {
            name,
            description,
            date,
        });
    }
}

export { UpdateTaskService };