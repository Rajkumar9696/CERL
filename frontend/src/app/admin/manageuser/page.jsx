import React from 'react'

const ManageUser = () => {

  
  return (
    <div>
      <div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead className="bg-gray-50 dark:bg-neutral-700">
            <tr>
              <th scope="col" className="py-3 ps-4">
                <div className="flex items-center h-5">
                  <input
                    id="hs-table-checkbox-all"
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <label htmlFor="hs-table-checkbox-all" className="sr-only">
                    Checkbox
                  </label>
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
              >
                Age
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
              >
                Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            <tr>
              <td className="py-3 ps-4">
                <div className="flex items-center h-5">
                  <input
                    id="hs-table-checkbox-1"
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <label htmlFor="hs-table-checkbox-1" className="sr-only">
                    Checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                John Brown
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                45
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                New York No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 ps-4">
                <div className="flex items-center h-5">
                  <input
                    id="hs-table-checkbox-2"
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <label htmlFor="hs-table-checkbox-2" className="sr-only">
                    Checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                Jim Green
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                27
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                London No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 ps-4">
                <div className="flex items-center h-5">
                  <input
                    id="hs-table-checkbox-3"
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <label htmlFor="hs-table-checkbox-3" className="sr-only">
                    Checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                Joe Black
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                31
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                Sidney No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 ps-4">
                <div className="flex items-center h-5">
                  <input
                    id="hs-table-checkbox-4"
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <label htmlFor="hs-table-checkbox-4" className="sr-only">
                    Checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                Edward King
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                16
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                LA No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-3 ps-4">
                <div className="flex items-center h-5">
                  <input
                    id="hs-table-checkbox-5"
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  />
                  <label htmlFor="hs-table-checkbox-5" className="sr-only">
                    Checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                Jim Red
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                45
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                Melbourne No. 1 Lake Park
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ManageUser;