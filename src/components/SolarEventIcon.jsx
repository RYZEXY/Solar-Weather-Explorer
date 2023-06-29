import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import cme from "../assets/icon-cme.jpg";
import flr from "../assets/icon-flr.jpg";
import gms from "../assets/icon-gms.jpg";
import hss from "../assets/icon-hss.jpg";
import ips from "../assets/icon-ips.jpg";
import mpc from "../assets/icon-mnp.jpg";
import rbe from "../assets/icon-rbe.png";
import sep from "../assets/icon-sep.jpg";
const iconArray = new Map([
  ["CME", cme],
  ["FLR", flr],
  ["GMS", gms],
  ["HSS", hss],
  ["IPS", ips],
  ["MPC", mpc],
  ["RBE", rbe],
  ["SEP", sep],
]);

function SolarEventIcon({ type, time, id, test }) {
  const eventDate = new Date(time);
  const year = eventDate.getFullYear();
  let month = String(eventDate.getMonth() + 1);
  month = month.padStart(2, "0");
  const day = String(eventDate.getDate()).padStart(2, "0");

  return (
    <Link to={`/event/${year}-${month}-${day}/${id}`} className="eventIcon">
      {test ? "Click me!" : null}
      <img src={iconArray.get(type)} alt={type} width={50} height={50} title={type} />
      <span>{type} on {time}</span>
    </Link>
  );
}
SolarEventIcon.propTypes = {
  type: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.string,
  test: PropTypes.bool,
};

export default SolarEventIcon;
