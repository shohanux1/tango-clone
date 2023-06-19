import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Input from "../input/Input";
import Button from "../button/Button";

type ModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
  title: string;
  actionName: string;
};

const Modal = ({
  isOpen,
  toggleModal,
  children,
  title,
  actionName,
}: ModalProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 " onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform  rounded-2xl bg-white  text-left align-middle shadow-xl transition-all mx-6">
                  <div className="">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 px-6 pt-6"
                    >
                      {title}
                    </Dialog.Title>
                    {children}
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 rounded-b-2xl">
                    <Button
                      onClick={toggleModal}
                      type="button"
                      className="mb-2 w-full md:mb-0 md:ml-2 md:w-fit"
                      variant="primary"
                    >
                      {actionName}
                    </Button>
                    <Button
                      className="w-full md:w-fit"
                      onClick={toggleModal}
                      type="button"
                    >
                      Cancel
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
