import React, { useEffect } from "react";

import { useStyles } from "./ModalCss";
import {
    Box,
    Button, 
    Modal,
    TextField
} from '@material-ui/core';


export default function BasicModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [questions, setQuestions] = React.useState([]);
    const [responses, setResponses] = React.useState([]);
    const [currentResponse, setCurrentResponse] = React.useState('');


    //on render pull questions via API
    useEffect(() => {
        setQuestions([
            'Does your supervisor support you in doing you job?',
            'Are there adequate opportunities to grow and be challenged?',
            'Do you feel feedback and ideas for improvements are valued?',
        ]);
    }, []);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleNext = () => {
        //before going next, push current response to the responses and reset it
        setResponses([...responses, currentResponse]);
        setCurrentResponse('');
        setActiveStep(activeStep + 1);
    }

    function handleSubmit() {
        setResponses([...responses, currentResponse]);
        setCurrentResponse('');
        
        console.log("submit form!");
        setResponses([]);
        // console.log(responses);
        setOpen(false);
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.modalContainer}>
            <div className={classes.formArea}>
                <div className={classes.formContentBox}>
                    <div className={classes.formHeader}>
                        <div className={classes.formTitle}>
                            <h2 className={classes.questionText}> Anonymous Survey</h2>
                            <h4 className={classes.questionText}> Q3 2021 - Manager feeback</h4>
                        </div>
                        <Button className={classes.exitButton} onClick={handleClose}>
                            <h5>Save for later</h5>
                        </Button>
                    </div>
                    <div className={classes.questionArea}>
                        <div className={classes.questionText}>
                            {questions[activeStep]}
                        </div>
                        <TextField 
                            className={classes.textInput}
                            fullWidth
                            multiline
                            rows={10}
                            value={currentResponse}
                            placeholder={"Enter text here..."}
                            variant="filled"
                            onChange={e => setCurrentResponse(e.target.value)}
                        />
                    </div>
                </div>

                <div className={classes.actionBar}>
                    <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
                        back
                    </Button>
                    <div className={classes.pageDisplay}>
                        {activeStep+1} / {questions.length}
                    </div>
                    {activeStep === questions.length - 1?
                        <Button size='small' onClick={handleSubmit}>
                            submit
                        </Button> :
                        <Button size='small' onClick={handleNext}>
                            next
                        </Button>
                    }
                </div>
            </div>

          </Box>
        </Modal>
      </div>
    );
  }