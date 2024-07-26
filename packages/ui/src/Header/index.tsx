export default function Header({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <div className="flex ui-bg-secondary-900 ui-m-0 ui-w-full ui-pl-2 ui-justify-between"><h1 className="ui-text-4xl text-medium"><span className="ui-text-secondary-900">WYE</span><span className="ui-text-primary-500">{title}</span></h1></div>
  );
}
