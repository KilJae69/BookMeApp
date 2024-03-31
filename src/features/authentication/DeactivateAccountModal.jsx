import { HiExclamationTriangle } from "react-icons/hi2";

import { memo } from "react";
import Modal from "../../components/Modals/Modal";

import useDeactivateAccountModal from "../../store/useDeactivateAccountModal";

const DeactivateAccountModal = memo(function DeactivateAccountModal() {
  const { onClose, isOpen } = useDeactivateAccountModal();

  const handleConfirmDelete = () => {};

  const bodyContent = (
    //   isDeleting ? (
    //     <div className="flex py-18 justify-center items-center min-h-[100px] ">
    //       <Spinner size="huge" />
    //     </div>
    //   ) : (
    <div>
      <div className="p-5 sm:p-0">
        <div className="mt-2 text-center sm:text-left">
          <div className="">
            <p className="text-md text-textPrimary500">
              Are you sure you want to deactivate your account? All of your
              collections will be removed permanently from our servers. This
              action cannot be undone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  //   );

  return (
    <Modal
      onSubmit={handleConfirmDelete}
      icon={<HiExclamationTriangle className="text-primary600 h-8 w-8" />}
      body={bodyContent}
      isOpen={isOpen}
      onClose={onClose}
      title="Deactivate account"
    />
  );
});

export default DeactivateAccountModal;
