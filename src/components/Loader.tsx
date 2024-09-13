import { Oval } from 'react-loader-spinner';
import { loaderInterface } from '../interfaces';

export default function Loader({ size, color }: loaderInterface) {
  return (
    <Oval
      visible={true}
      height={size === 'lg' ? 80 : 30}
      width="80"
      strokeWidth={3}
      color={color}
      secondaryColor={color}
      ariaLabel="oval-loading"
      wrapperClass={
        size === 'lg'
          ? 'h-[100vh] w-[100vw] flex justify-center items-center'
          : undefined
      }
    />
  );
}
