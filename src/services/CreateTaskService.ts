import { getCustomRepository } from "typeorm";
import { server, serverTCP } from "../app";
import { Task } from "../entities/Task";
import { TasksRepository } from "../repositories/TasksRepository";

interface ICreateTaskDTO {
    name: string,
    description: string,
    date: Date,
}

class CreateTaskService {
    async execute({ name, description, date }: ICreateTaskDTO): Promise<Task> {
        const tasksRepository = getCustomRepository(TasksRepository);

        const task = tasksRepository.create({
            name,
            description,
            date,
            is_finished: false
        });

        await tasksRepository.save(task);

        serverTCP.write(
            `A tarefa ${task.name} foi marcada para o dia ${task.date}`,
            () => {}
        );

        server.send(
            `A tarefa ${task.name} foi marcada para o dia ${task.date}`,
            () => {}
        );
    
        return task;
    }
}

export { CreateTaskService };