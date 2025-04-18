
import MainLayout from "@/components/layout/MainLayout";
import { Search, HelpCircle, FileText, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Support() {
  // Sample support categories
  const supportCategories = [
    {
      title: "Account & Access",
      icon: HelpCircle,
      description: "Help with account creation, login issues, and permissions",
      articles: [
        "Resetting your password",
        "Two-factor authentication setup",
        "Managing account permissions",
        "Updating account information"
      ]
    },
    {
      title: "Security Resources",
      icon: FileText,
      description: "Access security templates, checklists, and best practices",
      articles: [
        "Security assessment templates",
        "Incident response playbooks",
        "Security policy templates",
        "Compliance checklists"
      ]
    },
    {
      title: "Technical Support",
      icon: MessageSquare,
      description: "Get help with technical issues and implementation",
      articles: [
        "Configuring security tools",
        "Security monitoring setup",
        "VPN configuration guides",
        "Firewall troubleshooting"
      ]
    },
  ];

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-cyber-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Support Center</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Find resources, answers, and assistance for all your cybersecurity questions
            </p>
            
            {/* Search */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="flex">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search for help with..."
                    className="pl-10 pr-4 py-3 rounded-l-md border-r-0 bg-white/10 border-white/20 text-white placeholder-gray-300 w-full focus:ring-cyber-accent focus:border-cyber-accent"
                  />
                </div>
                <Button className="bg-cyber-accent hover:bg-cyber-accent/90 text-white rounded-l-none">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-cyber-primary mb-6">How can we help you?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Help Card 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-cyber-primary/10 flex items-center justify-center mb-3">
                  <FileText className="h-6 w-6 text-cyber-primary" />
                </div>
                <CardTitle>Browse Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Access guides, tutorials, and documentation on cybersecurity best practices
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary">
                  View Documentation →
                </Button>
              </CardFooter>
            </Card>
            
            {/* Help Card 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-cyber-primary/10 flex items-center justify-center mb-3">
                  <Mail className="h-6 w-6 text-cyber-primary" />
                </div>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Reach out to our support team for personalized assistance with your issue
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary">
                  Submit Ticket →
                </Button>
              </CardFooter>
            </Card>
            
            {/* Help Card 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-full bg-cyber-primary/10 flex items-center justify-center mb-3">
                  <Phone className="h-6 w-6 text-cyber-primary" />
                </div>
                <CardTitle>Emergency Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  For urgent security incidents, contact our 24/7 emergency hotline
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary">
                  Call +123 456 7890 →
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-cyber-primary mb-6">Support Categories</h2>
          
          <Tabs defaultValue="Account & Access" className="w-full">
            <TabsList className="mb-8 bg-gray-100 dark:bg-gray-800 p-1">
              {supportCategories.map((category) => (
                <TabsTrigger key={category.title} value={category.title}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {supportCategories.map((category) => (
              <TabsContent key={category.title} value={category.title}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="bg-cyber-primary text-white p-6 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="mt-2 text-gray-200">
                        {category.description}
                      </p>
                      <Button className="mt-4 bg-white text-cyber-primary hover:bg-gray-100">
                        View All Articles
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                        Popular Articles
                      </h3>
                      <div className="space-y-4">
                        {category.articles.map((article, index) => (
                          <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0">
                            <a href="#" className="flex items-start hover:text-cyber-accent">
                              <FileText className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span>{article}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-cyber-primary">Frequently Asked Questions</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Quick answers to common questions about our services and cybersecurity
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                <span className="text-lg font-medium text-gray-900 dark:text-white">How do I reset my password?</span>
                <HelpCircle className="h-5 w-5 text-cyber-accent" />
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  You can reset your password by clicking on the "Forgot Password" link on the login page. 
                  You'll receive an email with instructions to create a new password. For security reasons, 
                  password reset links expire after 24 hours.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                <span className="text-lg font-medium text-gray-900 dark:text-white">What should I do if I suspect a security breach?</span>
                <HelpCircle className="h-5 w-5 text-cyber-accent" />
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  If you suspect a security breach, contact our emergency support line immediately at +123 456 7890. 
                  Our security team is available 24/7 to assist with incident response. You should also isolate affected 
                  systems if possible and document all observations related to the suspected breach.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                <span className="text-lg font-medium text-gray-900 dark:text-white">How can I subscribe to security alerts?</span>
                <HelpCircle className="h-5 w-5 text-cyber-accent" />
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  You can subscribe to our security alerts by creating an account and selecting the alert preferences 
                  in your user profile. We offer alerts for different categories including vulnerabilities, 
                  threat intelligence, and best practice updates. You can receive these via email or push notifications.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                <span className="text-lg font-medium text-gray-900 dark:text-white">Do you offer consulting services?</span>
                <HelpCircle className="h-5 w-5 text-cyber-accent" />
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, we offer a range of cybersecurity consulting services including security assessments, 
                  penetration testing, compliance readiness, and security strategy development. Contact our 
                  sales team at sales@cybersecurehub.com to discuss your specific needs and get a custom quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Support CTA */}
      <section className="py-16 bg-cyber-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Still Need Help?</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Our support team is ready to assist you with any questions or issues you may have
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-cyber-primary hover:bg-gray-100">
              <Mail className="mr-2 h-4 w-4" />
              Email Support
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              <Phone className="mr-2 h-4 w-4" />
              Call Support
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
