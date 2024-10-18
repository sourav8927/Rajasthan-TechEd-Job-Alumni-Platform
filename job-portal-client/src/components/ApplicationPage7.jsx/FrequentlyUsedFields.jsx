import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhoneAlt, faEnvelope, faMapMarkerAlt, faCalendarAlt, faGlobe, faFont, faObjectGroup, faParagraph, faHeading, faDotCircle, faCheckSquare, faChevronDown, faFileUpload } from '@fortawesome/free-solid-svg-icons';

const FrequentlyUsedFields = () => {
    return (
        <div className="w-[300px] pl-5 bg-white border-l border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Frequently used fields</h3>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 text-center">
                <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                    <FontAwesomeIcon icon={faUser} className="mr-2 text-indigo-600" />
                    Full name
                </button>
                <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                    <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-indigo-600" />
                    Phone
                </button>
                <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-indigo-600" />
                    Mail
                </button>
                <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-indigo-600" />
                    Address
                </button>
                <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-indigo-600" />
                    Date picker
                </button>
                <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                    <FontAwesomeIcon icon={faGlobe} className="mr-2 text-indigo-600" />
                    Website
                </button>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Basic fields</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                        <FontAwesomeIcon icon={faFont} className="mr-2 text-indigo-600" />
                        Text Field
                    </button>
                    <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                        <FontAwesomeIcon icon={faObjectGroup} className="mr-2 text-indigo-600" />
                        Group Field
                    </button>
                    <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                        <FontAwesomeIcon icon={faParagraph} className="mr-2 text-indigo-600" />
                        Paragraph
                    </button>
                    <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                        <FontAwesomeIcon icon={faHeading} className="mr-2 text-indigo-600" />
                        Heading
                    </button>
                    <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                        <FontAwesomeIcon icon={faDotCircle} className="mr-2 text-indigo-600" />
                        Radio Button
                    </button>
                    <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                        <FontAwesomeIcon icon={faCheckSquare} className="mr-2 text-indigo-600" />
                        Check box
                    </button>
                    <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                        <FontAwesomeIcon icon={faChevronDown} className="mr-2 text-indigo-600" />
                        Dropdown
                    </button>
                    <button className="w-full text-left px-4 py-2 border bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200">
                        <FontAwesomeIcon icon={faFileUpload} className="mr-2 text-indigo-600" />
                        File upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyUsedFields;
