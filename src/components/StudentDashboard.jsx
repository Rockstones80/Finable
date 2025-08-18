import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../App'; // Import your actual useAuth hook
import { 
  BarChart3, 
  Heart, 
  Users, 
  DollarSign, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Share2, 
  Eye,
  Calendar,
  Target,
  Camera,
  Send,
  Edit3,
  Trash2,
  Bell,
  Settings,
  User,
  Upload,
  LogOut,
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area,  
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
 import Button from './button';

// TabButton component with PropTypes
const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
      isActive 
        ? 'bg-green-500 text-white shadow-md' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <Icon className="w-4 h-4" />
    {label}
  </button>
);

TabButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

// StatCard component with PropTypes
const StatCard = ({ title, value, icon: Icon, subtitle, change, changeType }) => (
  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-green-600 mt-1">{value}</p>
        {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        {change && (
          <p className={`text-sm mt-1 flex items-center gap-1 ${
            changeType === 'positive' ? 'text-green-600' : 'text-red-600'
          }`}>
            <TrendingUp className="w-3 h-3" />
            {change} from last week
          </p>
        )}
      </div>
      <div className="bg-green-100 p-3 rounded-full">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
    </div>
  </div>
);

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType.isRequired,
  subtitle: PropTypes.string,
  change: PropTypes.string,
  changeType: PropTypes.oneOf(['positive', 'negative'])
};

// Chart wrapper component with PropTypes
const ChartCard = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    {children}
  </div>
);

ChartCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

const StudentDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('overview');
  const [newPost, setNewPost] = useState({ type: 'text', content: '', title: '' });
  const [showShareModal, setShowShareModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showGoalModal, setShowGoalModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [newGoal, setNewGoal] = useState(user?.campaign?.goal || 800000);
  const [campaignTitle, setCampaignTitle] = useState(user?.campaign?.title || "Help me with Educational Funding");
  const [campaignDescription, setCampaignDescription] = useState(user?.campaign?.description || "Supporting my educational journey and future aspirations.");
  
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'donation',
      title: 'New Donation Received!',
      message: 'Anonymous donated ₦25,000 to your campaign',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'milestone',
      title: 'Campaign Milestone!',
      message: 'You\'ve reached 56% of your funding goal',
      time: '2 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'comment',
      title: 'New Comment',
      message: 'Someone commented on your latest post',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'share',
      title: 'Campaign Shared',
      message: 'Your campaign was shared 3 times today',
      time: '1 day ago',
      read: true
    }
  ]);

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    weeklyReports: true,
    donorMessages: true,
    campaignUpdates: true,
    profileVisibility: 'public',
    autoThankYou: false,
    currency: 'NGN',
    language: 'en'
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'text',
      title: 'Thank you for your support!',
      content: 'I am incredibly grateful for all the donations received so far. Your support is helping me get closer to my dream of studying Computer Science at the University of Lagos.',
      date: '2025-07-25',
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      type: 'video',
      title: 'My Academic Journey So Far',
      content: 'A short video explaining my educational background and future aspirations.',
      date: '2025-07-23',
      likes: 45,
      comments: 12
    }
  ]);

  // Use campaign data from user context or fallback to defaults
  const [campaignData, setCampaignData] = useState({
    totalRaised: user?.campaign?.raised || 450000,
    goal: user?.campaign?.goal || 800000,
    donors: user?.campaign?.donors || 67,
    daysLeft: user?.campaign?.daysLeft || 45,
    views: user?.campaign?.views || 1234,
    shares: user?.campaign?.shares || 89
  });

  // Enhanced chart data
  const dailyEngagementData = [
    { name: 'Jan 21', donations: 2, views: 45, amount: 35000, donors: 2 },
    { name: 'Jan 22', donations: 1, views: 32, amount: 15000, donors: 1 },
    { name: 'Jan 23', donations: 4, views: 78, amount: 85000, donors: 4 },
    { name: 'Jan 24', donations: 3, views: 56, amount: 42000, donors: 3 },
    { name: 'Jan 25', donations: 5, views: 89, amount: 125000, donors: 5 },
    { name: 'Jan 26', donations: 2, views: 34, amount: 28000, donors: 2 },
    { name: 'Jan 27', donations: 3, views: 67, amount: 55000, donors: 3 }
  ];

  const monthlyProgressData = [
    { month: 'Oct', raised: 45000, goal: 800000 },
    { month: 'Nov', raised: 125000, goal: 800000 },
    { month: 'Dec', raised: 280000, goal: 800000 },
    { month: 'Jan', raised: 450000, goal: 800000 }
  ];

  const donationSourceData = [
    { name: 'Social Media', value: 45, color: '#10B981' },
    { name: 'Direct Links', value: 30, color: '#3B82F6' },
    { name: 'Word of Mouth', value: 15, color: '#F59E0B' },
    { name: 'University Network', value: 10, color: '#EF4444' }
  ];

  const recentDonations = [
    { name: 'Anonymous', amount: 25000, date: '2025-07-27', message: 'Best of luck with your studies!' },
    { name: 'Mrs. Adebayo', amount: 15000, date: '2025-07-26', message: 'Education is the key to success.' },
    { name: 'John O.', amount: 50000, date: '2025-07-25', message: 'Keep pushing forward!' },
    { name: 'Anonymous', amount: 10000, date: '2025-07-24', message: 'You can do it!' }
  ];

  const handleLogout = () => {
    logout();
    navigate('/'); // Navigate to home page (Hero component)
  };

  const handlePostSubmit = () => {
    if (newPost.title && newPost.content) {
      const post = {
        id: posts.length + 1,
        ...newPost,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        comments: 0
      };
      setPosts([post, ...posts]);
      setNewPost({ type: 'text', content: '', title: '' });
    }
  };

  const handleShareCampaign = () => {
    setShowShareModal(true);
    setCampaignData(prev => ({ ...prev, shares: prev.shares + 1 }));
  };

  const handleEditCampaign = () => {
    setShowEditModal(true);
  };

  const handleUpdateGoal = () => {
    setShowGoalModal(true);
  };

  const handleCreatePost = () => {
    setActiveTab('posts');
  };

  const saveGoalUpdate = () => {
    setCampaignData(prev => ({ ...prev, goal: newGoal }));
    setShowGoalModal(false);
  };

  const saveCampaignEdit = () => {
    setShowEditModal(false);
  };

  const copyShareLink = () => {
    const campaignSlug = user?.fullName ? user.fullName.toLowerCase().replace(/\s+/g, '-') : 'campaign';
    navigator.clipboard.writeText(`https://finable.ng/campaign/${campaignSlug}`);
    alert('Campaign link copied to clipboard!');
  };

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent(`Help me fund my education! Every donation brings me closer to my dream. https://finable.ng/campaign/${user?.fullName ? user.fullName.toLowerCase().replace(/\s+/g, '-') : 'campaign'}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const shareOnTwitter = () => {
    const message = encodeURIComponent(`Help me fund my education! Every donation brings me closer to my dream. #Education #Nigeria #Crowdfunding`);
    window.open(`https://twitter.com/intent/tweet?text=${message}&url=https://finable.ng/campaign/${user?.fullName ? user.fullName.toLowerCase().replace(/\s+/g, '-') : 'campaign'}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=https://finable.ng/campaign/${user?.fullName ? user.fullName.toLowerCase().replace(/\s+/g, '-') : 'campaign'}`, '_blank');
  };

  const sendThankYou = (donorName) => {
    alert(`Thank you message sent to ${donorName}!`);
  };

  const markNotificationRead = (id) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const updateSettings = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveAllSettings = () => {
    setShowSettings(false);
    alert('Settings saved successfully!');
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'donation': return Heart;
      case 'milestone': return Target;
      case 'comment': return MessageCircle;
      case 'share': return Share2;
      default: return Bell;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const progressPercentage = (campaignData.totalRaised / campaignData.goal) * 100;

  // Custom tooltip for charts with PropTypes
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded-lg shadow-lg">
          <p className="font-medium">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.dataKey}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      dataKey: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })),
    label: PropTypes.string
  };

  // If no user data, show loading
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <User className="w-6 h-6 text-white" />
                </button>
                
                {/* User Menu Dropdown */}
                {showUserMenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{user.fullName}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => {
                          setShowSettings(true);
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4 text-gray-600" />
                        <span>Account Settings</span>
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Welcome back, {user.fullName?.split(' ')[0] || 'User'}!</h1>
                <p className="text-gray-600 text-sm">
                  {user.course && user.university ? `${user.course} Student - ${user.university}` : 
                   user.userType === 'student' ? 'Student' : 'Donor'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full"
                >
                  <Bell className="w-5 h-5" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                
                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border z-50">
                    <div className="p-4 border-b">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <button
                          onClick={markAllNotificationsRead}
                          className="text-sm text-blue-600 hover:text-blue-700"
                        >
                          Mark all read
                        </button>
                      </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">
                          No notifications yet
                        </div>
                      ) : (
                        notifications.map((notification) => {
                          const IconComponent = getNotificationIcon(notification.type);
                          return (
                            <div
                              key={notification.id}
                              className={`p-4 border-b hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                            >
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-full ${
                                  notification.type === 'donation' ? 'bg-green-100' :
                                  notification.type === 'milestone' ? 'bg-purple-100' :
                                  notification.type === 'comment' ? 'bg-blue-100' :
                                  'bg-gray-100'
                                }`}>
                                  <IconComponent className={`w-4 h-4 ${
                                    notification.type === 'donation' ? 'text-green-600' :
                                    notification.type === 'milestone' ? 'text-purple-600' :
                                    notification.type === 'comment' ? 'text-blue-600' :
                                    'text-gray-600'
                                  }`} />
                                </div>
                                <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <p className="font-medium text-gray-900 text-sm">
                                        {notification.title}
                                      </p>
                                      <p className="text-gray-600 text-sm mt-1">
                                        {notification.message}
                                      </p>
                                      <p className="text-gray-500 text-xs mt-2">
                                        {notification.time}
                                      </p>
                                    </div>
                                    <div className="flex gap-1">
                                      {!notification.read && (
                                        <button
                                          onClick={() => markNotificationRead(notification.id)}
                                          className="text-blue-600 hover:text-blue-700 text-xs"
                                        >
                                          Mark read
                                        </button>
                                      )}
                                      <button
                                        onClick={() => deleteNotification(notification.id)}
                                        className="text-red-600 hover:text-red-700 text-xs ml-2"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 bg-white p-2 rounded-lg shadow-sm">
          <TabButton
            id="overview"
            label="Overview"
            icon={BarChart3}
            isActive={activeTab === 'overview'}
            onClick={setActiveTab}
          />
          <TabButton
            id="analytics"
            label="Analytics"
            icon={TrendingUp}
            isActive={activeTab === 'analytics'}
            onClick={setActiveTab}
          />
          <TabButton
            id="posts"
            label="My Posts"
            icon={MessageCircle}
            isActive={activeTab === 'posts'}
            onClick={setActiveTab}
          />
          <TabButton
            id="donors"
            label="Donors"
            icon={Users}
            isActive={activeTab === 'donors'}
            onClick={setActiveTab}
          />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Raised"
                value={formatCurrency(campaignData.totalRaised)}
                icon={DollarSign}
                subtitle={`${progressPercentage.toFixed(1)}% of goal`}
                change="+12.5%"
                changeType="positive"
              />
              <StatCard
                title="Total Donors"
                value={campaignData.donors}
                icon={Users}
                subtitle="Amazing supporters"
                change="+8 donors"
                changeType="positive"
              />
              <StatCard
                title="Campaign Views"
                value={campaignData.views.toLocaleString()}
                icon={Eye}
                subtitle="People reached"
                change="+234 views"
                changeType="positive"
              />
              <StatCard
                title="Days Left"
                value={campaignData.daysLeft}
                icon={Calendar}
                subtitle="Time remaining"
              />
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Campaign Progress</h3>
                <span className="text-sm text-gray-600">{progressPercentage.toFixed(1)}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div 
                  className="bg-green-500 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Raised: {formatCurrency(campaignData.totalRaised)}</span>
                <span>Goal: {formatCurrency(campaignData.goal)}</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Donations</h3>
                <div className="space-y-4">
                  {recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{donation.name}</p>
                          <p className="text-sm text-gray-600">{donation.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{formatCurrency(donation.amount)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    onClick={handleShareCampaign}
                    icon={Share2}
                    variant="secondary"
                    className="w-full justify-start"
                  >
                    Share Campaign
                  </Button>
                  <Button 
                    onClick={handleEditCampaign}
                    icon={Edit3}
                    variant="secondary"
                    className="w-full justify-start"
                  >
                    Edit Campaign Details
                  </Button>
                  <Button 
                    onClick={handleCreatePost}
                    icon={MessageCircle}
                    variant="secondary"
                    className="w-full justify-start"
                  >
                    Create New Post
                  </Button>
                  <Button 
                    onClick={handleUpdateGoal}
                    icon={Target}
                    variant="secondary"
                    className="w-full justify-start"
                  >
                    Update Goal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Conversion Rate"
                value="5.4%"
                icon={TrendingUp}
                subtitle="Views to donations"
                change="+0.8%"
                changeType="positive"
              />
              <StatCard
                title="Avg. Donation"
                value={formatCurrency(6716)}
                icon={DollarSign}
                subtitle="Per supporter"
                change="+₦1,200"
                changeType="positive"
              />
              <StatCard
                title="Engagement Rate"
                value="12.3%"
                icon={Heart}
                subtitle="Likes & comments"
                change="+2.1%"
                changeType="positive"
              />
              <StatCard
                title="Share Rate"
                value="8.7%"
                icon={Share2}
                subtitle="Views to shares"
                change="+1.3%"
                changeType="positive"
              />
            </div>

            {/* Daily Engagement Chart */}
            <ChartCard title="Daily Engagement Trends" className="col-span-2">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyEngagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    name="Views"
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="donations" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    name="Donations"
                    dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Monthly Progress and Donation Sources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard title="Monthly Fundraising Progress">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyProgressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip 
                      content={<CustomTooltip />}
                      formatter={(value) => [formatCurrency(value), 'Amount Raised']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="raised" 
                      stroke="#10b981" 
                      fill="#10b981" 
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Donation Sources">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={donationSourceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {donationSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          </div>
        )}

        {/* Posts Tab */}
        {activeTab === 'posts' && (
          <div className="space-y-8">
            {/* Create New Post */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Post</h3>
              <div className="space-y-4">
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setNewPost({...newPost, type: 'text'})}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      newPost.type === 'text' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    Text Post
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewPost({...newPost, type: 'video'})}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      newPost.type === 'video' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    Video Post
                  </button>
                </div>
                
                <input
                  type="text"
                  placeholder="Post title..."
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                
                {newPost.type === 'text' ? (
                  <textarea
                    placeholder="Share your thoughts, appreciation, or updates with your supporters..."
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload a video to share with your supporters</p>
                    <button
                      type="button"
                      className="flex items-center gap-2 mx-auto px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      Choose Video File
                    </button>
                  </div>
                )}
                
                <Button
                  onClick={handlePostSubmit}
                  icon={Send}
                  className="px-6 py-3"
                >
                  Publish Post
                </Button>
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        {post.type === 'video' ? (
                          <Video className="w-5 h-5 text-green-600" />
                        ) : (
                          <FileText className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{post.title}</h4>
                        <p className="text-sm text-gray-600">{post.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes} likes
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.comments} comments
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      Share
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Donors Tab */}
        {activeTab === 'donors' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Amazing Supporters</h3>
              <div className="space-y-4">
                {recentDonations.map((donor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{donor.name}</p>
                        <p className="text-sm text-gray-600">{donor.date}</p>
                        {donor.message && (
                          <p className="text-sm text-gray-700 italic mt-1">&quot;{donor.message}&quot;</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600 text-lg">{formatCurrency(donor.amount)}</p>
                      <button 
                        onClick={() => sendThankYou(donor.name)}
                        className="text-sm text-blue-600 hover:text-blue-700 mt-1"
                      >
                        Send Thank You
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Share Your Campaign</h3>
            <div className="space-y-3">
              <button
                onClick={copyShareLink}
                className="w-full flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
                <span>Copy Link</span>
              </button>
              <button
                onClick={shareOnWhatsApp}
                className="w-full flex items-center gap-3 p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Share on WhatsApp</span>
              </button>
              <button
                onClick={shareOnTwitter}
                className="w-full flex items-center gap-3 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Share on Twitter</span>
              </button>
              <button
                onClick={shareOnFacebook}
                className="w-full flex items-center gap-3 p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Share on Facebook</span>
              </button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full mt-4 p-3 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Edit Campaign Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4">Edit Campaign Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Title</label>
                <input
                  type="text"
                  value={campaignTitle}
                  onChange={(e) => setCampaignTitle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={campaignDescription}
                  onChange={(e) => setCampaignDescription(e.target.value)}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                onClick={saveCampaignEdit}
                icon={Edit3}
                className="flex-1"
              >
                Save Changes
              </Button>
              <Button
                onClick={() => setShowEditModal(false)}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Update Goal Modal */}
      {showGoalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">Update Funding Goal</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Goal Amount (₦)</label>
                <input
                  type="number"
                  value={newGoal}
                  onChange={(e) => setNewGoal(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="text-sm text-gray-600">
                <p>Current goal: {formatCurrency(campaignData.goal)}</p>
                <p>Amount raised: {formatCurrency(campaignData.totalRaised)}</p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button
                onClick={saveGoalUpdate}
                icon={Target}
                className="flex-1"
              >
                Update Goal
              </Button>
              <Button
                onClick={() => setShowGoalModal(false)}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Account Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              {/* User Profile Info */}
              <div className="border-b pb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Profile Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <p className="text-gray-900">{user.fullName}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <p className="text-gray-900">{user.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                    <p className="text-gray-900 capitalize">{user.userType}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                    <p className="text-gray-900">{user.joinDate}</p>
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="border-b pb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Email Notifications</p>
                      <p className="text-sm text-gray-600">Receive updates via email</p>
                    </div>
                    <button
                      onClick={() => updateSettings('emailNotifications', !settings.emailNotifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.emailNotifications ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">SMS Notifications</p>
                      <p className="text-sm text-gray-600">Receive SMS alerts for donations</p>
                    </div>
                    <button
                      onClick={() => updateSettings('smsNotifications', !settings.smsNotifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.smsNotifications ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">Push Notifications</p>
                      <p className="text-sm text-gray-600">Browser notifications for real-time updates</p>
                    </div>
                    <button
                      onClick={() => updateSettings('pushNotifications', !settings.pushNotifications)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.pushNotifications ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="border-b pb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Privacy Settings</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Visibility
                    </label>
                    <select
                      value={settings.profileVisibility}
                      onChange={(e) => updateSettings('profileVisibility', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    >
                      <option value="public">Public - Anyone can view</option>
                      <option value="donors">Donors Only - Only supporters can view</option>
                      <option value="private">Private - Only you can view</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div>
                <h4 className="text-lg font-medium text-red-600 mb-4">Danger Zone</h4>
                <div className="space-y-3">
                  <button 
                    onClick={handleLogout}
                    className="w-full p-3 text-left border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <p className="font-medium text-red-600">Logout</p>
                    <p className="text-sm text-red-500">Sign out of your account</p>
                  </button>
                  <button className="w-full p-3 text-left border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
                    <p className="font-medium text-red-600">Delete Account</p>
                    <p className="text-sm text-red-500">Permanently delete your account and all data</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8 pt-6 border-t">
              <Button
                onClick={saveAllSettings}
                icon={Settings}
                className="flex-1"
              >
                Save All Settings
              </Button>
              <Button
                onClick={() => setShowSettings(false)}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;