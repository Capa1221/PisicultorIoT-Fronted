import { Spinner } from '@nextui-org/react';

export const Spinnerlazyload = () => {

  return (
    <div className='text-lg absolute flex justify-center items-center text-center w-full h-screen bg-gray-500/50'>
      <Spinner color="success" className='text-white' />
    </div>
  )
}
export default Spinnerlazyload;
