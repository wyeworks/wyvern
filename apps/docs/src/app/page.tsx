import { Button, ButtonType } from '@repo/ui/Button';

export default function Page(): JSX.Element {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <Button label='Click me' type={ButtonType.Primary} />
      <Button label='Click me' type={ButtonType.Secondary} />
    </main>
  );
}
