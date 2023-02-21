import { useEffect } from "react";

import Router from "next/router";

export default function RedirectDonation() {
  useEffect(() => {
    Router.push(
      "https://www.paypal.com/donate/?business=4YUWC3S9WY53Y&no_recurring=0&item_name=Qualquer+quantia+contribuir%C3%A1+com+o+mantimento+da+PIZY+em+funcionamento.&currency_code=BRL",
    );
  });
}
