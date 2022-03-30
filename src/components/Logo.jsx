import React from 'react'
import { ReactComponent as LogoPrimary } from '../assets/icons/logo.svg'

export const Logo = ({ size = 'md', variant = 'primary', ...props }) => {
    const logoSize = {
        sm: { height: '48', width: '48' },
        md: { height: '32', width: '90' },
        lg: { height: '120', width: '120' },
    }
    switch (variant) {
        case 'primary':
            return <LogoPrimary {...logoSize[size]} {...props} />
        case 'secondary':
            return <LogoPrimary />
        default:
            return <LogoPrimary />
    }
}
