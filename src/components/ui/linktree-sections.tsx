"use client";

import { ExternalLink, Instagram, Video, Users, Mail } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function LinktreeSections() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 relative">

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 relative">
        <LinkSection
          area="md:col-span-2"
          icon={<ExternalLink className="h-5 w-5" />}
          title="VibeCode"
          description="My startup - revolutionizing coding experiences"
          href="https://vibecoding.cash"
          size="large"
        />
        <LinkSection
          icon={<Instagram className="h-5 w-5" />}
          title="Instagram"
          description="Follow my daily adventures and content ✨"
          href="https://www.instagram.com/slfdspln/?hl=en"
        />
        <LinkSection
          icon={<Video className="h-5 w-5" />}
          title="TikTok"
          description="Quick tips and fun creative content"
          href="https://www.tiktok.com/@slfdsplnn"
        />
        <LinkSection
          icon={<Users className="h-5 w-5" />}
          title="Community Discord"
          description="Join our growing community of creators"
          href="https://discord.gg/ATnjZpHe"
        />
        <LinkSection
          icon={<Video className="h-5 w-5" />}
          title="YouTube Channel"
          description="Subscribe for tutorials and vlogs"
          href="https://www.youtube.com/@Slfdspln"
        />
        <LinkSection
          area="md:col-span-2"
          icon={<Mail className="h-5 w-5" />}
          title="Collaborate With Me"
          description="Let's create something amazing together - reach out for partnerships and collaborations 💕"
          href="mailto:inaliaashanti@gmail.com"
          size="large"
        />
      </ul>

      <div className="mt-8 flex justify-center">
        <SocialChips />
      </div>
    </div>
  );
}

interface LinkSectionProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  size?: "default" | "large";
}

const LinkSection = ({ area, icon, title, description, href, size = "default" }: LinkSectionProps) => {
  return (
    <li className={cn("list-none", area)}>
      <a
        href={href}
        className={cn(
          "block relative rounded-[1.25rem] border-[0.75px] p-2 transition-transform hover:scale-[1.02] focus:scale-[1.02] focus:outline-none",
          size === "large" ? "min-h-[10rem] md:rounded-[1.5rem] md:p-3" : "h-[8rem] md:rounded-[1.25rem]",
"border-rose-400 bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 dark:from-rose-950 dark:via-pink-950 dark:to-rose-900 shadow-lg"
        )}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
          movementDuration={1.5}
        />
        <div className={cn(
          "relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] p-4 shadow-sm",
          size === "large" ? "md:p-6" : "md:p-5",
"bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 border-rose-300 dark:from-rose-950 dark:via-pink-950 dark:to-rose-900 dark:border-rose-700 shadow-inner"
        )}>
          <div className="flex items-start justify-between">
            <div className={cn(
              "w-fit rounded-lg border-[0.75px] p-2",
"border-rose-400 bg-gradient-to-br from-rose-200 to-pink-300 text-rose-900 dark:from-rose-800 dark:to-pink-800 dark:text-rose-100 shadow-sm"
            )}>
              {icon}
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground opacity-60" />
          </div>
          <div className="space-y-2">
            <h3 className={cn(
              "font-semibold font-sans tracking-[-0.02em] text-foreground leading-tight",
              size === "large" ? "text-xl md:text-2xl" : "text-lg md:text-xl"
            )}>
              {title}
            </h3>
            <p className={cn(
              "font-sans text-muted-foreground leading-relaxed",
              size === "large" ? "text-sm md:text-base" : "text-sm"
            )}>
              {description}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

const SocialChips = () => {
  const socials = [
    { icon: "📸", label: "Instagram", href: "https://www.instagram.com/slfdspln/?hl=en" },
    { icon: "💻", label: "GitHub", href: "https://github.com/Slfdspln" },
    { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/cristal-rivera-662b58248/" },
    { icon: "🎵", label: "TikTok", href: "https://www.tiktok.com/@slfdsplnn" },
  ];

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="relative group"
        >
          <div className="relative rounded-full border-[0.75px] border-pink-200 dark:border-pink-800 p-1 transition-transform hover:scale-110 focus:scale-110 focus:outline-none">
            <GlowingEffect
              spread={30}
              glow={true}
              disabled={false}
              proximity={32}
              inactiveZone={0}
              borderWidth={1}
              movementDuration={1}
            />
            <div className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border border-pink-200 dark:border-pink-800 px-4 py-2 shadow-sm">
              <span className="text-base">{social.icon}</span>
              <span className="text-sm font-medium text-pink-800 dark:text-pink-200">{social.label}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};