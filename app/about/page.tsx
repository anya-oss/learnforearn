"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Users, Award, TrendingUp, Lightbulb, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower entrepreneurs worldwide with the knowledge and tools needed to build successful dropshipping businesses.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve, constantly updating our curriculum with the latest strategies and market insights.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We believe in building a supportive community where students can learn, grow, and succeed together.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We're committed to providing the highest quality education and resources to help you achieve your goals.",
  },
];

const stats = [
  { label: "Students Taught", value: "500+", icon: Users },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
  { label: "Years of Experience", value: "5+", icon: Award },
];

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            About LearnForEarn
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize entrepreneurship and help thousands of people build profitable online businesses through dropshipping.
          </p>
        </motion.div>

        <Separator className="my-12" />

        {/* Our Story */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                LearnForEarn was founded with a simple yet powerful vision: to make entrepreneurship accessible to everyone, regardless of their background or experience level.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our founder started their dropshipping journey with just $100 and a dream. Through years of trial and error, learning from mistakes, and refining strategies, they built a successful 6-figure business. But they realized that the path to success didn't have to be as difficult as it was for them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's why LearnForEarn was created - to share the exact strategies, tools, and insights that led to success, so others could achieve their goals faster and with less struggle.
              </p>
            </div>
          </motion.div>
        </section>

        <Separator className="my-12" />

        {/* Stats */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-card rounded-xl border border-border/50"
                >
                  <stat.icon className="w-10 h-10 text-primary mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Separator className="my-12" />

        {/* Values */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border/50 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Separator className="my-12" />

        {/* What We Offer */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What We Offer</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                At LearnForEarn, we provide comprehensive training that covers every aspect of building a successful dropshipping business:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Step-by-step video tutorials from industry experts</li>
                <li>Proven strategies for finding winning products</li>
                <li>Marketing and advertising techniques that actually work</li>
                <li>Scaling strategies to grow your business</li>
                <li>24/7 community support and weekly Q&A sessions</li>
                <li>Exclusive access to supplier databases</li>
                <li>Marketing templates and tools to accelerate your success</li>
              </ul>
            </div>
          </motion.div>
        </section>

        <Separator className="my-12" />

        {/* Why Choose Us */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Choose LearnForEarn?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're not just another online course. We're a community of entrepreneurs committed to your success:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Real Results:</strong> Our methods are tested and proven by real students who have built successful businesses</li>
                <li><strong>Lifetime Access:</strong> Once you enroll, you have access to all course materials for life, including future updates</li>
                <li><strong>Active Community:</strong> Join a thriving community of like-minded entrepreneurs who support each other</li>
                <li><strong>Regular Updates:</strong> We continuously update our content to reflect the latest trends and strategies</li>
                <li><strong>30-Day Guarantee:</strong> We're so confident in our course that we offer a full money-back guarantee</li>
              </ul>
            </div>
          </motion.div>
        </section>

        <Separator className="my-12" />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
        >
          <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of successful students who have transformed their lives through dropshipping.
          </p>
          <Button 
            size="lg" 
            onClick={() => window.open("https://whop.com/dropship-academy-lean-for-earn/the-complete-dropship-mastery", '_blank', 'noopener,noreferrer')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
          >
            Enroll Now
          </Button>
        </motion.section>
      </div>
    </div>
  );
}

