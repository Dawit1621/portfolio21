import React from 'react';

const TestPage = () => {
  return (
    <div className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-foreground mb-8">
          Welcome to My MERN Application!
        </h2>
        <p className="text-center text-muted-foreground text-lg">
          This is a test page to verify that the AppLayout is working correctly.
        </p>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            The layout includes: Header, Hero Section (on home page), Main Section, and Footer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
