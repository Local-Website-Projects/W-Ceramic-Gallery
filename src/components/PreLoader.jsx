import React, { useEffect, useState } from 'react';

function PreLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            console.log("Page loaded: Setting isLoading to false after delay...");
            setTimeout(() => {
                setIsLoading(false); // Update state
                console.log("isLoading state updated to false.");
            }, 500); // Add delay for smooth transition
        };

        console.log("Initial document.readyState:", document.readyState);

        if (document.readyState === "complete") {
            console.log("Document is already fully loaded.");
            handleLoad(); // Trigger load handler immediately
        } else {
            console.log("Adding window 'load' event listener...");
            window.addEventListener('load', handleLoad);
        }

        // Cleanup listener
        return () => {
            console.log("Removing window 'load' event listener...");
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    // Check which class is applied
    const preloaderClass = isLoading ? "visible" : "hidden";
    console.log("Current preloader class:", preloaderClass);

    return (
        <div id="pq-loading" className={preloaderClass}>
            <div id="pq-loading-center">
                <img src="assets/images/Logo/logo.png" alt="Loading" />
            </div>
        </div>
    );
}

export default PreLoader;
