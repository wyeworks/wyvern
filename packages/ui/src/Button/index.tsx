interface ButtonProps {
  label: string;
  type: ButtonType;
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

export function Button({ label, type }: ButtonProps): JSX.Element {
  const buttonDynamicClass = (): string => {
    switch (type) {
      case ButtonType.Primary:
        return 'font-medium  bg-primary-600 text-primary-200 shadow-primary-chip';
      case ButtonType.Secondary:
        return 'font-regular bg-secondary-900 text-primary-500 border-solid border border-primary-500';
      default:
        return 'font-regular bg-secondary-900 text-primary-500 border-solid border border-primary-500';
    }
  };
  return (
    <div
      className={`${buttonDynamicClass()} text-secondary-100 flex uppercase text-center items-center py-2 px-4 rounded-md justify-center`}>
      <span>{label}</span>
    </div>
  );
}
