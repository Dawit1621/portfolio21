const Project = require('../models/Project');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a new project
exports.addProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a project
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DEV: Create sample test data
exports.createSampleProjects = async (req, res) => {
  try {
    const sampleProjects = [
      {
        title: 'Portfolio Website',
        description: 'A personal portfolio website.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        imageURL: 'https://example.com/portfolio.png',
        githubLink: 'https://github.com/username/portfolio',
        liveDemoLink: 'https://portfolio.example.com',
      },
      {
        title: 'E-commerce App',
        description: 'A full-stack e-commerce application.',
        techStack: ['Vue', 'Express', 'MongoDB'],
        imageURL: 'https://example.com/ecommerce.png',
        githubLink: 'https://github.com/username/ecommerce',
        liveDemoLink: 'https://ecommerce.example.com',
      }
    ];
    await Project.insertMany(sampleProjects);
    res.json({ message: 'Sample projects created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
