"use client";

import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import GradientText from "@/components/animations/GradientText";
import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    { name: "Alex Chen", role: "Founder & CEO", image: "001-hero.svg" },
    { name: "Sarah Kim", role: "Design Lead", image: "002-secondary.svg" },
    { name: "Marcus Rivera", role: "Tech Lead", image: "001-hero.svg" },
    { name: "Emily Zhang", role: "Project Manager", image: "002-secondary.svg" },
  ];

  const values = [
    { title: "Quality First", icon: "⭐", description: "We never compromise on code quality or design excellence." },
    { title: "Transparency", icon: "🔍", description: "Clear communication, honest timelines, and no surprises." },
    { title: "Innovation", icon: "💡", description: "Leveraging cutting-edge tech to stay ahead of the curve." },
    { title: "Results-Driven", icon: "📈", description: "Every decision is measured against business outcomes." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                About <GradientText>WebAgency</GradientText>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Passionate experts building digital experiences that matter.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <PlaceholderImage
              page="06-about"
              imageFile="001-hero.svg"
              alt="About our team"
              className="max-w-4xl mx-auto"
            />
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower businesses with world-class web solutions that drive growth, 
              enhance user experience, and deliver measurable results. We believe every 
              project deserves cutting-edge technology, beautiful design, and a team 
              that truly cares about success.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">
              Our <GradientText>Values</GradientText>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScaleIn key={value.title} delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">
              Meet the <GradientText>Team</GradientText>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScaleIn key={member.name} delay={index * 100}>
                <div className="text-center">
                  <PlaceholderImage
                    page="06-about"
                    imageFile={member.image}
                    alt={member.name}
                    className="mb-4 rounded-full overflow-hidden aspect-square"
                  />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to bring your vision to life?
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-lg transition-colors text-lg"
            >
              Start a Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
