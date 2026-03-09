const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");

/**
 * @swagger
 * /api/v1/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 */
router.get("/", authMiddleware, taskController.getTasks);

/**
 * @swagger
 * /api/v1/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 */
router.post("/", authMiddleware, taskController.createTask);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   put:
 *     summary: Update a task
 *     tags: [Tasks]
 */
router.put("/:id", authMiddleware, taskController.updateTask);

/**
 * @swagger
 * /api/v1/tasks/{id}:
 *   delete:
 *     summary: Delete a task
 *     tags: [Tasks]
 */
router.delete("/:id", authMiddleware, taskController.deleteTask);

module.exports = router;