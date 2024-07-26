export default function Header({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <div className="flex ui-bg-secondary-900 ui-items-center ui-border-secondary-100 ui-border-b-2 ui-m-0 ui-h-14 ui-w-full ui-pl-4 ui-justify-between"><h1 className="ui-text-2xl ui-font-medium"><span className="ui-text-secondary-100">WYE</span><span className="ui-text-primary-600">{title}</span></h1></div>
  );
}
