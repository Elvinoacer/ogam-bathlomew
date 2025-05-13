import Link from "next/link";
import { Mail, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link
        href={`mailto:${siteConfig.email}`}
        aria-label="Email"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <Mail className="h-5 w-5" />
      </Link>
      {/* github */}
      <Link
        href={siteConfig.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <Github className="h-5 w-5" />
      </Link>
      {/* linkedin */}
      <Link
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      {/* whatsapp */}
      <Link
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
      </Link>
      {/* twitter */}
      <Link
        href={siteConfig.links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </Link>
    </div>
  );
}
