import React from 'react';
import { Link } from 'react-router-dom';
import {
    Search,
    ClipboardList,
    PlusCircle,
    Repeat2,
} from 'lucide-react';

const Insurancedashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <header className="bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg sticky top-0 z-50">
                <div className="w-full h-20 flex items-center justify-between px-4 md:px-10">
                    <h1 className="text-white text-xl md:text-3xl font-bold">
                        Welcome New India Insurance Company
                    </h1>
                    <Link
                        to="/"
                        onClick={() => console.log("Logout clicked from Admin Dashboard")}
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

                    {/* 1. Search Vehicle Details */}
                    <Card
                        title="Search Vehicle Details"
                        icon={<Search className="w-5 h-5 mr-2" />}
                        description="Search for detailed information about any vehicle using its registration number."
                        points={[
                            "Access vehicle specifications.",
                            "View ownership history.",
                            "Check registration validity.",
                        ]}
                        buttonText="Go to Search"
                        color="blue"
                    />

                    {/* 2. Upload / Update PUC Certificates */}
                    <Card
                        title="Upload / Update PUC Certificates"
                        icon={<ClipboardList className="w-5 h-5 mr-2" />}
                        description="Manage PUC Certificates."
                        points={[
                            "View pending and disposed Certificates.",
                            "Process challan payments.",
                            "Generate reports.",
                        ]}
                        buttonText="Manage Challans"
                        color="red"
                    />

                    {/* 3. Add New Vehicle */}
                    <Card
                        title="Add New Vehicle"
                        icon={<PlusCircle className="w-5 h-5 mr-2" />}
                        description="Register new vehicles into the system."
                        points={[
                            "Input new vehicle details.",
                            "Assign registration numbers.",
                            "Update database records.",
                        ]}
                        buttonText="Add Vehicle"
                        color="green"
                    />

                    {/* 4. Vehicle Ownership Transfer */}
                    <Card
                        title="Vehicle Ownership Transfer"
                        icon={<Repeat2 className="w-5 h-5 mr-2" />}
                        description="Facilitate the transfer of vehicle ownership."
                        points={[
                            "Initiate transfer requests.",
                            "Verify ownership documents.",
                            "Update ownership records.",
                        ]}
                        buttonText="Transfer Ownership"
                        color="purple"
                    />

                    {/* 5. Vehicle Analytics & Trends */}
                    <Card
                        title="Vehicle Analytics & Trends"
                        icon={<ClipboardList className="w-5 h-5 mr-2" />}
                        description="Get insights on vehicle and document status across the system."
                        points={[
                            "Monitor registration and insurance patterns.",
                            "Track document expiry trends.",
                            "Visualize usage via charts.",
                        ]}
                        buttonText="View Analytics"
                        color="yellow"
                    />

                    {/* 6. Violation Management */}
                    <Card
                        title="Violation Management"
                        icon={<ClipboardList className="w-5 h-5 mr-2" />}
                        description="Oversee traffic violations and challan management."
                        points={[
                            "Track unpaid fines and eChallans.",
                            "Flag repeat offenders.",
                            "Generate violation reports.",
                        ]}
                        buttonText="Manage Violations"
                        color="rose"
                    />

                    {/* 7. PUC Reminder Management */}
                    <Card
                        title="PUC Reminder Management"
                        icon={<ClipboardList className="w-5 h-5 mr-2" />}
                        description="Set and monitor automated PUC expiry reminders."
                        points={[
                            "Customize reminder intervals.",
                            "Send alerts via email/SMS.",
                            "Track delivery status.",
                        ]}
                        buttonText="Manage Reminders"
                        color="cyan"
                    />

                    {/* 8. Duplicate Vehicle Detection */}
                    <Card
                        title="Duplicate Vehicle Detection"
                        icon={<ClipboardList className="w-5 h-5 mr-2" />}
                        description="Identify vehicles with conflicting or duplicate data."
                        points={[
                            "Check for repeated RC numbers.",
                            "Detect engine/chassis duplicates.",
                            "Flag for manual review.",
                        ]}
                        buttonText="Detect Duplicates"
                        color="orange"
                    />

                </div>
            </main>
        </div>
    );
};

type CardProps = {
    title: string;
    icon: React.ReactNode;
    description: string;
    points: string[];
    buttonText: string;
    color: string; // tailwind base color name like "blue", "red"
};

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
                <h3 className="text-xl font-bold text-white flex items-center">
                    {icon}
                    {title}
                </h3>
            </div>
            <div className="p-6">
                <p className="text-gray-700 mb-4">{description}</p>
                <ul className="space-y-2 text-gray-600 text-sm">
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

export default Insurancedashboard;
