import { Play } from 'phosphor-react'
import {
  HomeContainer,
  CountdownContainer,
  FormContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">I&apos;m going to work on</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Give a name to your project"
          />

          <datalist id="task-suggestions">
            <option value="Project 1" />
            <option value="Project 1" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            placeholder="00"
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} /> Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
