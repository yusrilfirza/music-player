import React from 'react';
import Button from '../../components/elements/Button';

export const PageLanding = () => (
    <div>
        <Button
            className="bg-main-dark_green-half text-white font-semibold rounded-full px-5 py-2"
            to="/dashboard"
            type="link"
        >
            Show me Now
        </Button>
    </div>
);

export default PageLanding;
