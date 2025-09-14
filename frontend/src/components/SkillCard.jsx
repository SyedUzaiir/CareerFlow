import React from "react";
const SkillCard = ({ img, name, description }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm mx-auto flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <img
            src={img}
            alt={name}
            className="w-24 h-24 mb-6 object-contain"
            onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/96x96/e0e0e0/333?text=Error';
            }}
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {name}
        </h2>
        <p className="text-gray-600">
            {description}
        </p>
        </div>
    );
    };
export default SkillCard;