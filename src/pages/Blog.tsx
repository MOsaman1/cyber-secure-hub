import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Search, Tag, Clock, ChevronRight, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Zero-Day Vulnerabilities and How to Protect Against Them",
      excerpt: "Zero-day vulnerabilities represent one of the most serious cybersecurity threats organizations face today. This article explores what they are and practical strategies to mitigate their impact.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80",
      category: "Security Threats",
      tags: ["Vulnerabilities", "Defense Strategies", "Patch Management"],
      date: "June 5, 2023",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Psychology of Social Engineering: Why Even Smart People Fall for Scams",
      excerpt: "Social engineering attacks continue to be highly effective because they exploit fundamental human psychology. Learn the cognitive biases that scammers leverage and how to recognize manipulation techniques.",
      image: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80",
      category: "Social Engineering",
      tags: ["Phishing", "Psychology", "Training"],
      date: "May 22, 2023",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Implementing a Zero Trust Architecture: From Theory to Practice",
      excerpt: "Zero Trust has become a buzzword, but many organizations struggle with practical implementation. This comprehensive guide breaks down the process into manageable steps for any size business.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80",
      category: "Best Practices",
      tags: ["Zero Trust", "Architecture", "Implementation"],
      date: "May 14, 2023",
      readTime: "12 min read"
    },
    {
      id: 4,
      title: "Quantum Computing and the Future of Encryption: Are We Prepared?",
      excerpt: "Quantum computing threatens to break many current encryption standards. Explore the implications for cybersecurity and what organizations should be doing today to prepare for the quantum future.",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80",
      category: "Emerging Threats",
      tags: ["Quantum Computing", "Encryption", "Future Tech"],
      date: "May 3, 2023",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "GDPR Compliance: A Practical Guide for Small Businesses",
      excerpt: "Many small businesses struggle with GDPR requirements. This no-nonsense guide covers the essential steps to compliance without overwhelming technical jargon or complex legal terminology.",
      image: "https://images.unsplash.com/photo-1568290747765-1b4a45675799?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80",
      category: "Compliance",
      tags: ["GDPR", "Data Protection", "Regulation"],
      date: "April 26, 2023", 
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "The Evolution of Ransomware: From WannaCry to Modern Extortion Techniques",
      excerpt: "Ransomware attacks have evolved dramatically in recent years. Learn how these attacks have changed, what modern tactics look like, and how to develop a robust ransomware defense strategy.",
      image: "https://images.unsplash.com/photo-1496947850313-7743325fa58c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=650&q=80",
      category: "Security Threats",
      tags: ["Ransomware", "Incident Response", "Backup Strategies"],
      date: "April 18, 2023",
      readTime: "11 min read"
    },
  ];

  // Categories
  const categories = ["All", "Security Threats", "Best Practices", "Social Engineering", "Compliance", "Emerging Threats"];
  
  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      {/* Blog Header */}
      <section className="bg-cyber-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">CyberSecure Blog</h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest insights, research, and developments in the world of cybersecurity
            </p>
            
            {/* Search */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="flex">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    className="pl-10 pr-4 py-3 rounded-l-md border-r-0 bg-white/10 border-white/20 text-white placeholder-gray-300 w-full focus:ring-cyber-accent focus:border-cyber-accent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* Blog Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Categories */}
          <div className="mb-12">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <TabsList className="mb-4 sm:mb-0 bg-gray-100 dark:bg-gray-800 p-1 overflow-x-auto flex-nowrap">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="whitespace-nowrap"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className="flex items-center">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Filter size={16} className="mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              
              {/* All Categories Tab (default) */}
              <TabsContent value="All">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map(post => (
                    <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className="bg-cyber-primary hover:bg-cyber-primary/90">{post.category}</Badge>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                          <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary flex items-center">
                            Read Article
                            <ChevronRight size={16} className="ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              {/* Other category tabs - would use filtered content based on category */}
              {categories.slice(1).map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts
                      .filter(post => post.category === category)
                      .map(post => (
                        <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-5px]">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <Badge className="bg-cyber-primary hover:bg-cyber-primary/90">{post.category}</Badge>
                              <div className="flex items-center text-gray-500 text-xs">
                                <Clock size={14} className="mr-1" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                {post.date}
                              </span>
                              <Button variant="ghost" className="text-cyber-accent hover:text-cyber-primary flex items-center">
                                Read Article
                                <ChevronRight size={16} className="ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          {/* Pagination */}
          <div className="flex items-center justify-center mt-12">
            <div className="join">
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-l-md text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Previous</button>
              <button className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-700 text-sm font-medium bg-cyber-primary text-white">1</button>
              <button className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-700 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">2</button>
              <button className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-700 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">3</button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-r-md text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Next</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Subscribe to our newsletter</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Get the latest cybersecurity insights delivered directly to your inbox. We send out weekly 
                    updates on emerging threats, best practices, and exclusive content.
                  </p>
                  <form className="mt-6">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="sm:max-w-md flex-grow"
                        required
                      />
                      <Button className="bg-cyber-primary hover:bg-cyber-secondary text-white">
                        Subscribe
                      </Button>
                    </div>
                    <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </form>
                </div>
              </div>
              <div className="hidden md:block bg-cyber-primary digital-pattern">
                <div className="h-full flex items-center justify-center">
                  <div className="p-10 text-center">
                    <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                      <Tag className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">What you'll get:</h4>
                    <ul className="mt-4 space-y-2 text-gray-200">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-cyber-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Weekly security briefings
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-cyber-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Early access to research
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-cyber-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Exclusive security tools
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-cyber-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Community updates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
