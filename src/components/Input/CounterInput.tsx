import { FC, InputHTMLAttributes } from 'react';

import Button from '@/components/Button';

export interface InputMinMaxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (value: number) => void;
  value: number;
}

const CounterInput: FC<InputMinMaxProps> = ({
  handleChange,
  value,
  ...props
}) => {
  return (
    <div className='my-2 flex w-36 items-center'>
      <Button
        additionalClasses='rounded-r-none h-10'
        variant='light'
        onClick={() => handleChange(1)}
      >
        -
      </Button>
      <input
        type='text'
        pattern='[0-9]*'
        value={value}
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
