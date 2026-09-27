// backend/routes/projects.js
import express from 'express';
const router = express.Router();

// Fake database (until we connect a real one in the next phase)
let projects = [
    { id: 1, name: "Dashboard Redesign", status: "Active" }
];

// 1. GET all projects
router.get('/', (req, res) => {
    res.json(projects);
});

// 2. GET a single project by ID
router.get('/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
});

// 3. POST a new project
router.post('/', (req, res) => {
    const newProject = {
        id: projects.length + 1,
        name: req.body.name,
        status: req.body.status || "Active"
    };
    projects.push(newProject);
    res.status(201).json(newProject); // 201 means "Created"
});

// 4. PUT (Update) a project
router.put('/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    if (!project) return res.status(404).json({ message: "Project not found" });
    
    project.name = req.body.name || project.name;
    project.status = req.body.status || project.status;
    res.json(project);
});

// 5. DELETE a project
router.delete('/:id', (req, res) => {
    projects = projects.filter(p => p.id !== parseInt(req.params.id));
    res.json({ message: "Project deleted successfully" });
});

export default router;