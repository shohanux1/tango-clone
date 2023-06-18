import React from "react";
import Input from "@/src/components/input/Input";
import Avatar from "@/src/components/avatar/Avatar";
import { HiPencil } from "react-icons/hi";
import Button from "@/src/components/button/Button";

const Profile = () => {
  return (
    <div className="p-4 rounded-md h-full mx-auto max-w-2xl">
      <div className="relative mb-6 w-fit">
        <Avatar
          size="large"
          alt="avatar"
          src="https://avatars.githubusercontent.com/u/25126281?v=4"
        />
        <button className="flex items-center justify-center absolute -top-1 -right-1 w-6 h-6 border-2 text-white border-white bg-blue-600 rounded-full">
          <HiPencil size={12} />
        </button>
      </div>
      <div className="flex items-center gap-5 mb-4">
        <Input label="First Name" />
        <Input label="Last Name" />
      </div>

      <div className="mb-4">
        <Input label="Email" />
      </div>

      <div>
        <Input type="password" label="Old Password" />
      </div>

      <div className="flex items-center gap-5 mb-6 mt-4">
        <Input type="password" label="New password" />
        <Input type="password" label="Confirm new password" />
      </div>

      <div className="flex justify-end w-full ">
        <Button className="w-full md:w-2/5" variant="primary">
          Update
        </Button>
      </div>
    </div>
  );
};

export default Profile;
