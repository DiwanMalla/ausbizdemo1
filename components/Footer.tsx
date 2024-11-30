import { Button } from "@/components/ui/button";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 dark:text-white shadow-lg border-t">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Footer Content */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              About AusBiz
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              info@ausbiz.com
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              +1 (555) 123-4567
            </p>
          </div>
          {/* Legal Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:underline dark:text-gray-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:underline dark:text-gray-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          {/* Social Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-blue-700 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom Section */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-4">
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
            &copy; 2024 AusBiz. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <Button className="bg-primary text-white dark:text-black hover:bg-primary/90 px-4 py-2 text-sm">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
