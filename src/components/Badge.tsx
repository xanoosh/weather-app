import { badgeInterface } from '../interfaces';

export default function Badge({ icon, tooltip }: badgeInterface) {
  return (
    <div>
      <p>tooltip {tooltip}</p>
      {icon}
    </div>
  );
}
