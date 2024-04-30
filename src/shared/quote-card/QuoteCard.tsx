import React from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaRegShareSquare,
  FaRegCopy,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import "./QuoteCard.css";
import { Tooltip } from "react-tooltip";
import { BioCardDisplay } from "../card-display/BioCardDisplay";
import { IconButton, Fab, Modal, Box, SxProps, Theme } from "@mui/material";
import { useState } from "react";
import { getModalColor } from "../utils/quote_card";
import { MdClose } from "react-icons/md";
import { Snackbar } from "@mui/material";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaReddit } from "react-icons/fa";

const QUOTE_ICON_SIZE = 42;

export default function QuoteCard(props: {
  quote: string | undefined;
  entityName: string | undefined;
}) {
  const { quote, entityName } = props;
  const [modalOpen, setModelOpen] = useState(false);
  const handleModalOpen = () => setModelOpen(true);
  const handleModalClose = () => setModelOpen(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  // Cast to SxProps below is necessary since 'bgcolor' string is not hard-coded, but will always be of type string
  const modalStyle = {
    position: "absolute" as "absolute",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    height: "fit-content",
    bgcolor: getModalColor(),
    borderRadius: "0.5rem",
    boxShadow: 24,
    p: 4,
  } as SxProps<Theme>;

  function share() {
    // TODO: Implement
    console.log("Should share...");
  }

  function copyText() {
    if (quote) {
      /**
       * https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative ( ¯\_(ツ)_/¯ )
       */
      document.execCommand("copy", true);
      /** For newer browsers */
      navigator.clipboard
        .writeText(quote)
        .then(() => {
          handleSnackbarOpen();
        })
        .catch((error) => {
          alert(`Copy failed! ${error}`);
        });
    }
  }

  return (
    <>
      <div className="component-container">
        <div className="bio-card-container">
          <BioCardDisplay entityName={entityName} />
        </div>
        <div className="quote-container">
          <div className="row qoute-left-container floated-left">
            <FaQuoteLeft className="pad-top-2" size={QUOTE_ICON_SIZE} />
          </div>
          <div className="quote">
            <div className="floated-right">
              <img
                className="person-image-top"
                src="https://via.placeholder.com/200"
                alt={entityName}
              ></img>
            </div>
            {quote}
            <div className="row quote-right-container floated-right">
              <FaQuoteRight size={QUOTE_ICON_SIZE} />
            </div>
          </div>
          <div className="quote-extras-container">
            <div className="row">
              <p>
                <span className="post-date">February 20th, 2024</span> - 1:48pm
              </p>
              <img
                src={require("../../core/assets/apollo_trans.gif")}
                width={50}
                height={50}
                alt="apollo gif"
              />
            </div>
            <Fab
              className="share-fab"
              variant="extended"
              size="small"
              color="primary"
              onClick={handleModalOpen}
            >
              <IoShareSocialOutline size={24} />
              <h4>Share</h4>
            </Fab>
          </div>
        </div>
        <div className="share-options">
          <div className="share-icons-parent">
            <div className="share-icon">
              <FacebookShareButton
                url={`https://mnemo.app/journal/${entityName}`}
                hashtag="#MnemoApp"
              >
                <FaFacebook size={24} />
              </FacebookShareButton>
            </div>
            <div className="share-icon">
              <TwitterShareButton
                url={`https://mnemo.app/journal/${entityName}`}
                hashtags={["MnemoApp", "genAI", `${entityName}`]}
              >
                <FaTwitter size={24} />
              </TwitterShareButton>
            </div>
            <div className="share-icon">
              <RedditShareButton
                url={`https://mnemo.app/journal/${entityName}`}
              >
                <FaReddit size={24} />
              </RedditShareButton>
            </div>
            <div className="share-icon">
              <IconButton onClick={copyText}>
                <FaRegCopy size={24} color="white" />
              </IconButton>
            </div>
          </div>
        </div>
        <Tooltip anchorSelect=".row" clickable place="bottom">
          Precise date brought to you by a friend of Apollo.
        </Tooltip>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <IconButton onClick={share} className="share-to">
            <FaRegShareSquare size={24} color="white" />
            <h4 className="modal-option-header">Share To</h4>
          </IconButton>
          <IconButton onClick={copyText} className="copy-text">
            <FaRegCopy size={24} color="white" />
            <h4 className="modal-option-header">Copy Text</h4>
          </IconButton>
        </Box>
      </Modal>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Added to Clipboard"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleModalClose}
            >
              <MdClose />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
}
