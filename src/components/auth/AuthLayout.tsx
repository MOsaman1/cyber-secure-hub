
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Brand/Info */}
      <div className="w-full md:w-1/2 bg-cyber-primary text-white p-8 flex flex-col justify-center circuit-pattern">
        <div className="max-w-md mx-auto space-y-6">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">CyberSecure Hub</h1>
            <p className="text-cyber-accent font-medium mt-2">Your trusted source for cybersecurity knowledge</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="bg-cyber-accent rounded-full p-1 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Advanced Security</h3>
                <p className="text-sm opacity-80">Learn about the latest threats and how to protect your digital assets</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-cyber-accent rounded-full p-1 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Expert Insights</h3>
                <p className="text-sm opacity-80">Benefit from research and analysis by top cybersecurity professionals</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-cyber-accent rounded-full p-1 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Stay Informed</h3>
                <p className="text-sm opacity-80">Get the latest updates on emerging threats and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-white dark:bg-cyber-dark">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
