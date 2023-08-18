import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function MyModal({ isOpen, setUnderDev }:any) {
  function closeModal() {
    setUnderDev(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"        
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Currently Under Development
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  This feature is currently under development.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={closeModal}
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
