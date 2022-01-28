import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("tasks")
class Task {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column()
    date: Date;

    @Column()
    is_finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Task };