import React, { useState } from "react";

function Accordion({ section }) {
  const [selectedIndex, setselectedIndex] = useState(null);

  const questions = [
    {
      title: "How do I download the app",
      answer:
        "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
    },

    {
      title: "Can I find a nearby Scoots?",
      answer:
        "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information. ",
    },

    {
      title: "Do I need a license to ride?",
      answer:
        "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.",
    },

    {
      title: "Should I wear a helmet?",
      answer:
        "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
    },

    {
      title: "How about the rules & regulations?",
      answer:
        "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way.",
    },

    {
      title: "What if I damage my Scoot?",
      answer:
        "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.",
    },
  ];

  return questions.map((question, i) => {
    return (
      <div className="bg-snow mb-6 px-[40px] py-[32px] flex flex-col gap-6 w-[730px]">
        <div className="flex items-center justify-between">
          <h4 className="text-h4">{question.title}</h4>
          <div className="cursor-pointer" onClick={() => setselectedIndex(i)}>
            {selectedIndex === true ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
              >
                <path d="M2 2L10 10L18 2" stroke="#FCB72B" stroke-width="3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="13"
                viewBox="0 0 18 13"
                fill="none"
              >
                <path d="M2 11L10 3L18 11" stroke="#FCB72B" stroke-width="3" />
              </svg>
            )}
          </div>
        </div>
        <p>{question.answer}</p>
      </div>
    );
  });
}

export default Accordion;
