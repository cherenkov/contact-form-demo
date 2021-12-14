import { FormEvent, useContext, useEffect } from 'react';
import { FormCtx } from '~/components/contexts/FormContext';
import { useFunctions, useHttpsCallable } from '~/lib/firebase';

type Props = {
  handleBack: Function;
  handleNext: Function;
};

const ConfirmPage = ({ handleBack, handleNext }: Props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });

  const { currentState } = useContext(FormCtx);
  const onClickBack = (e: FormEvent<HTMLButtonElement>): void => {
    handleBack();
  };
  const onClickNext = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    try {
      console.log('送信されるデータ');
      console.log(currentState);

      const functions = useFunctions();
      const httpsCallable = useHttpsCallable();
      functions.region = 'asia-northeast1';

      const sendMail = httpsCallable(functions, 'sendMail');
      await sendMail(currentState);
      console.log('functions 成功');

      handleNext();
    } catch (err) {
      console.log('functions 失敗');
      console.log(err);
    }
  };

  const labels = [
    { name: 'お名前(姓名)' },
    { nameFurigana: 'ふりがな(姓名)' },
    { organization: '会社名' },
    { email: 'メールアドレス' },
    { postalCode: '郵便番号' },
    { address: 'ご住所' },
    { tel: '電話番号' },
    { whichProduct: 'どの製品について' },
    { subject: 'お問い合わせ件名' },
    { details: 'お問い合わせ内容' },
    { agree: '個人情報の取り扱いについて' },
  ];

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {labels.map((label, index) => {
          const [key, val] = Object.entries(label)[0];

          return (
            <div key={index}>
              <label>
                <span className="text-gray-700 font-bold">{val}</span>
              </label>
              <div className="mt-2 whitespace-pre-wrap">{key === 'agree' ? '同意する' : currentState[key]}</div>
            </div>
          );
        })}
        <div className="grid grid-cols-2 gap-8 mt-4">
          <button type="button" className="btn btn-outline btn-primary text-lg" onClick={onClickBack}>
            戻る
          </button>
          <button type="button" className="btn btn-primary text-lg" onClick={onClickNext}>
            送信する
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmPage;
