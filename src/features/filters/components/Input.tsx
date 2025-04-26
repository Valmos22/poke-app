interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  iconLeft?: string;
  iconRight?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    id = '',
    label = '',
    placeholder = ' ',
    iconLeft = '',
    iconRight = '',
    value = '',
    onChange = () => {},
  }: InputProps ) => {
    return (
      <div className='w-full'>
    {iconLeft && <i className={`bi bi-${iconLeft} text-2xl leading-none txt_primary_easystock`}></i>}
        <input
          className="input_search w-full h-[30px] rounded-[20px] px-[5px] text-center text-white border border-white/10 "
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange} 
        />
        {iconRight && <i className={`bi bi-${iconRight} text-2xl leading-none txt_primary_easystock`}></i>}
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    )
  }