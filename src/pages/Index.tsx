import React from 'react';
import LoginFormCard from '../components/Auth/LoginFormCard';
import LogoHeader from '../components/Auth/LogoHeader';

/**
 * The main index page of the application, which serves as the login page.
 * This page implements the main centered layout and assembles the core authentication
 * components, `LogoHeader` and `LoginFormCard`, to create the user sign-in experience.
 */
const IndexPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-6">
      <div className="flex flex-col items-center gap-8">
        <LogoHeader />
        <LoginFormCard />
      </div>
    </main>
  );
};

export default IndexPage;
