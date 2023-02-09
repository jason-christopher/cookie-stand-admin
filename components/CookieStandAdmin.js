import CookieStandForm from "./CookieStandForm";
import CookieStandTable from "./CookieStandTable";
import useResource from "@/hooks/useResource";

export default function CookieStandAdmin() {

  const { resources, deleteResource } = useResource();

  return (
      <>
          <CookieStandForm />
          <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
      </>
  );
}
