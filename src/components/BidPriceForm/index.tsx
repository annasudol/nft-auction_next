import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import CounterInput from '@/components/Input/CounterInput';

const BidPriceForm: FC<{defaultValue?: string}> = ({defaultValue = '0'}) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValue,
    formState: { errors, isDirty },
  } = useForm();
  const handleChangeValue = (value: number) => {
    // console.log(getValue("bidPrice"), 'getValues("bidPrice")')
    // setValue(
    //   "bidPrice",
    //   getValues("bidPrice") + value,
    //   { shouldDirty: true, shouldTouch: true }
    // );
  };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <CounterInput
        handleChange={handleChangeValue}
        isValid={!!errors['bidPrice']}
        placeholder='0'
        defaultValue={defaultValue}
        disabled={!isDirty}
        name="bidPrice"
        register={register}
        // {...register('bidPrice', {
        //   valueAsNumber: true,
        //   validate: (value) => value > 0,
        // })}
        // {...register('bidPrice')}
      />
      <Button
        variant='primary'
        className='px-8'
        type='submit'
        disabled={!isDirty}
      >
        bid
      </Button>
    </form>
  );
};

export default BidPriceForm;
