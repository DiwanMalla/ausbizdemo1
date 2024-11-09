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
    <footer className="w-full py-8 bg-gray-900 text-white dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">About AusBiz</h3>
            <p className="text-sm text-gray-400">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-400">info@ausbiz.com</p>
            <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline text-gray-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            &copy; 2024 AusBiz. All rights reserved.
          </p>
          <Button variant="outline" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <SunIcon className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
            ) : (
              <MoonIcon className="h-[1.2rem] w-[1.2rem] text-gray-400" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
