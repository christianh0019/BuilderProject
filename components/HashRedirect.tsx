import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HashRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if there is a hash in the URL (e.g. /#/services)
        if (window.location.hash) {
            // Remove the '#' character and decode URI component to handle special chars if any
            const path = window.location.hash.replace('#', '');
            if (path) {
                // Navigate to the path without the hash, replacing the current history entry
                navigate(path, { replace: true });
            }
        }
    }, [navigate]);

    return null;
};

export default HashRedirect;
