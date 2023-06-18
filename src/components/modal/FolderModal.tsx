import React from "react";
import Modal from "./Modal";
import Input from "../input/Input";

type FolderModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

const FolderModal = ({ isOpen, toggleModal }: FolderModalProps) => {
  return (
    <Modal
      actionName="Create"
      title="Create a new folder"
      toggleModal={toggleModal}
      isOpen={isOpen}
    >
      <div className="mt-4">
        <Input
          placeholder="Enter a folder name for your workflow"
          type="text"
          className="w-full"
          label="Folder Name"
        />
      </div>
    </Modal>
  );
};

export default FolderModal;
