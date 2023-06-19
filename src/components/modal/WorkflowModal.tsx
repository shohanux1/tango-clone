import React from "react";
import Modal from "./Modal";
import TabCard from "../workflow/TabCard";

type WorkflowModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

const WorkflowModal = ({ isOpen, toggleModal }: WorkflowModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      toggleModal={toggleModal}
      actionName="Start Capture"
      title="Create a new workflow"
    >
      <h2 className="mt-2 text-gray-500 text-sm font-medium px-6">
        Choose a tab to start capturing your Workflow:
      </h2>

      <div className="max-h-64 overflow-auto mt-6 px-6">
        <TabCard />
        <TabCard />
        <TabCard />
        <TabCard />
        <TabCard />
        <TabCard />
        <TabCard />
      </div>
    </Modal>
  );
};

export default WorkflowModal;
