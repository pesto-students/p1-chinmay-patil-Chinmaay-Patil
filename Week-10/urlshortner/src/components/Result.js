import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const fetchData = async () => {
    const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
    setShortenLink(res.data.result.full_short_link);
  }
  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  },
    // eslint-disable-next-line
    [inputValue]);

  return (
    <>
      <div className="result">
        <p>{shortenLink}</p>
        <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)} >
          <button className={copied ? "copied" : ""}>Copy</button>
        </CopyToClipboard>
      </div>
    </>
  )
}

export default LinkResult