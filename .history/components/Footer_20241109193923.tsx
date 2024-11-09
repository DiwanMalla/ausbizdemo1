import { Button } from "@/components/ui/button";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-8  dark:text-white shadow-lg border-t">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">About AusBiz</h3>
            <p className="text-sm dark:text-gray-300">
              Empowering businesses with cutting-edge technology solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-sm dark:text-gray-300">info@ausbiz.com</p>
            <p className="text-sm dark:text-gray-300">+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline text-gray-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook">
                <FacebookIcon className="w-6 h-6 text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6 text-gray-300 hover:text-blue-700 transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-300">
            &copy; 2024 AusBiz. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
