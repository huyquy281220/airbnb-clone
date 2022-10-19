import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
// import "./Footer.css";
import Images from "../../assets/img";

const Footer: React.FC = () => {
  const supports = ["Help Center", "AirCover", "Safety information", "Supporting people with disabilities", "Cancellation options", "Our COVID-19 Response", "Report a neighborhood concern"];
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }
  return (
    <div className="flex">
      <div className="flex font-light">
        <p>© 2022 Airbnb, Inc.</p>
        <a href="" className="ml-3 hover:underline">Privacy</a>
        <a href="" className="ml-3 hover:underline">Terms</a>
        <a href="" className="ml-3 hover:underline">Sitemap</a>
        <button className="ml-3 hover:underline mb-2">Destinations</button>
      </div>
      <div className="flex ml-auto">
        <button className="flex items-center mr-3 hover:underline"><img src={Images.global} alt="error" className="w-[20px] mr-2"/>English (US)</button>
        <button className="flex items-center mr-3 hover:underline"><span className="font-bold text-lg mr-2">$</span> USD</button>
        <button onClick={openModal} className="flex items-center hover:underline">Support & resources<img src={Images.iconPopup} alt="error" className="w-[20px] ml-2"/></button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName="modal-overlay"
          className="modal-content"
          contentLabel="Example Modal"
          appElement={document.getElementById('root') || undefined}
        >
          <button onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} className="p-3 mr-0"/>
          </button>
          <div className="grid grid-cols-4">
            <div className="ml-12">
              <h3 className="font-bold mb-3">Support</h3>
              <ul>
              {supports.map((support, index) => {
                return (
                  <li key={index} className="mb-3">{support}</li>
                )
              })}
              </ul>
            </div>

            <div className="ml-12">
              <h3 className="font-bold mb-3">Community</h3>
              <ul>
                <li className="mb-3">Airbnb.org: disaster relief housing</li>
                <li className="mb-3">Support Afghan refugees</li>
                <li className="mb-3">Combating discrimination</li>
              </ul>
            </div>

            <div className="ml-12">
              <h3 className="font-bold mb-3">Hosting</h3>
              <ul>
                <li className="mb-3">Try hosting</li>
                <li className="mb-3">AirCover for Hosts</li>
                <li className="mb-3">Explore hosting resources</li>
                <li className="mb-3">Visit our community forum</li>
                <li className="mb-3">How to host responsibly</li>
              </ul>
            </div>

            <div className="ml-12">
              <h3 className="font-bold mb-3">Airbnb</h3>
              <ul>
                <li className="mb-3">Newsroom</li>
                <li className="mb-3">Learn about new features</li>
                <li className="mb-3">Letter from our founders</li>
                <li className="mb-3">Careers</li>
                <li className="mb-3">Investors</li>
                <li className="mb-3">Gift cards</li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Footer