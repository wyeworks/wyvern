export default function Header({ title }: { title: string }): JSX.Element {
  return (
    <div className='flex bg-secondary-900 items-center border-secondary-100 border-b-[1px] m-0 h-14 w-full pl-4 justify-between'>
      <h1 className='text-2xl font-medium'>
        <span className='text-secondary-100'>WYE</span>
        <span className='text-primary-600'>{title}</span>
      </h1>
    </div>
  );
}
