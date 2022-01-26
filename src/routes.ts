import { Router } from "express";

const router = Router();

router.post("/", () => {
    return {
        teste: "teste"
    }
});

export { router };