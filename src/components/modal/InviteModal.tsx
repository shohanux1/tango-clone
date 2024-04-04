import React from "react";
import Modal from "./Modal";
import Input from "../input/Input";
import Button from "../button/Button";
import { BiChevronDown, BiPlus } from "react-icons/bi";
import SelectBox from "../Selectbox/Selectbox";

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
      <div className="px-6">
        <div className="flex items-center mt-4 gap-4">
          <div className="w-full">
            <Input type="email" placeholder="Enter your email" />
          </div>
          <SelectBox />
        </div>

        <Button
          className="mt-4 text-xs border flex-1 border-gray-300"
          variant="secondary"
        >
          <BiPlus size={14} />
          Add another email
        </Button>
      </div>
    </Modal>
  );
};

export default InviteModal;
