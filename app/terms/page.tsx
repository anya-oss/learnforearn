"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    // Only set date on client side to avoid hydration mismatch
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          {lastUpdated && (
            <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
          )}

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using LearnForEarn ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily access the materials on LearnForEarn's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Course Access and Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upon enrollment, you will receive lifetime access to the course content. However, we reserve the right to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Update, modify, or remove course content at any time</li>
              <li>Restrict access if terms of service are violated</li>
              <li>Make changes to the course structure or curriculum</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All course materials are for personal use only and may not be shared, distributed, or resold.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer a 30-day money-back guarantee. If you are not satisfied with the course within 30 days of purchase, you may request a full refund.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To request a refund, please contact our support team with your purchase details. Refunds will be processed within 5-10 business days.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account with us, you must provide accurate and complete information. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Maintaining the security of your account and password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may not use our Service:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of LearnForEarn and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The information on this website and in the course is provided on an "as is" basis. To the fullest extent permitted by law, LearnForEarn:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Excludes all representations, warranties, and conditions relating to our website and the use of this website</li>
              <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not guarantee specific results from following the course content. Individual results may vary.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall LearnForEarn, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Email: support@learnforearn.com<br />
              Website: www.learnforearn.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

