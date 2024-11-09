import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

export default function Footer({ isDarkMode, toggleDarkMode }) {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">About AusBiz</h3>
            <p className="text-sm">
              Empowering businesses with cutting-edge technology solutions
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">info@ausbiz.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <p className="text-sm">&copy; 2024 AusBiz. All rights reserved.</p>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <SunIcon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
