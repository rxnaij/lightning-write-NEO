import * as React from 'react'
import classNames from 'classnames'

import './button.scss'

export interface AppProps {
    children: React.ReactNode,
    
    // Possible button states
    state?: 'disabled'|'active'|null,
    
    // Button variants
    variant?: 'outline'|'secondary'|null,
    
    // Event listener callback function
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    
    // Activate button if certain conditions are met.
    // Otherwise, button remains disabled
    enableConditions?: [],

    // Icon component
    icon?: React.ReactNode
    collapse?: 'sm'
}

const Button: React.FC<AppProps> = ({children, state, variant, onClick, enableConditions, icon, collapse}: AppProps) => {

    return(
        <button
            className={classNames({
                'button': true,
                // Button disabled state. Evaluates to true if:
                // the `disabled` prop is supplied, OR
                // any of the elements in the `enableConditions` prop contains a falsy value
                'button--disabled': state === 'disabled' || (enableConditions && !enableConditions.every((condition: any) => condition)),
                'button--activated': state === 'active',
                'button--secondary': variant === 'secondary',
                'button--outline': variant === 'outline',
            })}
            onClick={(event): void => {
                if (onClick) {
                    event.preventDefault()
                    onClick(event)
                }
            }}
        >
            {
                icon && 
                <span
                    className={`icon
                        ${collapse ? 'collapse--' + collapse : ''}
                    `}
                    role="img"
                >
                    {icon}
                </span>
            }
            {children}
        </button>
    );
}

export default Button