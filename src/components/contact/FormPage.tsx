import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormCtx } from '~/components/contexts/FormContext';
interface IFormInput {
  name: string;
  nameFurigana: string;
  email: string;
  whichProduct: string;
}

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
              <span className="text-gray-700 font-bold">名前(姓名)</span>
              <span className="ml-2 badge badge-accent font-bold">必須</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
                {...register('name', { required: '名前は必須です。' })}
                defaultValue={currentState.name}
              />
            </label>
            {errors.name && (
              <div className="mt-2 text-sm font-bold tracking-wide text-red-500">{errors.name?.message}</div>
            )}
          </div>

          <div>
            <label>
              <span className="text-gray-700 font-bold">メールアドレス</span>
              <span className="ml-2 badge badge-accent font-bold">必須</span>
              <input
                type="email"
                className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
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
              <span className="text-gray-700 font-bold">どの製品について</span>
              <select
                className="
                  block
                  w-full
                  mt-1
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
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
            <label className="block">
              <span className="text-gray-700 font-bold">Additional details</span>
              <textarea
                className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
                rows="3"
              />
            </label>
          </div>
          {/* <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="
                        rounded
                        border-gray-300
                        text-indigo-600
                        shadow-sm
                        focus:border-indigo-300
                        focus:ring
                        focus:ring-offset-0
                        focus:ring-indigo-200
                        focus:ring-opacity-50
                      "
                        checked
                      />
                      <span className="ml-2">Email me news and special offers</span>
                    </label>
                  </div>
                </div>
              </div> */}
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
