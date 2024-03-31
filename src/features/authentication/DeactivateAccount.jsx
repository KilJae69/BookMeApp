import Button from "../../components/buttons/Button";
import useDeactivateAccountModal from "../../store/useDeactivateAccountModal";
import Heading from "../../components/Heading";
import DeactivateAccountModal from "./DeactivateAccountModal";

function DeactivateAccount() {
  const { onOpen } = useDeactivateAccountModal();
  return (
    <div className="flex flex-col gap-3 items-start">
      <Heading level={2} className="text-primary600 text-xl">
        Deactivate account
      </Heading>
      <p>
        Please be aware that this action is permanant and cannot be reversed.
      </p>
      <Button onClick={onOpen} variation="primary">
        Deactivate account
      </Button>
      <DeactivateAccountModal />
    </div>
  );
}

export default DeactivateAccount;
