import { useAuthState } from '~/components/contexts/UserContext'
import { Head } from '~/components/shared/Head'

function Index() {
  const { state } = useAuthState()

  return (
    <>
      <Head title="お問い合わせフォーム" />
      <div className="container mx-auto px-8 mt-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6">お問い合わせフォーム</h1>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Full name</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email address</span>
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
              />
            </label>
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
              ></textarea>
            </label>
            <div className="block">
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
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default Index
