import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Briefcase, Users, GraduationCap, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-6 text-github-blue" data-testid="text-contact-title">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-grey dark:text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Ready to discuss AI opportunities, collaborate on innovative projects, or simply connect with a fellow tech enthusiast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-8 text-github-blue" data-testid="text-contact-info-title">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4" data-testid="contact-info-email">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-github-blue" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-slate-grey dark:text-muted-foreground">vchand@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-info-linkedin">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                  <Linkedin className="h-5 w-5 text-success-green" />
                </div>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-slate-grey dark:text-muted-foreground">/in/vishal-chand-a17124139</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-info-github">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                  <Github className="h-5 w-5 text-slate-grey" />
                </div>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <p className="text-slate-grey dark:text-muted-foreground">/Vishalchand0808</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4" data-testid="contact-info-location">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-highlight-orange" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-slate-grey dark:text-muted-foreground">Guwahati, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4" data-testid="text-available-for-title">
                Available For
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 shadow-md" data-testid="card-available-fulltime">
                  <CardContent className="p-0">
                    <Briefcase className="h-5 w-5 text-github-blue mb-2" />
                    <p className="font-medium text-sm">Full-time Roles</p>
                  </CardContent>
                </Card>
                <Card className="p-4 shadow-md" data-testid="card-available-collaborations">
                  <CardContent className="p-0">
                    <Users className="h-5 w-5 text-success-green mb-2" />
                    <p className="font-medium text-sm">Collaborations</p>
                  </CardContent>
                </Card>
                <Card className="p-4 shadow-md" data-testid="card-available-research">
                  <CardContent className="p-0">
                    <GraduationCap className="h-5 w-5 text-highlight-orange mb-2" />
                    <p className="font-medium text-sm">Research Projects</p>
                  </CardContent>
                </Card>
                <Card className="p-4 shadow-md" data-testid="card-available-discussions">
                  <CardContent className="p-0">
                    <MessageCircle className="h-5 w-5 text-slate-grey mb-2" />
                    <p className="font-medium text-sm">Tech Discussions</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-github-blue" data-testid="text-contact-form-title">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full"
                      data-testid="input-contact-subject"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or question..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full"
                      data-testid="textarea-contact-message"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-github-blue hover:bg-github-blue/90 text-white py-3 font-semibold transition-all duration-200 transform hover:scale-105"
                    data-testid="button-contact-submit"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
