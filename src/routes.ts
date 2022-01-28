import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { DeleteTaskController } from "./controllers/DeleteTaskController";
import { ReadTasksController } from "./controllers/ReadTasksController";
import { UpdateTaskController } from "./controllers/UpdateTaskControllert";

const router = Router();

const createTaskController = new CreateTaskController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();
const readTasksController = new ReadTasksController();

router.post("/tasks", createTaskController.handle);
router.delete("/tasks/:id", deleteTaskController.handle);
router.put("/tasks/:id", updateTaskController.handle);
router.get("/tasks", readTasksController.handle);

export { router };