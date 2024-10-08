import { JSX } from 'solid-js';

interface ItemProps {
  title: string;
  children?: JSX.Element;
}

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <li class='flex items-center'>
      <span class='text-lg text-secondary-100 font-bold'>{props.title}</span>
      {children}
    </li>
  );
};

export default Item;
