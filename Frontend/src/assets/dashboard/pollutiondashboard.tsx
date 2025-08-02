import React from 'react';
// Removed import { FaCar, FaCheckCircle, FaExclamationTriangle, FaBell } from 'react-icons/fa';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  points: string[];
  buttonText: string;
  color: string; // Tailwind color name like 'blue', 'green', etc.
}

const Card: React.FC<CardProps> = ({
  title,
  icon,
  description,
  points,
  buttonText,
  color,
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-l-4 border-${color}-500`}>
      <div className={`bg-gradient-to-r from-${color}-600 to-${color}-700 p-4`}>
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          {icon}
          {title}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 px-6 py-4">
        <button className={`w-full bg-gradient-to-r from-${color}-500 to-${color}-600 hover:from-${color}-600 hover:to-${color}-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg`}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const PollutionDashboard: React.FC = () => {
  // Placeholder for Link component, assuming react-router-dom is used in the main app
  const Link = ({ to, onClick, className, children }: { to: string; onClick?: () => void; className?: string; children: React.ReactNode }) => (
      <a href={to} onClick={onClick} className={className}>
          {children}
      </a>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header - Reused from Userdashboard for consistent theme */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
          <div className="w-full h-20 flex items-center justify-between px-4 md:px-10">
              <h1 className="text-white text-xl md:text-3xl font-bold">Pollution Control Admin</h1>
              <div>
                  <Link to="/"
                      onClick={() => console.log("Logout clicked")}
                      className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 md:px-5 md:py-2 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                      Logout
                  </Link>
              </div>
          </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center p-4 bg-white rounded-lg shadow-sm">Pollution Control – Admin Panel</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Card
            title="PUC Certificate Status"
            icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
            description="Monitor and track PUC certificate validity across vehicles."
            points={[
              'List expired/expiring PUCs',
              'Highlight invalid or missing certificates',
              'Fuel-type and region filters',
            ]}
            buttonText="View PUC Table"
            color="green"
          />

          <Card
            title="Upload/Verify PUC"
            icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10v11h18V10M3 10l9-7 9 7M3 10h18"></path></svg>}
            description="Admin can manually upload or approve user-submitted certificates."
            points={[
              'Approve or reject PUCs',
              'Document preview',
              'Track upload logs',
            ]}
            buttonText="Manage Uploads"
            color="blue"
          />

          <Card
            title="PUC Reminders"
            icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>}
            description="Send expiry alerts to users via SMS or email."
            points={[
              'Schedule automated alerts',
              'Configure notice period (e.g., 15 days)',
              'Check notification logs',
            ]}
            buttonText="Manage Reminders"
            color="yellow"
          />

          <Card
            title="Violation Detection"
            icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>}
            description="Auto-flag vehicles with expired or missing PUC."
            points={[
              'Flag violations',
              'Link with eChallan system',
              'Export violation reports',
            ]}
            buttonText="View Violations"
            color="red"
          />
        </div>
      </main>
    </div>
  );
};

export default PollutionDashboard;
