import { badgeInterface } from '../interfaces';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function Badge({ icon, tooltip }: badgeInterface) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="bg-white/10 rounded-full w-5 h-5 flex justify-center items-center">
            {icon}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="text-slate-600 select-none rounded-[4px] bg-white px-3 py-2 text-sm"
            sideOffset={5}
          >
            {tooltip}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
