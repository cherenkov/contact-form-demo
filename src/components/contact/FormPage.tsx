import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormCtx } from '~/components/contexts/FormContext';
import { IFormInput } from '~/components/Interfece';

type Props = {
  handleNext: Function;
};

const FormPage = ({ handleNext }: Props) => {
  const { currentState, setCurrentState } = useContext(FormCtx);

  // react-hook-formによるバリデーションで使用
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setCurrentState(data);
    handleNext();
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <label>
              <span className="label-text">お名前(姓名)</span>
              <span className="label-required">必須</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              {...register('name', { required: 'お名前(姓名)は必須です。' })}
              defaultValue={currentState.name}
            />
            {errors.name && <div className="text-error-validation">{errors.name?.message}</div>}
          </div>
          <div>
            <label>
              <span className="label-text">ふりがな(姓名)</span>
              <span className="label-required">必須</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              {...register('nameFurigana', { required: 'ふりがな(姓名)は必須です。' })}
              defaultValue={currentState.nameFurigana}
            />
            {errors.nameFurigana && <div className="text-error-validation">{errors.nameFurigana?.message}</div>}
          </div>
          <div>
            <label>
              <span className="label-text">会社名</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              {...register('organization')}
              defaultValue={currentState.organization}
            />
          </div>
          <div>
            <label>
              <span className="label-text">メールアドレス</span>
              <span className="label-required">必須</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="john@example.com"
              defaultValue={currentState.email}
              {...register('email', {
                required: 'メールアドレスは必須です。',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '正しいメールアドレスを入力してください。',
                },
              })}
            />
            {errors.email && <div className="text-error-validation">{errors.email?.message}</div>}
          </div>
          <div>
            <label>
              <span className="label-text">郵便番号</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="154-0003"
              defaultValue={currentState.postalCode}
              {...register('postalCode', {
                pattern: {
                  value: /^(?!-)[\d-]+$/,
                  message: '正しい郵便番号を入力してください。',
                },
              })}
            />
            {errors.postalCode && <div className="text-error-validation">{errors.postalCode?.message}</div>}
          </div>
          <div>
            <label>
              <span className="label-text">ご住所</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              {...register('address')}
              defaultValue={currentState.address}
            />
          </div>
          <div>
            <label>
              <span className="label-text">電話番号</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="03-1234-5678"
              defaultValue={currentState.tel}
              {...register('tel', {
                pattern: {
                  value: /^(?!-)[\d-]+$/,
                  message: '正しい電話番号を入力してください。',
                },
              })}
            />
            {errors.tel && <div className="text-error-validation">{errors.tel?.message}</div>}
          </div>
          <div>
            <label>
              <span className="label-text">どの製品について</span>
            </label>
            <select
              className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              {...register('whichProduct')}
            >
              <option>---</option>
              <option>Aサービスについて</option>
              <option>Bサービスについて</option>
              <option>Cサービスについて</option>
              <option>その他</option>
            </select>
          </div>
          <div>
            <label>
              <span className="label-text">お問い合わせ件名</span>
              <span className="label-required">必須</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder=""
              {...register('subject', { required: 'お問い合わせ件名は必須です。' })}
              defaultValue={currentState.subject}
            />
            {errors.subject && <div className="text-error-validation">{errors.subject?.message}</div>}
          </div>
          <div>
            <label>
              <span className="label-text">お問い合わせ内容</span>
              <span className="label-required">必須</span>
            </label>
            <textarea
              className="form-control"
              rows={5}
              {...register('details', { required: 'お問い合わせ内容は必須です。' })}
              defaultValue={currentState.details}
            />
            {errors.details && <div className="text-error-validation">{errors.details?.message}</div>}
          </div>
          <div>
            <label>
              <span className="label-text">個人情報の取り扱いについて</span>
              <span className="label-required">必須</span>
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  {...register('agree', { required: '個人情報の取り扱いについての同意は必須です。' })}
                  defaultChecked={currentState.agree}
                />
                <span className="ml-2">同意する</span>
              </label>
            </div>
            {errors.agree && <div className="text-error-validation">{errors.agree?.message}</div>}
          </div>
          <div className="grid grid-cols-1 mt-4">
            <button type="submit" className="btn btn-primary text-lg">
              確認画面へ
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormPage;
