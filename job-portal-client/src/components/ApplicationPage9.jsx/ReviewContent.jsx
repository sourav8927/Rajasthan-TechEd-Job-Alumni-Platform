import React from 'react';

const ReviewContent = ({ stages, onNext, onBack }) => {
    const initialData = {
        jobName: "Product Designer",
        jobDescription: "This role involves designing user-friendly products with a focus on intuitive user interfaces and experiences. The ideal candidate will have experience with design software and possess a strong creative flair.",
        jobType: "Full Time",
        jobLocation: "Waterloo, ON - Toronto, ON",
        recruitmentQuota: "0 to 10 Candidates",
        jobTitle: "Lead Product Designer",
        jobLevel: "Mid-Senior Level",
        hiringManager: "John Doe",
        recruiters: "Jane Smith, Sarah Johnson",
        businessUnit: "Product Design"
    };

    return (
        <div className="bg-white pt-10 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Review</h2>
            
            <div className="mb-10">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Basic Information</h3>
                <div className="space-y-3 text-gray-600">
                    <p><strong>Job Name:</strong> {initialData.jobName || "N/A"}</p>
                    <p><strong>Job Description:</strong> {initialData.jobDescription || "N/A"}</p>
                    <p><strong>Job Type:</strong> {initialData.jobType || "N/A"}</p>
                    <p><strong>Job Location:</strong> {initialData.jobLocation || "N/A"}</p>
                    <p><strong>Recruitment Quota:</strong> {initialData.recruitmentQuota || "N/A"}</p>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-gray-800">Additional Information</h3>
                <div className="space-y-3 text-gray-600">
                    <p><strong>Job Title:</strong> {initialData.jobTitle || "N/A"}</p>
                    <p><strong>Job Level:</strong> {initialData.jobLevel || "N/A"}</p>
                    <p><strong>Hiring Manager:</strong> {initialData.hiringManager || "N/A"}</p>
                    <p><strong>Recruiters:</strong> {initialData.recruiters || "N/A"}</p>
                    <p><strong>Business Unit:</strong> {initialData.businessUnit || "N/A"}</p>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    type="button"
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-4 hover:bg-gray-300"
                    onClick={onBack}
                >
                    Back
                </button>
                <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={onNext}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ReviewContent;
