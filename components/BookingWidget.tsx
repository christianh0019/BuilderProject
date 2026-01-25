import React, { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BookingWidgetProps {
    calendarId: string;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ calendarId }) => {
    const location = useLocation();

    // Construct the booking URL with prefill parameters from the current URL query params
    const bookingUrl = useMemo(() => {
        const baseUrl = `https://api.leadconnectorhq.com/widget/booking/${calendarId}`;
        const searchParams = new URLSearchParams(location.search);

        // Ensure we only pass relevant params if they exist to keep the URL clean
        const widgetParams = new URLSearchParams();

        // Verified: The GHL widget natively supports 'email' and 'full_name'.
        // Passing duplicates like 'contact_email' can cause issues, so we stick to the proven keys.

        // Handle Name
        const fullName = searchParams.get('full_name');
        const firstName = searchParams.get('first_name');
        const lastName = searchParams.get('last_name');

        if (fullName) {
            widgetParams.append('full_name', fullName);
        } else if (firstName || lastName) {
            // Construct full_name if missing
            const parts = [firstName, lastName].filter(Boolean);
            if (parts.length > 0) widgetParams.append('full_name', parts.join(' '));
        }

        // Handle Email
        // Verified via direct URL test that '?email=...' successfully autofills the field.
        const email = searchParams.get('email');
        if (email) {
            widgetParams.append('email', email);
        }

        // Handle Phone
        const phone = searchParams.get('phone');
        if (phone) {
            widgetParams.append('phone', phone);
        }

        const queryString = widgetParams.toString();
        return queryString ? `${baseUrl}?${queryString}` : baseUrl;
    }, [location.search, calendarId]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full h-full">
            <iframe
                key={bookingUrl}
                src={bookingUrl}
                style={{ width: '100%', border: 'none', minHeight: '800px' }}
                id={`booking-widget-${calendarId}`}
                title="Booking Calendar"
            ></iframe>
        </div>
    );
};

export default BookingWidget;
