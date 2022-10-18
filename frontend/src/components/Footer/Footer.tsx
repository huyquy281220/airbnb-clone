import Images from "../../assets/img";

const Footer: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex">
        <p>© 2022 Airbnb, Inc.</p>
        <a href="" className="ml-3">Privacy</a>
        <a href="" className="ml-3">Terms</a>
        <a href="" className="ml-3">Sitemap</a>
        <a href="" className="ml-3">Destinations</a>
      </div>
      <div className="flex ml-auto">
        <a href="" className="flex inline-block mr-3"><img src={Images.global} alt="error" />English (US)</a>
        <a href="" className="flex inline-block mr-3"><img src="" alt="error" />USD</a>
        <a href="" className="flex inline-block">Support & resources<img src="" alt="error" /></a>
      </div>
    </div>
  )
}

export default Footer