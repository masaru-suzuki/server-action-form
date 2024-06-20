import { Input } from '../ui/input';
import { Label } from '../ui/label';

export const FormElement = ({
  item,
  data = '',
}: {
  item: string;
  data?: string;
}) => {
  return (
    <div className="grid justify-items-start gap-2">
      <Label htmlFor={item}>{item}</Label>
      <Input
        id={item}
        name={item}
        placeholder={item}
        defaultValue={data}
        className="border border-gray-300 rounded-md text-white-700 bg-zinc-700"
      />
    </div>
  );
};
