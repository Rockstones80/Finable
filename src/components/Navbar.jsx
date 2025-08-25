import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Menu, X, User, ChevronDown, LogOut, Settings, Heart, CreditCard, Bell } from 'lucide-react';
import Button from "./button"

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle this to test logged in state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleLogin = () => {
    navigate('/auth?mode=login');
    closeDropdowns();
  };

  const handleSignup = () => {
    navigate('/auth?mode=signup');
    closeDropdowns();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    closeDropdowns();
  };

  const handleStartCampaign = () => {
    navigate('/auth?mode=login');
    closeDropdowns();
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleHowToGive = () => {
    navigate('/how-it-works');
    closeDropdowns();
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleSuccessStories = () => {
    navigate('/students/success-guide');
    closeDropdowns();
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="header sticky top-0 z-50">
      <nav className="bg-white/95 backdrop-blur-sm w-full shadow-sm border-b border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <a href="/" className="text-green-600 text-2xl font-bold hover:text-green-700 transition-colors duration-200">
                Finable
              </a>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex lg:items-center lg:space-x-1">
              <a
                href="/browse"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                Browse Campaigns
              </a>
              <a
                href="/how-it-works"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                How It Works
              </a>
              <button
                onClick={handleSuccessStories}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                Success Stories
              </button>
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
              >
                About Us
              </a>
              
              {/* For Students Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('students')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-50 flex items-center gap-1"
                >
                  For Students
                  <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'students' && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50" >
                    <button 
                      onClick={handleStartCampaign}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      Start a Campaign
                    </button>
                    <a href="/students/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                      Resources & Tips
                    </a>
                    <a href="/students/success-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                      Success Guide
                    </a>
                  </div>
                )}
              </div>

              {/* For Donors Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('donors')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-50 flex items-center gap-1"
                >
                  For Donors
                  <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'donors' && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                    <a href="/donors/browse" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                      Browse Students
                    </a>
                    <button 
                      onClick={handleHowToGive}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      How to Give
                    </button>
                    <a href="/donors/impact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                      Your Impact
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Right Action Buttons / User Menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-3">
              {!isLoggedIn ? (
                <>
                  <button 
                    onClick={handleLogin}
                    className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-gray-50"
                  >
                    Login
                  </button>
                  <Button onClick={handleSignup} className="px-4 py-2 text-sm font-medium">
                    Sign up
                  </Button>
                </>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('userMenu')}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      J
                    </div>
                    <span className="text-sm font-medium">John Doe</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  
                  {activeDropdown === 'userMenu' && (
                    <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">John Doe</p>
                        <p className="text-xs text-gray-500">john@example.com</p>
                      </div>
                      <a href="/dashboard" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                        <User className="w-4 h-4" />
                        My Dashboard
                      </a>
                      <a href="/campaigns" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                        <Heart className="w-4 h-4" />
                        My Campaigns
                      </a>
                      <a href="/donations" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                        <CreditCard className="w-4 h-4" />
                        Donation History
                      </a>
                      <a href="/notifications" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                        <Bell className="w-4 h-4" />
                        Notifications
                      </a>
                      <a href="/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                        <Settings className="w-4 h-4" />
                        Account Settings
                      </a>
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button 
                          onClick={handleLogout}
                          className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-sm shadow-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                <a
                  href="/browse"
                  className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                  onClick={toggleMenu}
                >
                  Browse Campaigns
                </a>
                <a
                  href="/how-it-works"
                  className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                  onClick={toggleMenu}
                >
                  How It Works
                </a>
                <button
                  onClick={handleSuccessStories}
                  className="block w-full text-left text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  Success Stories
                </button>
                <a
                  href="/about"
                  className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
                <a
                  href="/safety"
                  className="block text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                  onClick={toggleMenu}
                >
                  Safety & Trust
                </a>
              </div>

              {/* Mobile Dropdowns */}
              <div className="border-t border-gray-100 pt-3">
                <h3 className="text-sm font-semibold text-gray-900 px-3 mb-2">For Students</h3>
                <div className="space-y-1 ml-3">
                  <button 
                    onClick={handleStartCampaign}
                    className="block w-full text-left text-gray-500 hover:text-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Start a Campaign
                  </button>
                  <a href="/students/resources" className="block text-gray-500 hover:text-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-50 transition-colors">
                    Resources & Tips
                  </a>
                  <a href="/students/success-guide" className="block text-gray-500 hover:text-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-50 transition-colors">
                    Success Guide
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-3">
                <h3 className="text-sm font-semibold text-gray-900 px-3 mb-2">For Donors</h3>
                <div className="space-y-1 ml-3">
                  <a href="/donors/browse" className="block text-gray-500 hover:text-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-50 transition-colors">
                    Browse Students
                  </a>
                  <button 
                    onClick={handleHowToGive}
                    className="block w-full text-left text-gray-500 hover:text-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-50 transition-colors"
                  >
                    How to Give
                  </button>
                  <a href="/donors/impact" className="block text-gray-500 hover:text-gray-700 px-3 py-1 text-sm rounded-md hover:bg-gray-50 transition-colors">
                    Your Impact
                  </a>
                </div>
              </div>

              {/* Mobile Auth Buttons */}
              {!isLoggedIn ? (
                <div className="border-t border-gray-100 pt-3 space-y-2">
                  <button 
                    onClick={() => {
                      handleLogin();
                      toggleMenu();
                    }}
                    className="w-full text-left text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Login
                  </button>
                  <Button 
                    onClick={() => {
                      handleSignup();
                      toggleMenu();
                    }}
                    className="w-full text-sm font-medium"
                  >
                    Sign up
                  </Button>
                </div>
              ) : (
                <div className="border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-3 px-3 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      J
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">john@example.com</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <a href="/dashboard" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-3 py-2 text-sm rounded-md hover:bg-gray-50 transition-colors">
                      <User className="w-4 h-4" />
                      My Dashboard
                    </a>
                    <a href="/campaigns" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-3 py-2 text-sm rounded-md hover:bg-gray-50 transition-colors">
                      <Heart className="w-4 h-4" />
                      My Campaigns
                    </a>
                    <a href="/donations" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-3 py-2 text-sm rounded-md hover:bg-gray-50 transition-colors">
                      <CreditCard className="w-4 h-4" />
                      Donation History
                    </a>
                    <a href="/settings" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 px-3 py-2 text-sm rounded-md hover:bg-gray-50 transition-colors">
                      <Settings className="w-4 h-4" />
                      Account Settings
                    </a>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-3 text-red-600 hover:text-red-700 px-3 py-2 text-sm rounded-md hover:bg-red-50 transition-colors w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Click outside to close dropdowns */}
        {activeDropdown && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={closeDropdowns}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;