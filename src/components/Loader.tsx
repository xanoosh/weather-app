import { Oval } from 'react-loader-spinner';
import { loaderInterface } from '../interfaces';

export default function Loader({ size, color }: loaderInterface) {
  return (
    <Oval
      visible={true}
      height={size === 'lg' ? 80 : 20}
      width={size === 'lg' ? 80 : 20}
      strokeWidth={5}
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
