import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const Home = () => {
  return (
    <div className="bg-background">
      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MongoDB', 'REST APIs'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'VS Code', 'Vite', 'Webpack'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background border rounded-lg overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-muted-foreground mb-4">
                  A modern, responsive portfolio built with React and Node.js
                </p>
                <Button variant="outline" asChild>
                  <Link to="/projects">View All Projects →</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your next project and bring your ideas to life.
          </p>
          <Button variant="secondary" asChild size="lg">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
