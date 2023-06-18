import React from "react";
import Modal from "./Modal";
import Input from "../input/Input";
import Button from "../button/Button";
import { BiChevronDown, BiPlus } from "react-icons/bi";
import Selectbox from "../Selectbox/Selectbox";

type InviteModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

const options = [
  {
    key: 1,
    title: "Admin",
    description: "Can manage all aspects of the workspace",
  },
];

const InviteModal = ({ isOpen, toggleModal }: InviteModalProps) => {
  return (
    <Modal
      actionName="Invite"
      title="Invite Members"
      toggleModal={toggleModal}
      isOpen={isOpen}
    >
      <div className="flex items-end mt-4">
        <div className="w-full md:basis-3/5 ">
          <Input type="email" label="Email" />
        </div>
        <div className="w-full md:basis-2/5 ml-4">
          <Selectbox />
        </div>
      </div>

      <Button
        className="mt-4 text-xs border flex-1 border-gray-300 "
        variant="secondary"
      >
        <BiPlus size={14} />
        Add another email
      </Button>
    </Modal>
  );
};

export default InviteModal;
