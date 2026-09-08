const fs = require('fs');
const files = [
    'src/components/services/subservices/ModernServiceLayout.jsx',
    'src/pages/services/mobile-app-development/ReactNativeDevelopment.jsx',
    'src/pages/services/mobile-app-development/IOSDevelopment.jsx',
    'src/pages/services/mobile-app-development/FlutterDevelopment.jsx',
    'src/pages/services/mobile-app-development/CrossPlatformApps.jsx',
    'src/pages/services/mobile-app-development/AndroidDevelopment.jsx'
];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let original = content;

    content = content.replace(/text-3xl md:text-4xl lg:text-5xl font-bold text-\[\#0A1024\]/g, 'text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A1024]');
    content = content.replace(/text-2xl md:text-3xl font-bold text-\[\#0A1024\]/g, 'text-xl md:text-2xl font-bold text-[#0A1024]');
    content = content.replace(/text-\[\#2D3748\] text-lg leading-relaxed/g, 'text-[#2D3748] text-base leading-relaxed');

    if (content !== original) {
        fs.writeFileSync(f, content);
        console.log('Updated ' + f);
    }
});
