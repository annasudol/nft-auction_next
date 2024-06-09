import { ChangeEvent, FC, useRef, useState } from 'react';

import Button from '@/components/Button';
import CounterInput from '@/components/Input/CounterInput';

const BidPriceForm: FC<{ defaultValue?: number }> = ({ defaultValue = 0 }) => {
  const [price, setPrice] = useState<number>(defaultValue);
  const selectForm = useRef(null);
  const handleSubmit = () => {
    // selectForm.current.submit()
  };
  const handleChangeValue = (value: number) => {
    const newValue = price + value;
    setPrice(newValue > defaultValue ? newValue : defaultValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      event?.target?.validity.valid &&
      parseInt(event.target.value.replace(/[^\d.-]+/g, ''));
    newValue &&
      handleChangeValue(newValue > defaultValue ? newValue : defaultValue);
  };
  return (
    <form ref={selectForm} method='get' onChange={handleSubmit}>
      <CounterInput
        handleChange={handleChangeValue}
        value={price}
        placeholder='0'
        defaultValue={defaultValue}
        onInput={handleChange}
      />
      <Button
        variant='primary'
        className='px-8'
        type='submit'
        disabled={price <= defaultValue}
      >
        bid
      </Button>
    </form>
  );
};

export default BidPriceForm;
