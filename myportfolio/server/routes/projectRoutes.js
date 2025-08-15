const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const { verifyAdminToken } = require('../middleware/auth');

// CRUD routes
router.get('/projects', projectController.getAllProjects);
router.post('/projects', verifyAdminToken, projectController.addProject);
router.put('/projects/:id', verifyAdminToken, projectController.updateProject);
router.delete('/projects/:id', verifyAdminToken, projectController.deleteProject);

// DEV: Sample data creation route
router.post('/projects/dev/sample', projectController.createSampleProjects);

module.exports = router;
