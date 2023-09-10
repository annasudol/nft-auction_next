import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/lib/utils';

const ButtonVariant = ['primary', 'outline', 'light'] as const;
const ButtonSize = ['sm', 'base'] as const;

type ButtonProps = {
  isLoading?: boolean;
  variant?: (typeof ButtonVariant)[number];
  size?: (typeof ButtonSize)[number];
  additionalClasses?: string;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      size = 'base',
      additionalClasses,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={cn(
          additionalClasses,
          'inline-flex items-center rounded font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-gray-800',
          'shadow-sm',
          'transition-colors duration-75',
          [
            size === 'base' && ['px-3 py-1.5', 'text-sm md:text-base'],
            size === 'sm' && ['px-2 py-1', 'text-xs md:text-sm'],
          ],
          [
            variant === 'primary' && [
              'bg-gray-800 text-white',
              'border border-gray-900',
              'hover:bg-gray-900 hover:text-white',
              'active:bg-gray-900',
              'disabled:bg-gray-600',
            ],
            variant === 'outline' && [
              'text-gray-800',
              'border border-gray-800',
              '0 hover:bg-gray-200  active:bg-gray-200 disabled:bg-gray-200',
            ],
            variant === 'light' && [
              'bg-white text-gray-700',
              'border border-gray-700',
              'active:bg-white/80 disabled:text-gray-400',
            ],
          ],
          'disabled:cursor-not-allowed',
          additionalClasses,
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-gray-800': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
