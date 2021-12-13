// import { useAuthState } from '~/components/contexts/UserContext';

import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  name: String;
  email: String;
}

type Props = {
  handleNext: Function;
};

const FormPage = ({ handleNext }: Props) => {
  // const { state } = useAuthState();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    handleNext();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">名前(姓名)</span>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder=""
              {...register('name', { required: '名前は必須です。' })}
            />
          </label>
          {errors.name && <span className="text-sm font-bold tracking-wide text-red-500">{errors.name?.message}</span>}
          <label className="block">
            <span className="text-gray-700">メールアドレス</span>
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
            <span className="text-sm font-bold tracking-wide text-red-500">{errors.email?.message}</span>
          )}
          <label className="block">
            <span className="text-gray-700">What type of event is it?</span>
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
            >
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Additional details</span>
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
            <button type="submit" className="btn btn-outline btn-primary">
              確認画面へ
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormPage;
