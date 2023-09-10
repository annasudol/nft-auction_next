import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import CounterInput from '@/components/Input/CounterInput';

const BidPriceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <CounterInput
        label=''
        name='bidPrice'
        register={register}
        type='number'
        handleChange={(value) => console.log(value)}
        isValid={!!errors['bidPrice']}
        placeholder='0'
        defaultValue='0'
        disabled={!isDirty}
      />
      <Button variant='primary' className='px-8' type='submit'>
        bid
      </Button>
    </form>
  );
};

export default BidPriceForm;
