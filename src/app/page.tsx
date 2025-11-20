"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Camera, DollarSign, Edit, Facebook, HelpCircle, Heart, Image, Instagram, Mail, MessageCircle, Palette, Star, Zap } from "lucide-react";

export default function PhotoGalleryPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="small"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Gallery", id: "gallery" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="PhotoGallery"
          button={{
            text: "Book Session",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Capturing Life's Beautiful Moments"
          description="Professional photography services for portraits, events, and special occasions with artistic vision and technical excellence"
          tag="Photography Studio"
          tagIcon={Camera}
          buttons={[
            {
              text: "View Gallery",
              href: "gallery"
            },
            {
              text: "Book Session",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651362938-0e35enkk.jpg",
              imageAlt: "Professional portrait photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651364357-tcv83g5f.jpg",
              imageAlt: "Wedding photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651365538-d3slqwmm.jpg",
              imageAlt: "Landscape photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651366994-9qb10cdp.jpg",
              imageAlt: "Family portrait"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651368045-ks5bp4yb.jpg",
              imageAlt: "Nature photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651369032-b9nj9e7h.jpg",
              imageAlt: "Event photography"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651370134-7evfhlzm.jpg",
              imageAlt: "Artistic portrait"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About My Work"
          description="With over 10 years of experience in photography, I specialize in capturing authentic moments and creating timeless images that tell your unique story"
          tag="My Story"
          tagIcon={Heart}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651383407-m6k52h70.jpg"
          imageAlt="Photography studio setup"
          buttons={[
            {
              text: "Learn More",
              href: "contact"
            }
          ]}
          bulletPoints={[
            {
              title: "Professional Experience",
              description: "10+ years capturing weddings, portraits, and events with artistic vision",
              icon: Award
            },
            {
              title: "High-Quality Equipment",
              description: "State-of-the-art cameras and lighting for exceptional image quality",
              icon: Camera
            },
            {
              title: "Creative Approach",
              description: "Unique perspective and artistic style that brings your vision to life",
              icon: Palette
            }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureCardEight
          title="Photography Collections"
          description="Explore my diverse portfolio of professional photography work"
          tag="Gallery"
          tagIcon={Image}
          textboxLayout="default"
          features={[
            {
              id: "1",
              title: "Portrait Photography",
              description: "Professional headshots and artistic portraits that capture personality and character",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651371087-opgmpktz.jpg",
              imageAlt: "Professional portrait photography"
            },
            {
              id: "2",
              title: "Landscape Photography",
              description: "Stunning natural landscapes and scenic views from around the world",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651373173-svxwqx01.jpg",
              imageAlt: "Scenic landscape photography"
            },
            {
              id: "3",
              title: "Event Photography",
              description: "Weddings, celebrations, and special moments documented with care and artistry",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651374368-douull9k.jpg",
              imageAlt: "Wedding event photography"
            }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Photography Services"
          description="Comprehensive photography services tailored to your needs"
          tag="Services"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Professional Equipment",
              description: "High-end cameras, lenses, and lighting equipment for exceptional image quality",
              icon: Camera,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Expert Editing",
              description: "Professional post-processing and retouching to enhance every image",
              icon: Edit,
              button: {
                text: "View Samples",
                href: "gallery"
              }
            },
            {
              title: "Fast Delivery",
              description: "Quick turnaround times with online gallery delivery for easy sharing",
              icon: Zap,
              button: {
                text: "Book Now",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Photography Packages"
          description="Choose the perfect package for your photography needs"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "portrait",
              badge: "Popular",
              badgeIcon: Star,
              price: "$299",
              subtitle: "Perfect for individual portraits",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "1-hour photo session",
                "20 edited high-resolution images",
                "Online gallery for sharing",
                "Print release included"
              ]
            },
            {
              id: "family",
              badge: "Best Value",
              badgeIcon: Heart,
              price: "$499",
              subtitle: "Ideal for family sessions",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "2-hour photo session",
                "40 edited high-resolution images",
                "Online gallery for sharing",
                "Print release included",
                "Location of your choice"
              ]
            },
            {
              id: "event",
              badge: "Premium",
              badgeIcon: Camera,
              price: "$899",
              subtitle: "Complete event coverage",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "Full event coverage",
                "100+ edited high-resolution images",
                "Online gallery for sharing",
                "Print release included",
                "Second photographer available"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Clients Say"
          description="Testimonials from satisfied clients who loved their photography experience"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              testimonial: "The photography session exceeded all my expectations. The photos captured our personalities perfectly and the quality was outstanding. Highly recommend!",
              name: "Sarah Johnson",
              role: "Bride",
              company: "Wedding Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651378902-vu6xe9pd.jpg",
              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",
              testimonial: "Professional service from start to finish. The headshots turned out amazing and really helped boost my business presence online.",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Corporate Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651380014-6aaowcxs.jpg",
              imageAlt: "Michael Chen testimonial"
            },
            {
              id: "3",
              testimonial: "Working with this photographer was a dream. They captured every special moment of our event with such artistry and attention to detail.",
              name: "Emily Rodriguez",
              role: "Event Planner",
              company: "EventCo",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651381245-hofm7l6f.jpg",
              imageAlt: "Emily Rodriguez testimonial"
            },
            {
              id: "4",
              testimonial: "Our family photos are absolutely beautiful. The photographer made everyone feel comfortable and the results speak for themselves.",
              name: "David Kim",
              role: "Father",
              company: "Family Client",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763651382269-30kvmju0.jpg",
              imageAlt: "David Kim testimonial"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about photography services and booking process"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How far in advance should I book a session?",
              content: "I recommend booking at least 2-4 weeks in advance to ensure availability, especially for weekends and during peak seasons like spring and fall."
            },
            {
              id: "2",
              title: "What's included in the session fee?",
              content: "The session fee includes the photography session, professional editing of selected images, an online gallery for viewing and downloading, and print release for personal use."
            },
            {
              id: "3",
              title: "How long does it take to receive photos?",
              content: "You'll receive your edited high-resolution images within 2-3 weeks after your session through a secure online gallery that you can share with family and friends."
            },
            {
              id: "4",
              title: "Do you offer prints and albums?",
              content: "Yes, I offer professional printing services and custom photo albums. Print packages and albums can be added to any session for an additional fee."
            },
            {
              id: "5",
              title: "What happens if weather is bad for outdoor sessions?",
              content: "For outdoor sessions, we can reschedule due to weather at no additional cost. I also have backup indoor location options and studio space available."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Let's Create Beautiful Photos Together"
          description="Ready to book your photography session? Fill out the form below and I'll get back to you within 24 hours to discuss your vision and schedule your shoot."
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "session_type",
              type: "text",
              placeholder: "Session Type (Portrait, Family, Event, etc.)",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your vision, preferred dates, and any special requests...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="PhotoGallery"
          copyrightText="© 2025 PhotoGallery. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Portrait Photography",
                  href: "gallery"
                },
                {
                  label: "Wedding Photography",
                  href: "gallery"
                },
                {
                  label: "Event Photography",
                  href: "gallery"
                },
                {
                  label: "Family Sessions",
                  href: "gallery"
                }
              ]
            },
            {
              title: "Information",
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/photogallery",
              ariaLabel: "Follow on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/photogallery",
              ariaLabel: "Follow on Facebook"
            },
            {
              icon: Mail,
              href: "mailto:hello@photogallery.com",
              ariaLabel: "Send email"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}