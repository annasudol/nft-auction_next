import { FC, InputHTMLAttributes } from 'react';

import Button from '@/components/Button';

export interface InputMinMaxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: number) => void;
  value: number;
  defaultValue: number;
}

const CounterInput: FC<InputMinMaxProps> = ({
  handleChange,
  value,
  defaultValue,
  ...props
}) => {
  return (
    <div className='my-2 flex w-20 items-center'>
      <Button
        additionalClasses='rounded-r-none h-10'
        variant='light'
        disabled={value === defaultValue}
        onClick={() => handleChange(-1)}
      >
        -
      </Button>
      <input
        type='text'
        pattern='[0-9]*'
        value={value}
        {...props}
        className='h-10 border-l-0 border-r-0'
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
