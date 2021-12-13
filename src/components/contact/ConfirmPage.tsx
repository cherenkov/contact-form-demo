import { FormEvent } from 'react';

type Props = {
  handleBack: Function;
  handleNext: Function;
};

const ConfirmPage = ({ handleBack, handleNext }: Props) => {
  const onClickBack = (e: FormEvent<HTMLButtonElement>): void => {
    handleBack();
  };
  const onClickNext = (e: FormEvent<HTMLButtonElement>): void => {
    handleNext();
  };

  return (
    <>
      <button type="button" onClick={onClickBack}>
        戻る
      </button>
      <button type="button" onClick={onClickNext}>
        送信する
      </button>
    </>
  );
};

export default ConfirmPage;
