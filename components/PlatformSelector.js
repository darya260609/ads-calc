const PlatformSelector = ({ selectedPlatforms, onPlatformChange, language }) => {
    const t = translations[language];

    const handlePlatformChange = (platform) => {
        const newPlatforms = selectedPlatforms.includes(platform)
            ? selectedPlatforms.filter(p => p !== platform)
            : [...selectedPlatforms, platform];
        onPlatformChange(newPlatforms);
    };

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.platforms}
            </label>
            <div className="space-y-2">
                <div className="platform-checkbox">
                    <input
                        type="checkbox"
                        id="facebook"
                        checked={selectedPlatforms.includes('facebook')}
                        onChange={() => handlePlatformChange('facebook')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="facebook" className="ml-2 block text-sm text-gray-900">
                        {t.facebook}
                    </label>
                </div>
                <div className="platform-checkbox">
                    <input
                        type="checkbox"
                        id="instagram"
                        checked={selectedPlatforms.includes('instagram')}
                        onChange={() => handlePlatformChange('instagram')}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="instagram" className="ml-2 block text-sm text-gray-900">
                        {t.instagram}
                    </label>
                </div>
            </div>
        </div>
    );
};

// Export the component
window.PlatformSelector = PlatformSelector; 