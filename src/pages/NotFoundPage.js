import { useHistory, useLocation } from "react-router";

export default function NotFoundPage() {
  const history = useHistory();
  console.log("NFP history", history);
  const location = useLocation();
  console.log("NFP location", location);

  const backToHome = () => {
    history.push(location?.state?.form?.location ?? "/");
  };

  return (
    <>
      <h1>404 Page is not found</h1>
      <button type="button" onClick={backToHome}>
        backToHome
      </button>
    </>
  );
}
