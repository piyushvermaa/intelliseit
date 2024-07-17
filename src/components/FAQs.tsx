

export const FAQs = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center text-white/60 py-32 px-5">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-tight text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">How can I enroll in a course?</summary>
            <div className="px-4 pb-4">
              <p>You can easily enroll in a course on our website by browsing our course catalog, selecting the course you want, and adding it to your cart. Then, proceed to checkout, where you can provide your details and payment information to complete the enrollment.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">What payment methods do you accept?</summary>
            <div className="px-4 pb-4">
              <p>We accept various payment methods, including credit cards, debit cards, net banking, and mobile wallet payments. You can choose the payment option that is most convenient for you during the checkout process.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">How long do I have access to the course?</summary>
            <div className="px-4 pb-4">
              <p>Once you enroll in a course, you will have lifetime access to the course materials. This allows you to learn at your own pace and revisit the content whenever you need to.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">Can I get a refund if I'm not satisfied with the course?</summary>
            <div className="px-4 pb-4">
              <p>Yes, we have a hassle-free refund policy. If you are not satisfied with the course, you can initiate a refund within 30 days of enrollment. Please contact our customer support at <a href="mailto:example@intelliseit.com" className="underline">example@intelliseit.com</a> for assistance.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">Do you offer any free courses?</summary>
            <div className="px-4 pb-4">
              <p>Yes, we offer a variety of free courses to help you get started. You can browse our free course catalog on the website to find a course that suits your interests.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">How can I contact customer support?</summary>
            <div className="px-4 pb-4">
              <p>If you have any questions, concerns, or need assistance, you can reach our customer support team at 9911083755 during our business hours, Monday to Saturday from 10 am to 6 pm. You can also contact us via email at <a href="mailto:example@intelliseit.com" className="underline">example@intelliseit.com</a>.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">What are the terms and conditions for using Intelliseit?</summary>
            <div className="px-4 pb-4">
              <p>You can find our detailed terms and conditions by visiting our <a href="/terms" className="underline">Terms of Service</a> page on our website. It includes information about our policies, user guidelines, and more.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};
