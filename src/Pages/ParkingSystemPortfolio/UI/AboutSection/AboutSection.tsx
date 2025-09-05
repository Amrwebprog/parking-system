import { Car, ChartSpline, PersonStanding } from "lucide-react";

function AboutSection() {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8" id="About">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Smart Parking Management System
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <p className="text-lg text-gray-700 mb-6">
            A comprehensive parking management system that provides smart
            solutions for managing entry and exit processes, automatically
            calculating costs, and managing different zones with a flexible
            pricing system that adapts to peak times and holidays.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-blue-50 p-5 rounded-lg">
              <div className="text-blue-600 text-2xl mb-3 flex justify-center">
                <Car size={40} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visitor Check-in</h3>
              <p className="text-gray-600">
                Easy and efficient process for visitor parking with real-time
                availability
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg">
              <div className="text-green-600 text-2xl mb-3 flex justify-center">
                <PersonStanding size={40} />
              </div>
              <h3 className="font-semibold text-lg mb-2 ">Subscriber Access</h3>
              <p className="text-gray-600">
                Dedicated flow for subscribers with pre-registered vehicles
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg">
              <div className="text-purple-600 text-2xl mb-3 flex justify-center">
                <ChartSpline size={40} />{" "}
              </div>
              <h3 className="font-semibold text-lg mb-2">Admin Dashboard</h3>
              <p className="text-gray-600">
                Complete control panel for managing zones, rates, and reports
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <li className="flex items-center"> Real-time zone availability</li>
            <li className="flex items-center"> Dynamic pricing system</li>
            <li className="flex items-center"> WebSocket live updates</li>
            <li className="flex items-center"> Subscription management</li>
            <li className="flex items-center"> Detailed reporting</li>
            <li className="flex items-center"> Employee access control</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
