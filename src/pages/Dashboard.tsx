
import MainLayout from "@/components/layout/MainLayout";
import { Shield, Lock, AlertTriangle, FileLock2, UserCog, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  // Featured cybersecurity topics
  const featuredTopics = [
    {
      title: "Ransomware Protection",
      description: "Learn how to protect your systems from ransomware attacks",
      icon: Lock,
      color: "text-cyber-danger",
    },
    {
      title: "Social Engineering",
      description: "Understanding and defending against social engineering tactics",
      icon: UserCog,
      color: "text-cyber-warning",
    },
    {
      title: "Data Privacy",
      description: "Best practices for ensuring the privacy of your sensitive data",
      icon: Database,
      color: "text-cyber-accent",
    },
    {
      title: "Network Security",
      description: "Securing your networks against common threats and vulnerabilities",
      icon: Globe,
      color: "text-cyber-primary",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyber-dark to-cyber-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Secure Your Digital World
              </h1>
              <p className="text-lg text-gray-300">
                Get expert insights and practical advice on the latest cybersecurity threats, 
                vulnerabilities, and solutions to protect your digital assets.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <Button size="lg" className="bg-cyber-accent hover:bg-cyber-accent/90 text-white">
                  Explore Resources
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  Watch Video Tutorial
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-80 h-80 rounded-full bg-cyber-accent/20 flex items-center justify-center p-8">
                <Shield size={200} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyber-primary">Featured Security Video</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Watch our latest video on cybersecurity best practices and stay protected
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
            {/* Replacing placeholder with actual YouTube embed */}
            <iframe 
              className="w-full h-[500px]"
              src="https://www.youtube.com/embed/inWWhr5tnEA" 
              title="Cybersecurity Fundamentals: Protecting Your Digital Life"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyber-primary">Featured Topics</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Explore key cybersecurity concepts and strengthen your defenses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTopics.map((topic, index) => (
              <Card key={index} className="border-t-4 hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className={`${topic.color} mb-4`}>
                    <topic.icon size={28} />
                  </div>
                  <CardTitle>{topic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{topic.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary">
                    Learn More →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Alert Section */}
      <section className="py-12 bg-cyber-danger/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col md:flex-row items-center">
              <div className="bg-cyber-danger/20 p-3 rounded-full mr-6 mb-4 md:mb-0">
                <AlertTriangle size={32} className="text-cyber-danger" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-cyber-danger mb-2">Current Security Alert</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A new critical vulnerability has been discovered affecting Windows systems. 
                  Ensure your systems are updated with the latest security patches.
                </p>
              </div>
              <Button className="mt-4 md:mt-0 md:ml-4 bg-cyber-danger hover:bg-cyber-danger/90 text-white">
                Read Alert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-cyber-primary">Latest Articles</h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Stay updated with our most recent cybersecurity insights
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Articles
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card>
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80" 
                  alt="Supply Chain Attack Concept" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">The Rising Threat of Supply Chain Attacks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base line-clamp-3">
                  How cybercriminals are targeting the software supply chain to compromise organizations. Learn the warning signs and prevention strategies.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-sm text-gray-500">May 15, 2023</div>
                <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary">
                  Read More
                </Button>
              </CardFooter>
            </Card>
            
            {/* Article 2 */}
            <Card>
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80" 
                  alt="Multi-Factor Authentication" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">Multi-Factor Authentication: Beyond Passwords</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base line-clamp-3">
                  Why passwords alone are no longer sufficient for security and how MFA provides a crucial layer of protection against unauthorized access.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-sm text-gray-500">April 28, 2023</div>
                <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary">
                  Read More
                </Button>
              </CardFooter>
            </Card>
            
            {/* Article 3 */}
            <Card>
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80" 
                  alt="Zero Trust Architecture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">Zero Trust Architecture: Implementing Modern Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base line-clamp-3">
                  Understanding the principles of Zero Trust and how organizations can transition from traditional security models to this more effective approach.
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-sm text-gray-500">April 12, 2023</div>
                <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-cyber-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Stay Protected in the Digital World</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest security alerts, tips, and industry insights.
          </p>
          <div className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyber-accent"
            />
            <Button className="bg-cyber-accent hover:bg-cyber-accent/90 text-white py-2 px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
