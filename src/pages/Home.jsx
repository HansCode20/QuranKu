import React from "react";
import Layout from "../Fragment/Layout";
import Section from "../Fragment/Section";
import backgroundImage from "../assets/Home.jpg";
import { FaPlayCircle } from "react-icons/fa";

function Home() {
  return (
    <div>
      <Layout>
        <div className="relative">
          <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="h-screen bg-cover bg-center bg-no-repeat filter brightness-50 sm:bg-fixed"
          ></div>
          <div className="absolute inset-0 flex items-center text-center justify-center text-gray-200 font-semibold">
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-xl md:text-2xl m-4">
                "There is no relationship between Allah and anyone except
                through obedience to Him, <br />
                The bond with Allah blossoms solely through our unwavering
                obedience to His divine will"
              </p>
              {/* The button to open modal */}
              <a href="#my_modal_8" className="btn btn-info ">
                <FaPlayCircle />
                Play Video
              </a>
              {/* Put this part before </body> tag */}
              <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Video</h3>
                  <p className="py-4">
                    <iframe
                      width="100%"
                      height="350"
                      src="https://www.youtube.com/embed/N0nHk2oeu9o?si=Bed6Sg3EAFHeduMz"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </p>
                  <div className="modal-action">
                    <a href="#" className="btn">
                      Close
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section></Section>
      </Layout>
    </div>
  );
}

export default Home;
