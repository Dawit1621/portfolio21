import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const ExamplePage = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Example Page
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This is an example page showing how to use the AppLayout component. 
            The layout provides a consistent structure across all pages.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Fast Performance
              </CardTitle>
              <CardDescription>
                Built with modern technologies for optimal speed and efficiency.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our applications are optimized for performance, ensuring smooth 
                user experiences across all devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
              </div>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Feature Card 2 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">📱</span>
                Responsive Design
              </CardTitle>
              <CardDescription>
                Perfect display on mobile, tablet, and desktop devices.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Every component is designed to work seamlessly across all screen 
                sizes and orientations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Mobile First</Badge>
                <Badge variant="secondary">Flexible Grid</Badge>
                <Badge variant="secondary">Touch Friendly</Badge>
              </div>
              <Button variant="outline" className="w-full">
                View Demo
              </Button>
            </CardContent>
          </Card>

          {/* Feature Card 3 */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Modern UI
              </CardTitle>
              <CardDescription>
                Clean, accessible, and beautiful user interfaces.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Built with shadcn/ui components and TailwindCSS for consistent, 
                professional design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">shadcn/ui</Badge>
                <Badge variant="secondary">TailwindCSS</Badge>
                <Badge variant="secondary">Accessible</Badge>
              </div>
              <Button variant="outline" className="w-full">
                Explore Components
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-6">
                Start building your next project with our modern, responsive layout system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExamplePage;
