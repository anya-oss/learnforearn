"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, Search, ShoppingBasket, Package, Truck, MapPin, Clock, Play, CheckCircle2, Star, TrendingUp, Users, DollarSign, GraduationCap, Video } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  icon: React.ElementType;
  title: string;
  duration: string;
  lessons: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ icon: Icon, title, duration, lessons }) => {
  return (
    <motion.div
      className="group relative flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-accent/50 transition-all duration-300"
      whileHover={{ x: 4 }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <Video className="w-3 h-3" />
            {lessons} lessons
          </span>
        </div>
      </div>
      <CheckCircle2 className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const navigation = [
  { name: "Home", href: "#" },
  { name: "Course", href: "#" },
  { name: "Curriculum", href: "#" },
  { name: "Testimonials", href: "#" },
];

const modules = [
  { icon: GraduationCap, title: "Introduction to Dropshipping", duration: "2h 30m", lessons: 8 },
  { icon: Package, title: "Finding Winning Products", duration: "3h 15m", lessons: 12 },
  { icon: TrendingUp, title: "Marketing & Advertising", duration: "4h 00m", lessons: 15 },
  { icon: DollarSign, title: "Scaling Your Business", duration: "2h 45m", lessons: 10 },
];

const features = [
  "Lifetime access to course content",
  "24/7 community support",
  "Weekly live Q&A sessions",
  "Exclusive supplier database",
  "Marketing templates & tools",
  "Certificate of completion",
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    text: "This course changed my life! Made $10k in my first month.",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "Best investment I've ever made. The strategies actually work!",
  },
  {
    name: "Emma Davis",
    role: "Dropshipper",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Clear, actionable content. Started making sales within a week.",
  },
];

const stats = [
  { label: "Students Enrolled", value: "5,000+", icon: Users },
  { label: "Success Rate", value: "94%", icon: TrendingUp },
  { label: "Avg. First Month", value: "$8k+", icon: DollarSign },
];

export function DropshipComponent() {
  return (
    <div className="w-full relative container px-2 mx-auto max-w-7xl min-h-screen">
      <div className="mt-6 bg-accent/50 rounded-2xl relative">
        <header className="flex items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-background/95 backdrop-blur-sm p-4 rounded-br-2xl flex items-center gap-2">
            <a href="#" className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              DropShip Academy
            </a>

            <nav className="hidden lg:flex items-center justify-between w-full">
              {navigation.map((item) => (
                <Button 
                  key={item.name} 
                  variant="link" 
                  className="cursor-pointer relative group hover:text-primary transition-colors"
                >
                  {item.name}
                </Button>
              ))}
              <Button className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Enroll Now
              </Button>
            </nav>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden ml-auto">
                <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] p-0 bg-background/95 backdrop-blur-md border-r border-border/50"
              >
                <SheetHeader className="p-6 text-left border-b border-border/50">
                  <SheetTitle className="flex items-center justify-between">
                    <a href="#" className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      DropShip Academy
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-6 space-y-1">
                  {navigation.map((item) => (
                    <Button 
                      key={item.name}
                      variant="ghost" 
                      className="justify-start px-2 h-12 text-base font-medium hover:bg-accent/50 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Button>
                  ))}
                </nav>
                <Separator className="mx-6" />
                <div className="p-6 flex flex-col gap-4">
                  <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors">
                    <GraduationCap className="w-4 h-4" />
                    View Curriculum
                  </Button>
                  <Button variant="outline" className="justify-start gap-2 h-12 hover:bg-accent/50 transition-colors relative">
                    <Star className="w-4 h-4" />
                    Reviews
                  </Button>
                </div>
                <Separator className="mx-6" />
                <div className="p-6">
                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Enroll Now
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex w-1/2 justify-end items-center pr-4 gap-4 ml-auto">
            <Button
              variant="secondary"
              className="cursor-pointer bg-primary-foreground p-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="pl-4 py-2 text-sm font-medium">Enroll Now</span>
              <div className="rounded-full flex items-center justify-center m-auto bg-background w-10 h-10 ml-2 group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </header>

        <motion.section
          className="w-full px-4 py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                Master Dropshipping
              </span>
              <br />
              <span className="text-foreground">
                & Build a 6-Figure Business
              </span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Learn the exact strategies I used to build a profitable dropshipping empire. Step-by-step guidance, proven methods, and lifetime support to help you succeed.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50"
              >
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      <div className="mt-12 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Course Curriculum
          </span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          12+ hours of content • 45 lessons • Lifetime access
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-20">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1, ease: "easeOut" }}
            >
              <ModuleCard {...module} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-accent/50 aspect-video flex items-center justify-center group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
              alt="Course preview"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">What You'll Get</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Student Success Stories
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Join thousands of successful dropshippers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border bg-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg text-muted-foreground mb-6">Limited spots available this month</p>
          <div className="flex items-baseline justify-center gap-2 mb-6">
            <span className="text-5xl font-bold text-primary">$497</span>
            <span className="text-2xl line-through text-muted-foreground">$997</span>
          </div>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto">
            Enroll Now & Save 50%
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">30-day money-back guarantee • No questions asked</p>
        </motion.div>
      </div>
    </div>
  );
}

export default function DropshipDemo() {
  return <DropshipComponent />;
}
