import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ title: '', description: '', techStack: '', imageURL: '', githubLink: '', liveDemoLink: '' });
  const [editId, setEditId] = useState(null);
  const token = localStorage.getItem('adminToken');

  const authHeader = { headers: { Authorization: `Bearer ${token}` } };

  const fetchProjects = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get('/api/projects');
      setProjects(res.data);
    } catch (err) {
      setError('Failed to fetch projects');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      if (editId) {
        await axios.put(`/api/projects/${editId}`, { ...form, techStack: form.techStack.split(',').map(t => t.trim()) }, authHeader);
      } else {
        await axios.post('/api/projects', { ...form, techStack: form.techStack.split(',').map(t => t.trim()) }, authHeader);
      }
      setForm({ title: '', description: '', techStack: '', imageURL: '', githubLink: '', liveDemoLink: '' });
      setEditId(null);
      fetchProjects();
    } catch (err) {
      setError(err.response?.data?.error || 'Error saving project');
    }
  };

  const handleEdit = project => {
    setEditId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      techStack: project.techStack.join(', '),
      imageURL: project.imageURL || '',
      githubLink: project.githubLink || '',
      liveDemoLink: project.liveDemoLink || ''
    });
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this project?')) return;
    setError('');
    try {
      await axios.delete(`/api/projects/${id}`, authHeader);
      fetchProjects();
    } catch (err) {
      setError('Delete failed');
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '2rem auto' }}>
      <h2>Admin Dashboard</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />{' '}
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />{' '}
        <input name="techStack" placeholder="Tech (comma separated)" value={form.techStack} onChange={handleChange} required />{' '}
        <input name="imageURL" placeholder="Image URL" value={form.imageURL} onChange={handleChange} />{' '}
        <input name="githubLink" placeholder="GitHub Link" value={form.githubLink} onChange={handleChange} />{' '}
        <input name="liveDemoLink" placeholder="Live Demo Link" value={form.liveDemoLink} onChange={handleChange} />{' '}
        <button type="submit">{editId ? 'Update' : 'Add'} Project</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ title: '', description: '', techStack: '', imageURL: '', githubLink: '', liveDemoLink: '' }); }}>Cancel</button>}
      </form>
      {loading ? <div>Loading...</div> : (
        <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Tech Stack</th>
              <th>Image</th>
              <th>GitHub</th>
              <th>Live Demo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project._id}>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.techStack && project.techStack.join(', ')}</td>
                <td>{project.imageURL && <img src={project.imageURL} alt="" style={{ width: 60 }} />}</td>
                <td>{project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}</td>
                <td>{project.liveDemoLink && <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Demo</a>}</td>
                <td>
                  <button onClick={() => handleEdit(project)}>Edit</button>{' '}
                  <button onClick={() => handleDelete(project._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;
