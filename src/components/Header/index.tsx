interface Props {
  first_word: string
  second_word: string
  children?: any
}
const Header = ({ first_word, second_word, children }: Props) => (
  <nav class="flex items-center bg-bg-400 h-[48px] border-bottom border-solid border-b-2 border-secondary-100 font-oswald uppercase subpixel-antialiased text-lg font-semibold">
    <span class="md:pl-3 pl-3 text-secondary-100">
      {first_word}
    </span>

      <span class="text-primary-600">{second_word}</span>
    {children}
  </nav>
)

export default Header
