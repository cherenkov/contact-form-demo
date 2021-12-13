import { FormEvent, useContext } from 'react';
import { FormCtx } from '~/components/contexts/FormContext';

type Props = {
  handleBack: Function;
  handleNext: Function;
};

const ConfirmPage = ({ handleBack, handleNext }: Props) => {
  const { currentState } = useContext(FormCtx);
  const onClickBack = (e: FormEvent<HTMLButtonElement>): void => {
    handleBack();
  };
  const onClickNext = (e: FormEvent<HTMLButtonElement>): void => {
    handleNext();
    console.log('送信されるデータ');
    console.log(currentState);
  };

  return (
    <>
      <div>{currentState?.name}</div>
      <div>{currentState?.email}</div>

      <button type="button" className="btn btn-outline btn-primary" onClick={onClickBack}>
        戻る
      </button>
      <button type="button" className="btn btn-primary" onClick={onClickNext}>
        送信する
      </button>
    </>
  );
};

export default ConfirmPage;
