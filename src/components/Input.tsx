import { ChangeEvent } from 'react'


type Props = {
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, onChange }: Props) => {
    return (
        <div className=' w-full flex flex-col '>
            <input className=" w-[300px] mx-auto mt-10 p-2" type="text" placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default Input