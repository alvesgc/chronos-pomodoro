import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { HomeProps } from "../../pages/Home";

export function MainForm({state}: HomeProps) {
  return (
    <form className='form'>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='input'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>Proximo intervalo é de {state.config.workTime}min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
