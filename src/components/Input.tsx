import { ChangeEvent } from "react";

type Props = {
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: any
};

const Input = ({ placeholder, onChange, type }: Props) => {
  return (
    <div className=" md:w-full flex flex-col w-[400px] mx-auto">
      <input
      type = {type}
        className=" mt-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
