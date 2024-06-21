import React from "react";

function Disclaimer() {
  return (
    <div className="flex flex-col max-w-[920px]">
      <article className="dark:text-white/70 text-black/80">
        <h1 className="text-4xl md:text-4xl w-full font-medium dark:text-white pb-8">
          {" "}
          Disclaimer
        </h1>
        <p>
          Poligonswap is a decentralized exchange platform designed for
          cryptocurrency trading. The platform allows users to trade various
          cryptocurrencies, including but not limited to, Polygon, Ethereum, and
          Binance Smart Chain. Please be advised that Poligonswap is not a
          registered investment advisor and does not provide any investment
          advice. All trading activities on the platform are undertaken at the
          user's own risk. Users should be aware of the high volatility of
          cryptocurrencies and understand that investing in cryptocurrencies
          carries a high level of risk. Poligonswap is not responsible for any
          losses or damages incurred as a result of using the platform or
          engaging in any cryptocurrency transactions.
        </p>
        <br />
        <p>
          Users of Poligonswap are encouraged to conduct their own research and
          consult with a financial advisor before making any investment
          decisions. It is important to understand that cryptocurrency prices
          are highly speculative and may fluctuate significantly in a short
          period of time. Therefore, it is essential to exercise caution and
          make informed investment decisions. Poligonswap does not assume any
          responsibility for any losses incurred by users on the platform.
        </p>
        <br />
        <p>
          It is important to note that Poligonswap is a decentralized exchange
          platform that operates on blockchain technology. As such, Poligonswap
          does not have control over the cryptocurrency transactions that occur
          on the platform. Users must be aware that once a transaction is
          initiated on the blockchain, it cannot be reversed. Therefore, users
          must carefully review and verify all transaction details before
          initiating a transaction on the platform.
        </p>
        <br />
        <p>
          Poligonswap disclaims any responsibility for the actions of any
          third-party service providers, including but not limited to
          cryptocurrency wallets, blockchains, or other software used for
          cryptocurrency transactions. Users are advised to exercise caution
          when using third-party service providers and should verify the
          authenticity and reliability of these providers before using their
          services.
        </p>
        <br />
        <p>
          By using the Poligonswap platform, users agree to these terms and
          acknowledge that they are solely responsible for any and all
          cryptocurrency transactions conducted on the platform. Users must be
          aware of the risks associated with cryptocurrency trading and must
          take full responsibility for their actions on the platform.
          Poligonswap reserves the right to modify these terms and conditions at
          any time without notice. Users are advised to check the website
          regularly for updates and changes to the terms of use.
        </p>

        <br />
        <hr />
        <div className="flex items-center gap-4 mt-4">
          <p className="text-lg whitespace-nowrap dark:text-white">
            Best regards
          </p>

          <div className="hidden dark:flex t w-[160px] rounded-md p-1 ease-in-out duration-200">
            <img src="/brand/small/imagotipo_color.png" alt="" srcset="" />
          </div>
          <div className="dark:hidden   w-[160px] rounded-md p-1 ease-in-out duration-200">
            <img src="/brand/small/imagotipo_color_dark.png" alt="" srcset="" />
          </div>
        </div>
      </article>
    </div>
  );
}

export default Disclaimer;
