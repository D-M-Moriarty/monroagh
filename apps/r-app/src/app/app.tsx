// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { DateUtils } from '@monroagh/shared';

export function App() {
  function doSomething() {
    const timestamp = '1551830399000';
    DateUtils.parse(timestamp);
  }

  return (
    <>
      <NxWelcome title="r-app" />
      <button onClick={doSomething}>fd</button>
    </>
  );
}

export default App;
