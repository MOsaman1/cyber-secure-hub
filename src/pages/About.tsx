
import MainLayout from "@/components/layout/MainLayout";
import { Shield, User, Award, Globe, ChevronRight } from "lucide-react";

export default function About() {
  // Team members
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Chief Security Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      bio: "15+ years experience in cybersecurity. Former security advisor for Fortune 500 companies.",
    },
    {
      name: "Jordan Lee",
      role: "Security Researcher",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      bio: "Specializes in vulnerability research and penetration testing with focus on cloud infrastructure.",
    },
    {
      name: "Taylor Rivers",
      role: "Content Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      bio: "Award-winning tech journalist covering cybersecurity trends and emerging threats.",
    },
    {
      name: "Morgan Zhang",
      role: "Training Specialist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      bio: "Certified security trainer with expertise in building security awareness programs.",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-cyber-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About CyberSecure Hub</h1>
            <p className="mt-6 text-xl text-gray-300">
              We are dedicated to making cybersecurity knowledge accessible to everyone, helping
              individuals and organizations protect their digital assets in an increasingly complex threat landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cyber-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                At CyberSecure Hub, our mission is to democratize cybersecurity knowledge and empower individuals and organizations 
                with the tools, information, and resources they need to protect themselves in the digital world.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We believe that cybersecurity is not just a technical challenge but a human one. Through education, 
                awareness, and practical guidance, we help bridge the gap between complex security concepts and 
                everyday digital practices.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-cyber-accent/20 flex items-center justify-center">
                <Shield size={120} className="text-cyber-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyber-primary">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              The principles that guide our work and commitment to cybersecurity excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-cyber-accent/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-cyber-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyber-primary">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to providing accurate, unbiased information that our audience can trust. 
                We maintain the highest ethical standards in all our educational content and recommendations.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-cyber-accent/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-cyber-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyber-primary">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe cybersecurity knowledge should be accessible to everyone. We translate complex 
                technical concepts into clear, practical guidance that people of all backgrounds can understand.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 rounded-full bg-cyber-accent/20 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-cyber-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyber-primary">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in everything we do, from our educational content to our 
                community engagement. We continuously update our knowledge to stay at the forefront 
                of cybersecurity developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cyber-primary">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Cybersecurity experts dedicated to sharing knowledge and building a safer digital world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-cyber-accent text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
                  <button className="mt-4 inline-flex items-center text-cyber-primary hover:text-cyber-accent text-sm font-medium">
                    Full Profile
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-cyber-primary mb-6">Our History</h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  CyberSecure Hub was founded in 2018 by a team of cybersecurity professionals who saw 
                  the growing need for accessible and practical security education for individuals and small businesses.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  What started as a small blog has grown into a comprehensive resource hub with training materials, 
                  research articles, and community forums dedicated to cybersecurity awareness and education.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Today, we serve over 500,000 monthly visitors and have helped countless organizations 
                  improve their security posture through accessible, actionable guidance.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyber-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">2018: Foundation</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    CyberSecure Hub launches as a blog focused on practical cybersecurity advice.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyber-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">2020: Expansion</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Growth to a full education platform with courses and community forums.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyber-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">2022: Global Reach</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Expansion to international markets with content in multiple languages.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyber-primary text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">2023: Innovation</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    Launch of interactive training tools and security assessment resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cyber-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Join Our Community</h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with like-minded security professionals and enthusiasts. Stay updated on the latest 
            threats and best practices in cybersecurity.
          </p>
          <div className="mt-8">
            <button className="bg-white text-cyber-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md shadow-md">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
