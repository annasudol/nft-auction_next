import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

import s from './Input.module.css';

import Button from '@/components/Button';

export interface InputMinMaxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: number) => void;
  label: string;
  isValid?: boolean;
  register?: any;
}

const CounterInput: FC<InputMinMaxProps> = ({
  name,
  label,
  register,
  required,
  handleChange,
  isValid = true,
  ...props
}) => {
  return (
    <div className='my-2 flex w-36 items-center'>
      <Button
        additionalClasses='rounded-r-none h-10'
        variant='light'
        onClick={() => handleChange(-1)}
      >
        -
      </Button>
      <input
        id={label}
        name={name}
        type='number'
        min={0}
        className={clsx(s.input, 'border-x-0 px-4 h-10', {
          '': isValid,
          '': isValid,
        })}
        {...(register ? { ...register(name, { required }) } : null)}
        {...props}
      />
      <Button
        additionalClasses='rounded-l-none h-10'
        variant='light'
        onClick={() => handleChange(1)}
      >
        +
      </Button>
    </div>
  );
};

export default CounterInput;
