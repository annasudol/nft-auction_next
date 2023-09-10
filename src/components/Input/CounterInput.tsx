import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

import s from './Input.module.css';

import Button from '@/components/Button';

export interface InputMinMaxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: number) => void;
  register: any,
  name: string;
  isValid?: boolean;
}

const CounterInput: FC<InputMinMaxProps> = ({
  handleChange,
  isValid = true,
  register,
  name,
  ...props
}) => {
  console.log(props, 'props');
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
        className={clsx(s.input, 'h-10 border-x-0 px-4', {
          '': isValid,
          '': isValid,
        })}
        { ...register(name)}
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
