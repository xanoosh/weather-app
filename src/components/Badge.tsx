import { badgeInterface } from '../interfaces';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function Badge({ icon, tooltip, text }: badgeInterface) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="h-5 flex justify-center gap-0.5rem items-center text-white/70">
            {icon}
            <span className="text-[0.5rem]">{text}</span>
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
