import React from 'react';
import Button from '../Button';

export default function IconText() {
    return (
        <Button type="link" to="/dashboard" className="font-bold text-2xl text-white">
            <span style={{ color: '#06CDC1' }}>|</span>
            MUSIC
            <span style={{ color: '#06CDC1' }}>PLAY</span>
        </Button>
    );
}
