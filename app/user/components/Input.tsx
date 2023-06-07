
interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  }
  
  const Input: React.FC<InputProps> = ({ placeholder, value, type = "text", onChange, disabled }) => {
    return (
      <div className="w-full">
      
        <input
          disabled={disabled}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type={type}
          className="
            w-full
            p-4 
            text-lg 
            bg-white
            border-2
            border-gray-300 
            rounded-md
            outline-none
            text-black
            focus:border-sky-500
            focus:border-2
            transition
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
            mb-2
          "
        
        />
      </div>
     );
  }
   
  export default Input;