import React from 'react';
// import { Link } from 'react-router-dom'; // Commented out direct import of Link
import {
    Search,
    ClipboardList,
    PlusCircle,
    Repeat2,
    Bell, // For alerts
    Download, // For reports
    CheckCircle, // For verification
    Edit, // For edit/update
    Upload, // For upload copy of insurance
    FileText // For general document/record icon
} from 'lucide-react'; // Importing icons from lucide-react

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

const Insurancedashboard: React.FC = () => {
    // Placeholder for Link component, assuming react-router-dom is used in the main app
    // If react-router-dom is properly set up, you can remove this placeholder.
    const Link = ({ to, onClick, className, children }: { to: string; onClick?: () => void; className?: string; children: React.ReactNode }) => (
        <a href={to} onClick={onClick} className={className}>
            {children}
        </a>
    );

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
                <div className="w-full h-20 flex items-center justify-between px-4 md:px-10">
                    <h1 className="text-white text-xl md:text-3xl font-bold">
                        Welcome New India Insurance Company
                    </h1>
                    <Link
                        to="/"
                        onClick={() => console.log("Logout clicked from Insurance Dashboard")}
                        className="text-white bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 md:px-5 md:py-2 rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Logout
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 p-4 bg-white rounded-lg shadow-sm">
                    Insurance Panel
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {/* 1. View & Search Insurance Records */}
                    <Card
                        title="View & Search Records"
                        icon={<Search className="w-5 h-5 text-white" />}
                        description="Access and search comprehensive insurance records by various criteria."
                        points={[
                            "Search by vehicle registration, company, owner, or policy number.",
                            "Filter by expired, active, or upcoming expiry.",
                            "Quickly locate specific policies.",
                        ]}
                        buttonText="Search Records"
                        color="blue"
                    />

                    {/* 2. Add New Insurance Record */}
                    <Card
                        title="Add New Record"
                        icon={<PlusCircle className="w-5 h-5 text-white" />}
                        description="Register new insurance policies into the system."
                        points={[
                            "Input vehicle, owner, company, and policy details.",
                            "Specify start and expiry dates.",
                            "Option to upload policy document copy.",
                        ]}
                        buttonText="Add New Policy"
                        color="green"
                    />

                    {/* 3. Edit / Update Insurance */}
                    <Card
                        title="Edit / Update Insurance"
                        icon={<Edit className="w-5 h-5 text-white" />}
                        description="Modify existing insurance records for renewals or changes."
                        points={[
                            "Update policy expiry dates.",
                            "Change insurance company or policy number.",
                            "Upload new policy documents.",
                        ]}
                        buttonText="Edit Policy"
                        color="purple"
                    />

                    {/* 4. Insurance Expiry Alerts */}
                    <Card
                        title="Expiry Alerts"
                        icon={<Bell className="w-5 h-5 text-white" />}
                        description="Manage and send automated alerts for expiring insurance policies."
                        points={[
                            "View policies expiring within 30 days.",
                            "Identify vehicles with expired insurance.",
                            "Send email/SMS reminders to owners.",
                        ]}
                        buttonText="Manage Alerts"
                        color="yellow"
                    />

                    {/* 5. Download Reports */}
                    <Card
                        title="Download Reports"
                        icon={<Download className="w-5 h-5 text-white" />}
                        description="Generate and download detailed insurance status reports."
                        points={[
                            "Export reports in PDF or Excel format.",
                            "Filter reports by date, company, or expiry status.",
                            "Comprehensive data for auditing and analysis.",
                        ]}
                        buttonText="Generate Reports"
                        color="cyan"
                    />

                    {/* 6. Verification Panel */}
                    <Card
                        title="Verification Panel"
                        icon={<CheckCircle className="w-5 h-5 text-white" />}
                        description="Manually verify uploaded insurance policy documents."
                        points={[
                            "Review user-submitted policy copies.",
                            "Mark policies as 'Verified' or 'Rejected'.",
                            "Add comments for rejected policies.",
                        ]}
                        buttonText="Verify Documents"
                        color="red"
                    />

                    {/* Optional Feature: Integration with third-party APIs */}
                    <Card
                        title="API Integration"
                        icon={<FileText className="w-5 h-5 text-white" />}
                        description="Integrate with external insurance company APIs for real-time data."
                        points={[
                            "Automatic fetching of policy data.",
                            "Streamlined data synchronization.",
                            "Reduced manual data entry.",
                        ]}
                        buttonText="Configure API"
                        color="indigo"
                    />

                    {/* Optional Feature: Analytics */}
                    <Card
                        title="Insurance Analytics"
                        icon={<ClipboardList className="w-5 h-5 text-white" />}
                        description="Gain insights into insurance trends and company performance."
                        points={[
                            "Analyze most used insurance companies.",
                            "Track average policy expiry periods.",
                            "Visualize data with charts and graphs.",
                        ]}
                        buttonText="View Analytics"
                        color="orange"
                    />

                </div>
            </main>
        </div>
    );
};

export default Insurancedashboard;
