// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// // import { ESEWA_FRAUD_TEST_URL, ESEWA_TEST_PID, ESEWA_SCD } from "../config";

export default function Success() {

    return (
        <div>
            success
        </div>
    )
//   const search = useLocation().search;
//   const ESEWA_FRAUD_TEST_URL = 'https://uat.esewa.com.np/epay/transrec'
//   const ESEWA_TEST_PID = " Esewa_Task_4"
//   const ESEWA_SCD ="EPAYTEST"

//   const oid = new URLSearchParams(search).get("oid");
//   const amt = new URLSearchParams(search).get("amt");
//   const ref = new URLSearchParams(search).get("refId");
//   console.log("in success page", search, "oid", oid, "amt", amt, "ref", ref);

//   const params = {
//     amt: 100,
//     rid: ref,
//     pid: ESEWA_TEST_PID,
//     scd: ESEWA_SCD
//   };

//   useEffect(() => {
//     post();
//   });

//   const post = () => {
//     var form = document.createElement("form");
//     form.setAttribute("method", "POST");
//     form.setAttribute("action", ESEWA_FRAUD_TEST_URL);

//     for (var key in params) {
//       var hiddenField = document.createElement("input");
//       hiddenField.setAttribute("type", "hidden");
//       hiddenField.setAttribute("name", key);
//       hiddenField.setAttribute("value", params[key]);
//       form.appendChild(hiddenField);
//     }

//     document.body.appendChild(form);
//     form.submit();
//   };

//   return <div></div>;
}

