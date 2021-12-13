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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label>
              <span className="text-gray-700 font-bold">お名前(姓名)</span>
              <span className="ml-2 badge badge-accent font-bold">必須</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
                {...register('name', { required: 'お名前は必須です。' })}
                defaultValue={currentState.name}
              />
            </label>
            {errors.name && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.name?.message}</div>
            )}
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">ふりがな(姓名)</span>
              <span className="ml-2 badge badge-accent font-bold">必須</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
                {...register('nameFurigana', { required: 'ふりがな(姓名)は必須です。' })}
                defaultValue={currentState.nameFurigana}
              />
            </label>
            {errors.nameFurigana && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.nameFurigana?.message}</div>
            )}
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">会社名</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
                {...register('organization')}
                defaultValue={currentState.organization}
              />
            </label>
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">メールアドレス</span>
              <span className="ml-2 badge badge-accent font-bold">必須</span>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            </label>
            {errors.email && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.email?.message}</div>
            )}
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">郵便番号</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="154-0003"
                defaultValue={currentState.postalCode}
                {...register('postalCode', {
                  pattern: {
                    value: /^[\d-]+$/,
                    message: '正しい郵便番号を入力してください。',
                  },
                })}
              />
            </label>
            {errors.postalCode && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.postalCode?.message}</div>
            )}
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">ご住所</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
                {...register('address')}
                defaultValue={currentState.address}
              />
            </label>
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">電話番号</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="03-1234-5678"
                defaultValue={currentState.tel}
                {...register('tel', {
                  pattern: {
                    value: /^[\d-]+$/,
                    message: '正しい電話番号を入力してください。',
                  },
                })}
              />
            </label>
            {errors.tel && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.tel?.message}</div>
            )}
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">どの製品について</span>
              <select
                className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                {...register('whichProduct', {})}
              >
                <option>Aサービスについて</option>
                <option>Bサービスについて</option>
                <option>Cサービスについて</option>
                <option>その他</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">お問い合わせ件名</span>
              <span className="ml-2 badge badge-accent font-bold">必須</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
                {...register('subject', { required: 'お問い合わせ件名は必須です。' })}
                defaultValue={currentState.subject}
              />
            </label>
            {errors.subject && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.subject?.message}</div>
            )}
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">お問い合わせ内容</span>
              <span className="ml-2 badge badge-accent font-bold">必須</span>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows={5}
                {...register('details', { required: 'お問い合わせ内容は必須です。' })}
                defaultValue={currentState.details}
              />
            </label>
            {errors.details && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.details?.message}</div>
            )}
          </div>
          <div>
            <label>
              <span className="text-gray-700 font-bold">個人情報の取り扱いについて</span>
              <span className="ml-2 badge badge-accent font-bold">必須</span>
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
                    {...register('agree', { required: '個人情報の取り扱いについての同意は必須です。' })}
                    defaultChecked={currentState.agree}
                  />
                  <span className="ml-2">同意する</span>
                </label>
              </div>
            </label>
            {errors.agree && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.agree?.message}</div>
            )}
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">
              確認画面へ
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormPage;
