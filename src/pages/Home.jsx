import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/layout/Layout";
function Home() {
  const { loading, error, user } = useSelector((d) => d.auth);

  return (
    <Layout>
      {error && <span>{toast.error(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div>
            <h1>Home page</h1>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Home;
