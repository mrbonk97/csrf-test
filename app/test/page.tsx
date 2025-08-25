import { useEffect } from "react";

const TestPage = () => {
  useEffect(() => {
    window.onload = () => {
      const form = document.getElementById("form") as HTMLFormElement | null;
      if (form) form.submit();
    };
  }, []);
  return (
    <main>
      <form id="form" action="http://10.167.32.222:8080/sitemanager/modify" method="post">
        <input name="ctbtDvCd" value="1" />
        <input name="apcDvCd" value="01" />
        <input name="mmFtrmCtbtAmt" value="123456" />
        <input name="agrmYn" value="Y" />
        <button type="submit">제출</button>
      </form>
    </main>
  );
};

export default TestPage;
